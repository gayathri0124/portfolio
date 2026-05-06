"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useScroll, useSpring, useTransform } from "framer-motion";

export default function StorylineCanvas() {
  const mountRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  // Spring for smooth rotation/transitions
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    // Geometries for Storyline
    const geometries = [
      new THREE.SphereGeometry(1.2, 32, 32),          // 0: Hero (Atomic)
      new THREE.OctahedronGeometry(1.8, 0),           // 1: Experience (Structural)
      new THREE.TorusKnotGeometry(1.2, 0.4, 100, 16), // 2: Projects (Complex)
      new THREE.DodecahedronGeometry(1.8, 1),         // 3: Skills (Dense)
      new THREE.TorusKnotGeometry(1.5, 0.2, 200, 20)  // 4: Contact (Supreme)
    ];

    const material = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.1,
      roughness: 0.05,
      transmission: 0.9,
      thickness: 1.5,
      transparent: true,
      opacity: 0.3,
      clearcoat: 1,
      sheen: 1,
      sheenColor: new THREE.Color(0xa855f7), // Purple/Blue for Intelligence
    });

    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0xa855f7, 
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });

    const mesh = new THREE.Mesh(geometries[0], material);
    const wireframe = new THREE.Mesh(geometries[0], wireframeMaterial);
    wireframe.scale.set(1.002, 1.002, 1.002);
    
    scene.add(mesh);
    scene.add(wireframe);

    // Particle field
    const particlesCount = 400;
    const posArray = new Float32Array(particlesCount * 3);
    for(let i=0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 20;
    }
    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
      color: 0x3b82f6,
      size: 0.015,
      transparent: true,
      opacity: 0.4
    });
    const particleField = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particleField);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0x22c55e, 2);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const mouseLight = new THREE.PointLight(0x3b82f6, 1);
    scene.add(mouseLight);

    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("pointermove", handleMouseMove);

    let frame = 0;
    const animate = () => {
      const progress = smoothProgress.get();
      
      // Update mouse light position
      mouseLight.position.x = mouse.x * 5;
      mouseLight.position.y = mouse.y * 5;
      mouseLight.position.z = 2;
      
      // Calculate which section we are in
      const index = Math.min(
        Math.floor(progress * geometries.length),
        geometries.length - 1
      );

      if (mesh.geometry !== geometries[index]) {
        mesh.geometry = geometries[index];
        wireframe.geometry = geometries[index];
      }

      // SIDE-TO-SIDE POSITIONING LOGIC
      // 0.0 (Hero): 3.0 (Right - clear of photo)
      // 0.25 (Work): -2.5 (Left)
      // 0.5 (Projects): 2.5 (Right)
      // 0.75 (Skills): -2.5 (Left)
      // 1.0 (Contact): 0 (Center)
      const positionsX = [3.0, -2.5, 2.5, -2.5, 0];
      const sectionProgress = (progress * (geometries.length - 1)) % 1;
      const startPos = positionsX[index];
      const endPos = positionsX[index + 1] ?? 0;
      
      mesh.position.x = THREE.MathUtils.lerp(startPos, endPos, sectionProgress);
      wireframe.position.x = mesh.position.x;

      // Rotate based on scroll + auto
      mesh.rotation.y = progress * Math.PI * 4 + Date.now() * 0.0005;
      mesh.rotation.x = progress * Math.PI * 2 + Date.now() * 0.0003;
      wireframe.rotation.copy(mesh.rotation);

      // Move object slightly based on scroll
      mesh.position.y = Math.sin(progress * Math.PI) * 0.5;
      wireframe.position.y = mesh.position.y;
      
      particleField.rotation.y += 0.0005;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };


    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handleMouseMove);
      geometries.forEach(g => g.dispose());
      material.dispose();
      wireframeMaterial.dispose();
      particlesMat.dispose();
      particlesGeo.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [smoothProgress]);

  return <div className="storyline-canvas" ref={mountRef} />;
}
