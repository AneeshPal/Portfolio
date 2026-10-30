import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Code2, Github,
  Linkedin, Mail, Menu, Phone, X, ExternalLink, Sparkles, Terminal,
  GraduationCap, Award, Trophy, Braces
} from 'lucide-react'
import { profile, projects, skills } from './data'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

function Reveal({ children, className = '', delay = 0 }) {
  const reduce = useReducedMotion()
  return <motion.div className={className} variants={fadeUp} initial="hidden"
    whileInView="visible" viewport={{ once: true, amount: 0.15 }}
    transition={reduce ? { duration: 0 } : { delay }}>
    {children}
  </motion.div>
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [['About', '#about'], ['Stack', '#stack'], ['Projects', '#projects'], ['Journey', '#journey'], ['Contact', '#contact']]
  return <header className="nav-wrap">
    <nav className="nav container">
      <a className="brand" href="#home">Aneesh<span>.</span></a>
      <div className={`nav-links ${open ? 'nav-open' : ''}`}>
        {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let's talk <ArrowUpRight size={14}/></a>
      </div>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </nav>
  </header>
}

function SocialLinks() {
  return <div className="social-row">
    <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
    <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>
    <a href={profile.leetcode} target="_blank" rel="noreferrer"><Code2 size={17}/> LeetCode</a>
    <a href={`mailto:${profile.email}`}><Mail size={17}/> Email</a>
  </div>
}

function Hero() {
  return <section id="home" className="hero">
    <div className="hero-grid container">
      <div className="hero-copy">
        <motion.div className="eyebrow" initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8 }}>
          <span className="status-dot"/> SOFTWARE DEVELOPER <span className="eyebrow-sep">/</span> KANPUR, INDIA
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: .1 }}>
          Building ideas<br/>into <span className="gradient-text">experiences.</span>
        </motion.h1>
        <motion.p className="hero-role" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .45 }}>
          Full Stack Developer <i>·</i> GenAI Explorer <i>·</i> Problem Solver
        </motion.p>
        <motion.p className="hero-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .55 }}>
          I'm Aneesh — a Computer Science student who enjoys building useful web products, exploring Generative AI and solving challenging problems.
        </motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .7 }}>
          <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
          <a className="button button-ghost" href="/resume.pdf" target="_blank" rel="noreferrer">View resume <ArrowUpRight size={16}/></a>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .9 }}><SocialLinks/></motion.div>
      </div>
      <motion.div className="hero-art" initial={{ opacity: 0, scale: .88, x: 35 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 1.1, delay: .25 }}>
        <div className="art-glow"/>
        <div className="orb orb-one"/>
        <div className="orb orb-two"/>
        <div className="cube cube-back"><span/></div>
        <div className="cube cube-main"><span/></div>
        <div className="cube cube-front"><span/></div>
        <div className="code-float"><div className="code-top"><i/><i/><i/><span>aneesh.dev</span></div><pre><b>const</b> developer = {'{'}{'\n'}  name: <em>'Aneesh Pal'</em>,{'\n'}  focus: <em>'Full Stack + GenAI'</em>,{'\n'}  mindset: <em>'Build. Learn. Repeat.'</em>{'\n'}{'}'}<span className="cursor">▋</span></pre></div>
        <div className="art-caption"><span>FIG. 01</span> CREATIVITY MEETS ENGINEERING</div>
      </motion.div>
    </div>
    <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
  </section>
}

function SectionHeading({ kicker, title, number }) {
  return <div className="section-heading">
    <div><span className="section-kicker">{number} / {kicker}</span><h2>{title}</h2></div>
    <span className="heading-mark"><Sparkles size={18}/></span>
  </div>
}

function About() {
  return <section id="about" className="section container">
    <Reveal><SectionHeading number="01" kicker="A LITTLE ABOUT ME" title={<>Curious by nature.<br/><span className="muted">Builder by choice.</span></>}/></Reveal>
    <div className="about-grid">
      <Reveal className="about-text"><p className="lead">I enjoy turning ideas into practical, thoughtful digital experiences.</p>
        <p>I'm pursuing a B.Tech in Computer Science at Pranveer Singh Institute of Technology, Kanpur. My interests span full-stack engineering, Generative AI, data structures and open-source collaboration.</p>
        <p>I like understanding how things work under the hood, writing maintainable code and learning by building projects that solve real problems.</p>
        <a className="text-link" href={`mailto:${profile.email}`}>Get to know me <ArrowUpRight size={16}/></a>
      </Reveal>
      <Reveal className="about-facts" delay={.12}>
        <div className="fact-card"><span className="fact-icon"><GraduationCap/></span><div><small>EDUCATION</small><strong>B.Tech · Computer Science</strong><span>PSIT Kanpur · 2023–2027</span></div></div>
        <div className="fact-card"><span className="fact-icon"><Code2/></span><div><small>PROBLEM SOLVING</small><strong>550+ DSA problems</strong><span>LeetCode & GeeksforGeeks</span></div></div>
        <div className="fact-card"><span className="fact-icon"><Trophy/></span><div><small>HACKATHON</small><strong>Top 5,000 teams</strong><span>Build with India · 25,000+ teams</span></div></div>
      </Reveal>
    </div>
  </section>
}

function Skills() {
  return <section id="stack" className="section section-alt">
    <div className="container"><Reveal><SectionHeading number="02" kicker="MY TOOLKIT" title={<>Tools I use to<br/><span className="muted">bring ideas to life.</span></>}/></Reveal>
      <div className="skills-grid">{skills.map((group, i) => <Reveal key={group.group} delay={i * .06}><div className="skill-card"><div className="skill-card-top"><Braces size={17}/><span>{group.group}</span></div><div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></div></Reveal>)}</div>
    </div>
  </section>
}

function ProjectVisual({ type }) {
  if (type === 'commerce') return <div className="visual-commerce"><div className="mock-window"><div className="mock-bar"><i/><i/><i/></div><div className="mock-body"><div className="mock-sidebar"/><div className="mock-products"><b/><b/><b/></div></div></div><div className="visual-chip">NEARBY · LIVE</div></div>
  if (type === 'stay') return <div className="visual-stay"><div className="stay-house"><div className="roof"/><div className="house-body"><i/><i/></div></div><span className="visual-chip">FIND YOUR PLACE</span></div>
  if (type === 'chat') return <div className="visual-chat"><div className="chat-bubble left">Hey! What are we building today?</div><div className="chat-bubble right">Something useful with AI.</div><div className="chat-input">Ask anything... <ArrowUpRight size={14}/></div></div>
  return <div className="visual-simon"><div className="simon-board"><i/><i/><i/><i/></div><span className="visual-chip">REMEMBER THE SEQUENCE</span></div>
}

function Projects() {
  return <section id="projects" className="section container">
    <Reveal><SectionHeading number="03" kicker="SELECTED WORK" title={<>A few things I've<br/><span className="muted">built along the way.</span></>}/></Reveal>
    <div className="projects-grid">{projects.map((project, i) => <Reveal key={project.number} className={`project-card ${project.accent}`} delay={i * .07}>
      <div className="project-visual"><ProjectVisual type={project.visual}/><span className="project-number">{project.number}</span></div>
      <div className="project-content"><div className="project-category">{project.category}</div><h3>{project.name}</h3><p>{project.description}</p>
        <div className="project-stack">{project.stack.map(s => <span key={s}>{s}</span>)}</div>
        <div className="project-links">
          {project.github ? <a href={project.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15}/></a> : <a href={`${profile.github}?tab=repositories`} target="_blank" rel="noreferrer">Explore repositories <ArrowUpRight size={15}/></a>}
          {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={14}/></a>}
        </div>
        <ul className="project-details">{project.details.map(d => <li key={d}>{d}</li>)}</ul>
      </div>
    </Reveal>)}</div>
  </section>
}

function Journey() {
  return <section id="journey" className="section section-alt"><div className="container">
    <Reveal><SectionHeading number="04" kicker="MILESTONES" title={<>Learning, building<br/><span className="muted">and moving forward.</span></>}/></Reveal>
    <div className="journey-grid">
      <Reveal className="journey-card"><Award/><span className="journey-date">OCT 2026</span><h3>AWS Academy Graduate</h3><p>Generative AI Foundations — 12 hours of training and a Credly digital badge.</p></Reveal>
      <Reveal className="journey-card" delay={.08}><Trophy/><span className="journey-date">HACKATHON</span><h3>Build with India</h3><p>Ranked among the top 5,000 teams out of 25,000+ participating teams.</p></Reveal>
      <Reveal className="journey-card" delay={.16}><Code2/><span className="journey-date">CONTINUOUS</span><h3>550+ DSA problems</h3><p>Consistent problem solving across LeetCode and GeeksforGeeks.</p></Reveal>
    </div>
    <Reveal className="education-strip"><GraduationCap/><div><small>2023 — 2027</small><strong>Pranveer Singh Institute of Technology</strong><span>B.Tech · Computer Science</span></div><span className="education-location">KANPUR, INDIA</span></Reveal>
    <Reveal className="cert-row"><span className="cert-label">CERTIFICATIONS</span><span>AWS Academy Graduate — Generative AI Foundations</span><span>Web Development Certification — Apna College</span></Reveal>
  </div></section>
}

function Contact() {
  return <section id="contact" className="section container contact-section">
    <Reveal><span className="section-kicker">05 / GET IN TOUCH</span><h2>Have an idea?<br/><span className="gradient-text">Let's build it.</span></h2><p className="contact-intro">I'm always interested in discussing software, creative ideas, collaborations and opportunities.</p>
      <a className="button button-primary contact-button" href={`mailto:${profile.email}`}>Say hello <ArrowUpRight size={17}/></a>
    </Reveal>
    <Reveal className="contact-grid" delay={.1}>
      <a href={`mailto:${profile.email}`}><Mail/><span><small>EMAIL</small>{profile.email}</span><ArrowUpRight/></a>
      <a href={`tel:${profile.phone.replaceAll('-', '')}`}><Phone/><span><small>PHONE</small>{profile.phone}</span><ArrowUpRight/></a>
      <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin/><span><small>LINKEDIN</small>Connect with me</span><ArrowUpRight/></a>
      <a href={profile.github} target="_blank" rel="noreferrer"><Github/><span><small>GITHUB</small>Explore my code</span><ArrowUpRight/></a>
      <a href={profile.leetcode} target="_blank" rel="noreferrer"><Code2/><span><small>LEETCODE</small>Problem solving</span><ArrowUpRight/></a>
    </Reveal>
  </section>
}

function Footer() {
  return <footer className="footer container"><a className="brand" href="#home">Aneesh<span>.</span></a><span>Designed & built with curiosity.</span><a href="#home">BACK TO TOP ↑</a><span>© {new Date().getFullYear()} ANEESH PAL</span></footer>
}

export default function App() {
  return <><Navbar/><main><Hero/><About/><Skills/><Projects/><Journey/><Contact/></main><Footer/></>
}
