"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function SectionCanvas({ variant = "a" }) {
  const mountRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(mount);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return undefined;
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      40,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.z = 5.5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.TorusKnotGeometry(1.1, 0.22, 80, 10);
    const material = new THREE.MeshStandardMaterial({
      color: variant === "b" ? 0x00e5b0 : 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const knot = new THREE.Mesh(geometry, material);
    scene.add(knot);

    const particleCount = 80;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 5;
      positions[i + 1] = (Math.random() - 0.5) * 5;
      positions[i + 2] = (Math.random() - 0.5) * 5;
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const particleMaterial = new THREE.PointsMaterial({
      color: variant === "b" ? 0x6366f1 : 0x00e5b0,
      size: 0.02,
      transparent: true,
      opacity: 0.35,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const light = new THREE.DirectionalLight(0xffffff, 0.6);
    light.position.set(2, 2, 4);
    scene.add(light);

    let frame = 0;
    const animate = () => {
      knot.rotation.x += 0.003;
      knot.rotation.y += 0.002;
      particles.rotation.y -= 0.001;
      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };

    const onResize = () => {
      const { clientWidth, clientHeight } = mount;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    };

    window.addEventListener("resize", onResize);
    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      geometry.dispose();
      material.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [active, variant]);

  return <div className="section-canvas" ref={mountRef} aria-hidden="true" />;
}
