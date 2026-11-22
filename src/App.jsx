import React from "react";
import { useState } from 'react';
import {
  Menu, X, ArrowUpRight, ArrowRight, Compass, Files, Target, Send,
  GraduationCap, BriefcaseBusiness, Palette, HeartPulse, Scale,
  Microscope, Building2, Landmark, Mail, Phone, Facebook, Twitter,
  Instagram, Linkedin, ChevronDown, ChevronUp, CheckCircle2, MapPin,
  Clock3, BookOpen, Sparkles, Globe2
} from 'lucide-react';

const photos = {
  campus: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=85',
  advisors: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85',
  graduate: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=85',
  students: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85',
};

const navLinks = [
  ['Home', '#home'], ['About Us', '#about'], ['How It Works', '#process'],
  ['Programs', '#careers'], ['Contact Us', '#contact']
];

const steps = [
  { icon: Compass, title: 'Explore', text: "Discover 80,000+ Master's programmes from universities around the world." },
  { icon: Files, title: 'Compare', text: 'Build your shortlist, compare courses and find the right fit for your goals.' },
  { icon: Target, title: 'Decide', text: 'Choose your preferred programme with guidance from our expert counsellors.' },
  { icon: Send, title: 'Apply', text: 'Feel confident and submit your application with support at every step.' },
];

const fields = [
  { icon: Palette, name: 'Arts and Humanities' },
  { icon: BriefcaseBusiness, name: 'Social Sciences' },
  { icon: Scale, name: 'Law and Legal Studies' },
  { icon: GraduationCap, name: 'Engineering and Technology' },
  { icon: Building2, name: 'Architecture' },
  { icon: Palette, name: 'Design' },
  { icon: HeartPulse, name: 'Medicine and Life Sciences' },
  { icon: Microscope, name: 'Natural Sciences' },
];

const faqs = [
  ['Can I study in the USA for free?', 'Some universities offer scholarships, grants and assistantships that can significantly reduce tuition costs. Fully funded options are competitive, so start researching early and prepare a strong application.'],
  ['What exams are required to study in the USA?', 'Requirements depend on your university and programme. You may need an English proficiency test such as IELTS, TOEFL or Duolingo, and some courses may ask for GRE, GMAT, SAT or ACT scores.'],
  ['How much will it cost to study in the USA?', 'Costs vary by university, programme and city. Consider tuition, accommodation, health insurance, travel and everyday expenses when preparing your budget.'],
  ['Which is the best university to study in the USA?', 'The best university is the one that matches your subject, budget, academic profile and career plans. We can help you compare universities based on what matters to you.'],
  ['Is IELTS required for the USA?', 'Not always. Many universities accept alternatives such as TOEFL, PTE or Duolingo, and some offer English proficiency waivers. Always check the specific university requirements.'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(-1);
  const [submitted, setSubmitted] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <div className="site-shell">
      <header className="header">
        <div className="nav-wrap">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="US Admissions home">
            <span>US</span> Admissions
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navLinks.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
          </nav>
          <div className="nav-actions">
            <a className="login-link agent" href="#contact"><span>♟</span> Agent Login</a>
            <a className="login-link student" href="#contact"><GraduationCap size={15}/> Student Login</a>
          </div>
          <button className="menu-toggle" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <Menu size={25}/>
          </button>
        </div>
        {menuOpen && <div className="mobile-overlay" onClick={closeMenu}>
          <aside className="mobile-drawer" onClick={e => e.stopPropagation()}>
            <div className="drawer-head">
              <a className="brand" href="#home" onClick={closeMenu}><span>US</span> Admissions</a>
              <button className="icon-btn" onClick={closeMenu} aria-label="Close menu"><X size={23}/></button>
            </div>
            <nav className="drawer-links">
              {navLinks.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}<ArrowUpRight size={17}/></a>)}
            </nav>
            <div className="drawer-login">
              <a className="button button-outline" href="#contact" onClick={closeMenu}>Agent Login</a>
              <a className="button button-primary" href="#contact" onClick={closeMenu}>Student Login</a>
            </div>
            <div className="drawer-note"><Sparkles size={17}/> Your global education journey starts here.</div>
          </aside>
        </div>}
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-inner container">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-line"/> YOUR FUTURE, OUR MISSION</div>
              <h1>Study at a university <em>in the USA.</em></h1>
              <p>Turn your ambition into opportunity. Explore world-class universities, discover the right programme and take your next big step with expert guidance.</p>
              <div className="hero-buttons">
                <a href="#contact" className="button button-primary">Get started <ArrowUpRight size={17}/></a>
                <a href="#process" className="text-link">See how it works <ArrowRight size={17}/></a>
              </div>
              <div className="hero-proof">
                <div className="avatar-stack"><span>R</span><span>A</span><span>S</span><span>+</span></div>
                <div><strong>Guidance at every step</strong><small>From your first search to your first day</small></div>
              </div>
            </div>
            <div className="hero-gallery">
              <div className="photo photo-campus"><img src={photos.campus} alt="University campus building"/><span className="photo-tag"><GraduationCap size={14}/> Your dream campus</span></div>
              <div className="photo photo-advisors"><img src={photos.advisors} alt="Education advisors discussing opportunities"/></div>
              <div className="photo photo-graduate"><img src={photos.graduate} alt="University graduate celebrating"/></div>
              <div className="photo photo-students"><img src={photos.students} alt="Students studying together"/></div>
              <div className="floating-card"><div className="floating-icon"><Globe2 size={20}/></div><div><strong>Think global.</strong><small>Learn without limits.</small></div></div>
              <div className="gallery-orbit"/>
            </div>
          </div>
          <div className="hero-bottom container"><span><MapPin size={14}/> Your journey to the United States</span><span>Learn. Grow. Go further. <ArrowDownIcon/></span></div>
        </section>

        <section className="process section-pad" id="process">
          <div className="container">
            <div className="section-heading centered">
              <div className="eyebrow"><span className="eyebrow-line"/> A SIMPLE FOUR-STEP JOURNEY</div>
              <h2>From dream to <em>destination.</em></h2>
              <p>We make your study abroad journey clear, simple and stress-free.</p>
            </div>
            <div className="steps-grid">
              {steps.map(({icon: Icon, title, text}, i) => <article className="step-card" key={title}>
                <div className="step-top"><span className="step-number">0{i + 1}</span><div className="step-icon"><Icon size={25}/></div></div>
                <h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`Learn more about ${title}`}><ArrowUpRight size={18}/></a>
              </article>)}
            </div>
          </div>
        </section>

        <section className="careers section-pad" id="careers">
          <div className="container">
            <div className="section-heading careers-heading">
              <div><div className="eyebrow"><span className="eyebrow-line"/> FIND YOUR DIRECTION</div><h2>Careers + work <em>opportunities.</em></h2></div>
              <p>Studying in the USA opens doors to new experiences, practical learning and exciting career paths. Explore popular areas of study and learn about work opportunities.</p>
            </div>
            <div className="career-panel">
              <div className="field-grid">
                {fields.map(({icon: Icon, name}, i) => <div className="field-item" key={name}><span className={`field-icon tone-${i % 4}`}><Icon size={19}/></span><span>{name}</span><ArrowUpRight className="field-arrow" size={15}/></div>)}
              </div>
              <div className="info-cards">
                <article className="info-card"><span className="info-kicker">DURING YOUR STUDIES</span><h3>Part-time work opportunities</h3><p>Eligible F-1 students may work on campus for up to 20 hours per week while school is in session. Off-campus work has separate eligibility rules and authorisation requirements.</p><a href="#contact">Understand your options <ArrowRight size={15}/></a></article>
                <article className="info-card"><span className="info-kicker">AFTER GRADUATION</span><h3>Post-study work options</h3><p>Eligible F-1 students may apply for Optional Practical Training (OPT), which can provide temporary work authorisation related to their field of study.</p><a href="#contact">Explore career pathways <ArrowRight size={15}/></a></article>
              </div>
              <p className="disclaimer">Work authorisation rules depend on your visa status and individual eligibility. Always confirm current requirements with your university's international student office or an authorised immigration professional.</p>
            </div>
          </div>
        </section>

        <section className="why-section section-pad" id="about">
          <div className="container why-grid">
            <div className="why-art"><img src={photos.campus} alt="Beautiful university campus"/><div className="why-stamp"><span>YOUR</span><strong>Next chapter</strong><span>STARTS HERE</span></div></div>
            <div className="why-copy">
              <div className="eyebrow"><span className="eyebrow-line"/> THE USA EXPERIENCE</div>
              <h2>Why study in the <em>United States?</em></h2>
              <p>The United States is home to a wide range of universities, diverse communities and flexible learning opportunities. Whether you want to build specialist knowledge, explore a new subject or prepare for your career, you can find a path that fits your goals.</p>
              <p>Learn in an environment that encourages curiosity, collaboration and fresh ideas. From vibrant city campuses to close-knit college towns, every student journey can look different.</p>
              <div className="why-points"><span><CheckCircle2 size={17}/> Diverse programmes</span><span><CheckCircle2 size={17}/> Global perspectives</span><span><CheckCircle2 size={17}/> Career-focused learning</span></div>
              <a href="#contact" className="button button-dark">Plan your journey <ArrowUpRight size={17}/></a>
            </div>
          </div>
        </section>

        <section className="faq-section section-pad" id="contact">
          <div className="container faq-layout">
            <div className="faq-content">
              <div className="eyebrow"><span className="eyebrow-line"/> GOOD TO KNOW</div>
              <h2>Frequently asked <em>questions.</em></h2>
              <p className="faq-intro">A few helpful answers to get you started.</p>
              <div className="faq-list">
                {faqs.map(([question, answer], i) => <div className={`faq-item ${activeFaq === i ? 'active' : ''}`} key={question}>
                  <button onClick={() => setActiveFaq(activeFaq === i ? -1 : i)} aria-expanded={activeFaq === i}>
                    <span>{question}</span>{activeFaq === i ? <ChevronUp size={19}/> : <ChevronDown size={19}/>}
                  </button>
                  {activeFaq === i && <div className="faq-answer">{answer}</div>}
                </div>)}
              </div>
            </div>
            <div className="form-card">
              <div className="form-icon"><BookOpen size={21}/></div>
              <span className="form-overline">LET'S TALK ABOUT YOUR FUTURE</span>
              <h3><em>Book a</em> free counselling session</h3>
              <p>Share a few details and our team will help you understand your next steps.</p>
              {submitted ? <div className="success-message"><CheckCircle2 size={25}/><strong>Thank you for reaching out!</strong><span>Your request has been noted in this demo. Connect a backend to receive real enquiries.</span><button onClick={() => setSubmitted(false)}>Submit another request</button></div> :
              <form onSubmit={handleSubmit}>
                <label htmlFor="fullName">Full name *</label><input id="fullName" name="fullName" placeholder="Enter your full name" required/>
                <label htmlFor="phone">Mobile number *</label><input id="phone" name="phone" type="tel" inputMode="tel" pattern="[0-9+() -]{8,}" placeholder="+91 98765 43210" required/>
                <label htmlFor="email">Email address *</label><input id="email" name="email" type="email" placeholder="you@example.com" required/>
                <div className="form-row"><div><label htmlFor="date">Preferred date *</label><input id="date" name="date" type="date" min={new Date().toISOString().split('T')[0]} required/></div><div><label htmlFor="time">Preferred time *</label><select id="time" name="time" defaultValue="" required><option value="" disabled>Select time</option><option>10:00 AM</option><option>12:00 PM</option><option>02:00 PM</option><option>04:00 PM</option><option>06:00 PM</option></select></div></div>
                <button className="button button-primary submit-btn" type="submit">Request a call <ArrowRight size={17}/></button>
                <small className="privacy-note">By submitting, you agree to be contacted about your enquiry.</small>
              </form>}
            </div>
          </div>
        </section>

        <section className="cta-strip">
          <div className="container cta-inner"><div><span className="eyebrow">YOUR NEXT CHAPTER AWAITS</span><h2>Make your dream to study in the USA <em>a reality.</em></h2></div><a href="#contact" className="button button-outline">Talk to an expert <ArrowUpRight size={17}/></a></div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-main">
          <div className="footer-about"><a className="footer-brand" href="#home"><span>US</span> Admissions</a><p>Helping students take confident steps towards international education through guidance, information and support.</p><div className="socials"><a href="#contact" aria-label="Facebook"><Facebook size={17}/></a><a href="#contact" aria-label="Twitter"><Twitter size={17}/></a><a href="#contact" aria-label="Instagram"><Instagram size={17}/></a><a href="#contact" aria-label="LinkedIn"><Linkedin size={17}/></a></div></div>
          <div className="footer-links"><h4>EXPLORE</h4>{navLinks.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</div>
          <div className="footer-links"><h4>STUDENT RESOURCES</h4><a href="#careers">Programmes</a><a href="#process">Application process</a><a href="#about">Why the USA</a><a href="#contact">FAQs</a></div>
          <div className="footer-contact"><h4>GET IN TOUCH</h4><a href="mailto:info@usadmissions.com"><Mail size={16}/> info@usadmissions.com</a><a href="tel:+910000000000"><Phone size={16}/> +91 00000 00000</a><span><MapPin size={16}/> India · Supporting students worldwide</span><a className="footer-contact-btn" href="#contact">Book a consultation <ArrowUpRight size={15}/></a></div>
        </div>
        <div className="footer-bottom"><div className="container"><span>© {new Date().getFullYear()} US Admissions. All rights reserved.</span><span>Made for your next big step <span className="heart">♥</span></span></div></div>
      </footer>
      <a href="#home" className="back-top" aria-label="Back to top"><ChevronUp size={23}/></a>
    </div>
  );
}

function ArrowDownIcon() { return <ArrowUpRight size={14}/>; }

export default App;