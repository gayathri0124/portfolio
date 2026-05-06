"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

 
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const cards = document.querySelectorAll(".glass-card, .proj-card, .contact-card");
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    window.location.href = `mailto:gayathrireddykalthireddy@gmail.com?subject=Contact&body=${encodeURIComponent(formData.get("message"))}`;
  };

  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Swipe Savvy",
      date: "Aug 2025 – Jan 2026",
      points: [
        "Built AI marketing engine cutting API latency by 38%.",
        "Delivered real-time analytics with Next.js & NestJS.",
        "Shipped GPT-4 powered agents for PCI/PII safety.",
      ],
    },
    {
      role: "Mobile Application Intern",
      company: "Medfilo Inc",
      date: "Jun 2025 – Aug 2025",
      points: [
        "Engineered Node.js microservices reducing latency by 20%.",
        "Automated HIPAA-compliant PDF delivery with AWS S3.",
      ],
    },
    {
      role: "Technical Support Assistant",
      company: "George Washington University",
      date: "Aug 2024 – May 2025",
      points: [
        "Built IT platform with automated NLP classification.",
        "Integrated Naive Bayes NLP models to cut misclassification.",
        "Optimized PostgreSQL queries reducing latency by 28%.",
      ],
    },
    {
      role: "Software Developer",
      company: "NSL Hub",
      date: "Jul 2022 – Jul 2023",
      points: [
        "Architected a distributed academic data platform, improving report throughput by 55%.",
        "Optimized REST APIs to cut response times from 1.8s to 420ms.",
        "Built ML pipelines using Random Forest and BERT (R² 0.89).",
      ],
    },
    {
      role: "Research Intern – ML",
      company: "Vasavi Lab",
      date: "Jun 2022 – Jan 2023",
      points: [
        "Fine-tuned ResNet-34 on 54K+ images, delivering 93% test accuracy.",
        "Reduced false positives from 12% to 6% via data augmentation.",
      ],
    },
  ];

  const education = [
    {
      degree: "MS in Computer Science",
      school: "George Washington University",
      date: "May 2025",
      desc: "Focus on Cloud Computing, Big Data, and Machine Learning. CGPA: 3.71/4.0",
    },
    {
      degree: "BE in Information Technology",
      school: "Vasavi College of Engineering",
      date: "May 2023",
      desc: "Core focus on Algorithms, Neural Networks, and Web Development. CGPA: 8.52/10",
    },
  ];

  const projects = [
    {
      title: "InsightAd",
      category: "Ranking AI",
      tech: ["Python", "PyTorch", "LLMs"],
      desc: "Two-stage ad ranking system blending CTR prediction with LLM explanations.",
      image: "/Insightad.png",
      github: "https://github.com/gayathri0124/InsightAd",
    },
    {
      title: "Mediguide",
      category: "Health ML",
      tech: ["Scikit-learn", "NLP"],
      desc: "AI health assistant predicting diseases from symptoms with hospital search.",
      image: "/mediguide_new.jpeg",
      github: "https://github.com/gayathri0124/MediGuide_",
    },
    {
      title: "Smart Logistics",
      category: "Logistics AI",
      tech: ["GPT-4o", "ML"],
      desc: "ML-based delay prediction and route optimization dashboard.",
      image: "/smartlogistics.webp",
      github: "https://github.com/gayathri0124/smartlogistics",
    },
  ];

  const skills = [
    { name: "Python", color: "#3776ab" },
    { name: "TypeScript", color: "#3178c6" },
    { name: "Next.js", color: "#6366f1" },
    { name: "React", color: "#61dafb" },
    { name: "PyTorch", color: "#ee4c2c" },
    { name: "AWS", color: "#ff9900" },
    { name: "Docker", color: "#2496ed" },
    { name: "Node.js", color: "#339933" },
  ];

  
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <main className="portfolio-wrapper">
      {/* ── Hero Section ── */}
      <section className="hero-container" id="top">
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="hero-badge">WELCOME TO MY UNIVERSE</motion.div>
          <motion.h1 variants={fadeInUp} className="hero-title">
            Crafting <span className="text-accent">Digital</span><br />
            Masterpieces
          </motion.h1>
          <motion.p variants={fadeInUp} className="hero-desc">
            I&apos;m <strong>Gayathri Kalthi Reddy</strong>, a professional <span>Software &amp; ML Engineer</span> dedicated to building high-performance systems.
          </motion.p>
          <motion.div variants={fadeInUp} className="hero-btns">
            <a href="#contact" className="btn-accent">LET&apos;S COLLABORATE</a>
            <a href="/Gayathri_K.pdf" target="_blank" className="btn-accent ghost">GET RESUME</a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div 
            className="code-card"
            whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02 }}
            style={{ perspective: 1000 }}
          >
            <div className="code-header">
              <div className="window-dots"><span></span><span></span><span></span></div>
              <span className="file-name">Portfolio.ts</span>
            </div>
            <div className="code-content">
              <p><span className="k">const</span> <span className="v">developer</span> = &#123;</p>
              <p>&nbsp;&nbsp;name: <span className="s">&apos;Gayathri Kalthi Reddy&apos;</span>,</p>
              <p>&nbsp;&nbsp;focus: <span className="s">&apos;Software &amp; ML Engineering&apos;</span>,</p>
              <p>&nbsp;&nbsp;passionate: <span className="k">true</span>,</p>
              <p>&nbsp;&nbsp;motto: <span className="s">&apos;Build with Purpose&apos;</span></p>
              <p>&#125;;</p>
              <br />
              <p><span className="v">developer</span>.showcase();</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Experience Section ── */}
      <section className="section-wrapper" id="work">
        <motion.div 
          className="section-head"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-accent">Experience</h2>
        </motion.div>
        <div className="timeline-wrap">
          <div className="timeline-line"></div>
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx} 
              className="timeline-node"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <div className="timeline-dot">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
              </div>
              <div className="timeline-card-wrap">
                <div className="glass-card">
                  <span className="exp-date">{exp.date}</span>
                  <h3 className="exp-role">{exp.role}</h3>
                  <h4 className="exp-company text-accent">{exp.company}</h4>
                  <ul className="exp-list">
                    {exp.points.map((p, i) => <li key={i}>{p}</li>)}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Projects Section ── */}
      <section className="section-wrapper" id="projects">
        <motion.div 
          className="section-head"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-accent">Projects</h2>
        </motion.div>
        <div className="proj-grid">
          {projects.map((proj, idx) => (
            <motion.div 
              key={idx} 
              className="proj-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="proj-img">
                <Image src={proj.image} alt={proj.title} width={500} height={300} />
              </div>
              <div className="proj-body">
                <span className="proj-cat">{proj.category}</span>
                <h3 className="proj-title">{proj.title}</h3>
                <p className="proj-desc">{proj.desc}</p>
                <div className="proj-tags">
                  {proj.tech.map((t, i) => <span key={i} className="proj-tag">{t}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Tech Stack Marquee ── */}
      <section className="section-wrapper" id="skills">
        <motion.div 
          className="section-head"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
        >
          <h2 className="text-accent">Tech Stack</h2>
        </motion.div>
        <div className="marquee-container">
          <div className="marquee-track">
            {[...skills, ...skills, ...skills].map((skill, idx) => (
              <motion.div 
                key={idx} 
                className="skill-item"
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <span className="skill-name" style={{ color: skill.color }}>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Education Section ── */}
      <section className="section-wrapper" id="education">
        <motion.div 
          className="section-head"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
        >
          <h2 className="text-accent">Education</h2>
        </motion.div>
        <div className="proj-grid">
          {education.map((edu, idx) => (
            <motion.div 
              key={idx} 
              className="glass-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <span className="exp-date">{edu.date}</span>
              <h3 className="exp-role">{edu.degree}</h3>
              <h4 className="exp-company text-accent">{edu.school}</h4>
              <p className="proj-desc" style={{ marginTop: '1rem' }}>{edu.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Let's Connect ── */}
      <section className="section-wrapper" id="contact">
        <motion.div 
          className="section-head"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
        >
          <h2 className="text-accent">Let&apos;s Connect</h2>
        </motion.div>
        <div className="connect-layout">
          <motion.form 
            className="contact-form glass-card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="input-group">
              <label>Full Name</label>
              <input type="text" name="name" placeholder="John Doe" required />
            </div>
            <div className="input-group">
              <label>Email Address</label>
              <input type="email" name="email" placeholder="john@example.com" required />
            </div>
            <div className="input-group">
              <label>Message</label>
              <textarea name="message" rows="5" placeholder="Tell me about your project..." required></textarea>
            </div>
            <button type="submit" className="btn-accent">SEND MESSAGE</button>
          </motion.form>

          <motion.div 
            className="connect-cards"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {[
              { label: 'LinkedIn', val: 'gayathrireddyk', link: 'https://www.linkedin.com/in/gayathrireddyk/', icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z' },
              { label: 'Email', val: 'gayathrireddykalthireddy@gmail.com', icon: 'M2 4h20v16H2V4zm2 2v1.5l8 5 8-5V6H4zm0 12h16V9.5l-8 5-8-5V18z' },
              { label: 'Location', val: 'Washington, DC', icon: 'M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z' }
            ].map((c, i) => (
              <a 
                key={i} 
                href={c.link || (c.label === 'Email' ? `mailto:${c.val}` : '#')} 
                target={c.link ? "_blank" : undefined}
                rel={c.link ? "noopener noreferrer" : undefined}
                className="contact-card"
                style={{ textDecoration: 'none' }}
              >
                <div className="c-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={c.icon}/></svg>
                </div>
                <div className="c-info">
                  <span className="c-label">{c.label}</span>
                  <span className="c-val">{c.val}</span>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      <footer className="footer-v2">
        <p>© 2026 Gayathri Kalthi Reddy. All rights reserved.</p>
      </footer>
    </main>
  );
}
