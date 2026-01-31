import SectionCanvas from "@/components/SectionCanvas";
import PhotoParallax from "@/components/PhotoParallax";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="page">
      <main className="snap-container">
        <section className="hero snap-panel" id="top">
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
                <span>2+</span>
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
            <PhotoParallax />
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

        <section className="section snap-panel" id="work">
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

        <section className="section snap-panel" id="projects">
          <div className="section-title">
            <div>
              <h2>Projects</h2>
              <p>Applied ML systems built for explainability, performance, and decision support.</p>
            </div>
            <SectionCanvas variant="b" />
          </div>
          <div className="project-grid">
            <article className="project">
              <div className="project-hud">
                <div className="hud-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="hud-tag">Model Lab</span>
              </div>
              <div className="project-media">
                <img src="/Insightad.png" alt="InsightAd project visual" />
                <span className="media-tag">Ranking AI</span>
              </div>
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
              <a
                className="project-link"
                href="https://github.com/gayathri0124/InsightAd"
                target="_blank"
                rel="noreferrer"
              >
                <span aria-hidden="true" className="icon-github" />
                View on GitHub
              </a>
            </article>
            <article className="project">
              <div className="project-hud">
                <div className="hud-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="hud-tag">Med Stream</span>
              </div>
              <div className="project-media">
                <img src="/mediguide.jpeg" alt="Mediguide project visual" />
                <span className="media-tag">Health ML</span>
              </div>
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
              <a
                className="project-link"
                href="https://github.com/gayathri0124/MediGuide_"
                target="_blank"
                rel="noreferrer"
              >
                <span aria-hidden="true" className="icon-github" />
                View on GitHub
              </a>
            </article>
            <article className="project">
              <div className="project-hud">
                <div className="hud-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="hud-tag">Ops Grid</span>
              </div>
              <div className="project-media">
                <img src="/smartlogistics.webp" alt="Smart Logistics project visual" />
                <span className="media-tag">Logistics</span>
              </div>
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
              <a
                className="project-link"
                href="https://github.com/gayathri0124/smartlogistics"
                target="_blank"
                rel="noreferrer"
              >
                <span aria-hidden="true" className="icon-github" />
                View on GitHub
              </a>
            </article>
          </div>
        </section>

        <section className="section snap-panel" id="skills">
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
              <div className="skill-cloud">
                <span>Python</span>
                <span>JavaScript</span>
                <span>TypeScript</span>
                <span>Java</span>
                <span>C++</span>
                <span>SQL</span>
                <span>Bash</span>
                <span>Git</span>
                <span>Postman</span>
                <span>Linux CLI</span>
              </div>
            </div>
            <div className="skill-card">
              <h4>Frameworks & Libraries</h4>
              <div className="skill-cloud">
                <span>React</span>
                <span>Next.js</span>
                <span>Vue.js</span>
                <span>Node.js</span>
                <span>Flask</span>
                <span>FastAPI</span>
                <span>GraphQL</span>
                <span>PyTorch</span>
                <span>TensorFlow</span>
                <span>Scikit-learn</span>
              </div>
            </div>
            <div className="skill-card">
              <h4>Data & Analytics</h4>
              <div className="skill-cloud">
                <span>Pandas</span>
                <span>NumPy</span>
                <span>PySpark</span>
                <span>OpenCV</span>
                <span>Plotly</span>
                <span>Folium</span>
                <span>PostgreSQL</span>
                <span>MongoDB</span>
                <span>Tableau</span>
                <span>Power BI</span>
              </div>
            </div>
            <div className="skill-card">
              <h4>Platforms</h4>
              <div className="skill-cloud">
                <span>AWS</span>
                <span>Azure</span>
                <span>Oracle Cloud</span>
                <span>Docker</span>
                <span>Kubernetes</span>
                <span>Vercel</span>
                <span>GitHub Actions</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section snap-panel" id="education">
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

        <section className="section snap-panel" id="contact">
          <div className="section-title">
            <div>
              <h2>Let’s Collaborate</h2>
              <p>Reach out for ML engineering, full-stack systems, or applied AI strategy.</p>
            </div>
          </div>
          <div className="contact-card">
            <div>
              <h3 className="contact-subheading">Contact</h3>
              <p>Let’s build something smart together.</p>
              <div className="contact-visual" aria-hidden="true">
                <div className="chat-bubbles">
                  <span className="bubble bubble-left">
                    <span className="bubble-lines" />
                  </span>
                  <span className="bubble bubble-right">
                    <span className="bubble-lines" />
                  </span>
                  <span className="bubble bubble-small">
                    <span className="bubble-lines" />
                  </span>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
          <p className="footer-note">Designed & built by Gayathri Kalthi Reddy · 2026</p>
        </section>
      </main>
    </div>
  );
}
