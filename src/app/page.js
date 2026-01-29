import HeroCanvas from "@/components/HeroCanvas";
import SectionCanvas from "@/components/SectionCanvas";

export default function Home() {
  return (
    <div className="page">
      <div className="noise" />
      <div className="grid" />
      <div className="orb orb-a" />
      <div className="orb orb-b" />

      <header className="nav">
        <div className="brand">GK<span>R</span></div>
        <nav>
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="cta" href="mailto:gayathrireddykalthireddy@gmail.com">
          Let’s build
        </a>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-left">
            <p className="eyebrow">Software & ML Engineer</p>
            <h1>
              Gayathri
              <span>Kalthi Reddy</span>
            </h1>
            <p className="lede">
              I design intelligent, production-ready systems that combine clean
              engineering with applied machine learning. From real-time
              analytics to AI safety layers, I build products that scale with
              clarity.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                Explore work
              </a>
              <a className="button ghost" href="#contact">
                Contact me
              </a>
              <a
                className="button ghost"
                href="/Gayathri_K.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View resume
              </a>
            </div>
            <div className="hero-metrics">
              <div>
                <span>4+</span>
                <p>Years building software + ML systems</p>
              </div>
              <div>
                <span>10K+</span>
                <p>Campaign logs analyzed in real time</p>
              </div>
              <div>
                <span>93%</span>
                <p>Plant disease detection accuracy</p>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <div className="signal-card">
              <h3>Signal Stack</h3>
              <ul>
                <li><strong>Cloud:</strong> AWS, Azure, Oracle</li>
                <li><strong>ML:</strong> PyTorch, TensorFlow, Scikit-learn</li>
                <li><strong>Web:</strong> React, Next.js, GraphQL</li>
                <li><strong>Data:</strong> PostgreSQL, MongoDB, PySpark</li>
                <li><strong>AI:</strong> GPT-4o, LangChain, OpenAI APIs</li>
              </ul>
            </div>
            <div className="canvas-card">
              <HeroCanvas />
              <div className="canvas-overlay">
                <p>Lightweight 3D signal field</p>
              </div>
            </div>
            <div className="status-card">
              <p>Based in Washington, DC</p>
              <p>Open to full-time roles</p>
              <div className="pulse">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="work">
          <div className="section-title">
            <div>
              <h2>Experience</h2>
              <p>Software engineering + ML impact across product, research, and analytics.</p>
            </div>
            <SectionCanvas variant="a" />
          </div>
          <div className="timeline">
            <article>
              <div className="role">
                <h3>Full Stack Developer · Swipe Savvy</h3>
                <span>Aug 2025 – Jan 2026</span>
              </div>
              <ul>
                <li>Built an AI-powered marketing orchestration engine for 1,000+ simulated merchants, cutting API latency by 38%.</li>
                <li>Delivered real-time analytics across 10K+ campaign logs with Next.js, NestJS, and GraphQL caching.</li>
                <li>Shipped GPT-4 powered Analytics + Checker agents to produce insights and enforce PCI/PII-safe outputs.</li>
              </ul>
            </article>
            <article>
              <div className="role">
                <h3>Mobile Application Intern · Medfilo Inc</h3>
                <span>Jun 2025 – Aug 2025</span>
              </div>
              <ul>
                <li>Engineered Node.js microservices and REST workflows, reducing response latency by 20%.</li>
                <li>Automated HIPAA-compliant PDF delivery using PDFKit, AWS S3, and signed URLs.</li>
              </ul>
            </article>
            <article>
              <div className="role">
                <h3>Technical Support Assistant · GWU</h3>
                <span>Aug 2024 – May 2025</span>
              </div>
              <ul>
                <li>Built an internal IT ticketing platform with automated classification workflows.</li>
                <li>Integrated Naive Bayes NLP models to cut misclassification by 30%.</li>
                <li>Redesigned PostgreSQL query logic to reduce latency by 28%.</li>
              </ul>
            </article>
            <article>
              <div className="role">
                <h3>Software Developer · NSL Hub</h3>
                <span>Jul 2022 – Jul 2023</span>
              </div>
              <ul>
                <li>Architected a distributed academic data platform, improving report throughput by 55%.</li>
                <li>Optimized REST APIs to cut response times from 1.8s to 420ms.</li>
                <li>Built ML pipelines using Random Forest and BERT, achieving R² 0.89 and F1 0.84.</li>
              </ul>
            </article>
            <article>
              <div className="role">
                <h3>Research Intern – ML · Vasavi Lab</h3>
                <span>Jun 2022 – Jan 2023</span>
              </div>
              <ul>
                <li>Fine-tuned ResNet-34 on 54K+ images, delivering 93% test accuracy.</li>
                <li>Designed preprocessing and augmentation to reduce false positives from 12% to 6%.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-title">
            <div>
              <h2>Projects</h2>
              <p>Applied ML systems built for explainability, performance, and decision support.</p>
            </div>
            <SectionCanvas variant="b" />
          </div>
          <div className="project-grid">
            <article className="project">
              <div className="project-head">
                <h3>InsightAd</h3>
                <span>Python · PyTorch · LLMs</span>
              </div>
              <p>
                Two-stage ad ranking system blending probabilistic CTR prediction with LLM-powered explanations
                and custom vector scoring.
              </p>
              <div className="pill-row">
                <span>Ranking</span>
                <span>Explainability</span>
                <span>Vector Search</span>
              </div>
            </article>
            <article className="project">
              <div className="project-head">
                <h3>Mediguide</h3>
                <span>Scikit-learn · Streamlit</span>
              </div>
              <p>
                AI health assistant that predicts diseases from 130+ symptoms and recommends treatments with
                geolocation-aware hospital search.
              </p>
              <div className="pill-row">
                <span>Healthcare</span>
                <span>Similarity</span>
                <span>Decision Support</span>
              </div>
            </article>
            <article className="project">
              <div className="project-head">
                <h3>Smart Logistics Platform</h3>
                <span>OpenAI GPT-4o · Plotly</span>
              </div>
              <p>
                Full-stack dashboard for ML-based delay prediction, route optimization, and AI-generated
                shipment recommendations.
              </p>
              <div className="pill-row">
                <span>Optimization</span>
                <span>Forecasting</span>
                <span>Analytics</span>
              </div>
            </article>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-title">
            <div>
              <h2>Technical Stack</h2>
              <p>Languages, frameworks, and platforms used to ship end-to-end systems.</p>
            </div>
            <SectionCanvas variant="a" />
          </div>
          <div className="skill-grid">
            <div className="skill-card">
              <h4>Languages & Tools</h4>
              <p>Python, JavaScript, TypeScript, Java, C++, SQL, Bash, Git, Postman, Linux CLI</p>
            </div>
            <div className="skill-card">
              <h4>Frameworks & Libraries</h4>
              <p>React, Next.js, Vue.js, Node.js, Flask, FastAPI, GraphQL, PyTorch, TensorFlow, Scikit-learn</p>
            </div>
            <div className="skill-card">
              <h4>Data & Analytics</h4>
              <p>Pandas, NumPy, PySpark, OpenCV, Plotly, Folium, PostgreSQL, MongoDB, Tableau, Power BI</p>
            </div>
            <div className="skill-card">
              <h4>Platforms</h4>
              <p>AWS, Azure, Oracle Cloud, Docker, Kubernetes, Vercel, GitHub Actions</p>
            </div>
          </div>
        </section>

        <section className="section" id="education">
          <div className="section-title">
            <div>
              <h2>Education</h2>
              <p>Deep focus on cloud, ML, and scalable systems.</p>
            </div>
            <SectionCanvas variant="b" />
          </div>
          <div className="edu-grid">
            <article>
              <h3>George Washington University</h3>
              <p>MS in Computer Science · CGPA 3.71/4.0 · May 2025</p>
              <span>Coursework: Cloud Computing, Big Data, Data Mining, Machine Learning, Database Systems, Algorithms, Computer Vision.</span>
            </article>
            <article>
              <h3>Vasavi College of Engineering</h3>
              <p>BE in Information Technology · CGPA 8.52/10 · May 2023</p>
              <span>Coursework: Data Structures, OOP, Distributed Systems, OS, Neural Networks, AI, Web Dev, Networks.</span>
            </article>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="section-title">
            <div>
              <h2>Let’s Collaborate</h2>
              <p>Reach out for ML engineering, full-stack systems, or applied AI strategy.</p>
            </div>
            <SectionCanvas variant="a" />
          </div>
          <div className="contact-card">
            <div>
              <h3>Contact</h3>
              <p>Washington, DC</p>
              <a href="mailto:gayathrireddykalthireddy@gmail.com">
                gayathrireddykalthireddy@gmail.com
              </a>
            </div>
            <div>
              <h3>Links</h3>
              <a href="https://github.com/gayathri0124" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/gayathrireddyk/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
            <div>
              <h3>Achievements</h3>
              <p>Top 10 Finalist · NTT AI Data Hackathon 2022</p>
              <p>IIIT Hyderabad Research Internship · Selected from 300+ applicants</p>
              <p>Tech Lead · TechSavishkar (500+ participants)</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Designed & built by Gayathri Kalthi Reddy · 2026</p>
      </footer>
    </div>
  );
}
