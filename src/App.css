import { useState, useEffect } from "react";
import "./styles.css";

// ─── NAV ──────────────────────────────────────────────────────────────────────
function Nav({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Home", "About", "Classes", "Events", "Contact"];

  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <button className="nav__logo" onClick={() => setPage("Home")}>
        <span className="nav__logo-thai">ดารานาฏศิลป์ไทย</span>
        <span className="nav__logo-en">Dara Thai Dancing School</span>
      </button>
      <ul className={`nav__links ${open ? "nav__links--open" : ""}`}>
        {links.map((l) => (
          <li key={l}>
            <button
              className={`nav__link ${page === l ? "nav__link--active" : ""}`}
              onClick={() => { setPage(l); setOpen(false); }}
            >
              {l}
            </button>
          </li>
        ))}
      </ul>
      <button className="nav__burger" onClick={() => setOpen(!open)} aria-label="Menu">
        <span /><span /><span />
      </button>
    </nav>
  );
}

// ─── HOME ─────────────────────────────────────────────────────────────────────
function Home({ setPage }) {
  return (
    <main className="page home">
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__mandala" />
          <div className="hero__glow" />
        </div>
        <div className="hero__content">
          <p className="hero__eyebrow">✦ ร่วมสืบสานวัฒนธรรมไทย ✦</p>
          <h1 className="hero__title">
            <span>Preserving</span>
            <em>Thai Culture</em>
            <span>Through Dance</span>
          </h1>
          <p className="hero__sub">
            Perth's vibrant Thai dance school — led by <strong>Kru Ploy</strong>, sharing the beauty and grace
            of Thailand's traditional, folk, and contemporary dance with all ages and abilities
            in Maddington, Western Australia.
          </p>
          <div className="hero__ctas">
            <button className="btn btn--gold" onClick={() => setPage("Classes")}>
              Join a Class
            </button>
            <button className="btn btn--ghost" onClick={() => setPage("About")}>
              Our Story
            </button>
          </div>
        </div>
        <div className="hero__scroll-hint">
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      <section className="features">
        <div className="features__grid">
          {[
            { icon: "🌸", title: "Traditional Thai Dance", desc: "Elegant and intricate traditional forms passed down through generations of Thai artistic heritage." },
            { icon: "🎊", title: "Folk & Contemporary", desc: "Vibrant folk rhythms and expressive contemporary Thai styles for a full cultural education." },
            { icon: "🌏", title: "All Ages & Abilities", desc: "From young children to adults — no prior experience needed. Everyone is welcome here." },
            { icon: "🎭", title: "Perform & Celebrate", desc: "Workshops, cultural festivals, and performances across Western Australia throughout the year." },
          ].map((f) => (
            <div className="feature-card" key={f.title}>
              <div className="feature-card__icon">{f.icon}</div>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="quote-banner">
        <div className="quote-banner__inner">
          <div className="quote-banner__ornament">❋</div>
          <blockquote>
            "Nurturing and inspiring dancers of all ages and abilities — preserving Thai cultural heritage in the heart of Western Australia."
          </blockquote>
          <cite>— Dara Thai Dancing School, ดารานาฏศิลป์ไทย</cite>
        </div>
      </section>

      <section className="social-strip">
        <div className="social-strip__inner">
          <div className="social-strip__text">
            <p className="social-strip__label">Follow us on Facebook</p>
            <p className="social-strip__handle">@darathaidancing · 1,100+ followers</p>
          </div>
          <a href="https://www.facebook.com/darathaidancing" target="_blank" rel="noopener noreferrer" className="btn btn--gold">
            Visit Our Facebook Page →
          </a>
        </div>
      </section>

      <section className="cta-strip">
        <h2>ร่วมเป็นส่วนหนึ่งของเรา</h2>
        <p>Join our community and help preserve Thai culture in Perth.</p>
        <button className="btn btn--gold" onClick={() => setPage("Contact")}>
          Get in Touch →
        </button>
      </section>
    </main>
  );
}

// ─── ABOUT ────────────────────────────────────────────────────────────────────
function About() {
  return (
    <main className="page about">
      <header className="page-header">
        <div className="page-header__ornament">✦</div>
        <h1>Our Story</h1>
        <p>ดารานาฏศิลป์ไทย — Born from love of Thai culture</p>
      </header>

      <section className="about__story">
        <div className="about__image-wrap">
          <div className="about__image-placeholder">
            <span className="about__thai-symbol">นาฏศิลป์</span>
            <p>Thai Traditional Arts</p>
          </div>
          <div className="about__image-frame" />
        </div>
        <div className="about__text">
          <h2>Bringing Thailand to Perth</h2>
          <p>
            Dara Thai Dancing School (ดารานาฏศิลป์ไทย) was established in 2019 with a clear and
            heartfelt vision: to embrace and share the rich cultural heritage of Thailand through
            the art of dance right here in Western Australia.
          </p>
          <p>
            Based in Maddington, Perth, the school has grown into a prominent and respected
            institution — nurturing and inspiring dancers of all ages and abilities, from
            young children taking their very first steps to adults discovering a lifelong passion.
          </p>
          <p>
            Our highly experienced and passionate instructors are accredited Thai dramatic art
            teachers, dedicated to sharing the beauty and grace of Thai dance with the local
            community. We teach Thai dance to all — no experience, no Thai background needed.
          </p>
          <p className="about__thai-tagline">
            #ร่วมสืบสานวัฒนธรรมไทย — Preserving Thai Culture Together
          </p>
        </div>
      </section>

      {/* Kru Section */}
      <section className="kru-section">
        <div className="kru-section__inner">
          <div className="kru-card kru-card--lead">
            <div className="kru-card__avatar">
              <span>ครู</span>
              <div className="kru-card__avatar-ring" />
            </div>
            <div className="kru-card__body">
              <div className="kru-card__role">Led by</div>
              <h2 className="kru-card__name">Kru Ploy</h2>
              <p className="kru-card__thai">ครูพลอย</p>
              <p className="kru-card__bio">
                Kru Ploy is the heart and lead teacher of Dara Thai Dancing School — bringing
                warmth, dedication, and deep expertise to every class. With a passion for making
                traditional Thai dance accessible and joyful, Kru Ploy guides students of all
                ages with patience, encouragement, and a commitment to preserving Thailand's
                rich dance heritage here in Perth.
              </p>
            </div>
          </div>

          <div className="kru-card kru-card--inspired">
            <div className="kru-card__avatar kru-card__avatar--small">
              <span>ครู</span>
            </div>
            <div className="kru-card__body">
              <div className="kru-card__role">Inspired by</div>
              <h2 className="kru-card__name">Kru Dang</h2>
              <p className="kru-card__thai">ครูแดง · Mother & Grandmother</p>
              <p className="kru-card__bio">
                The spirit and soul of Dara Thai Dancing School flows from <strong>Kru Dang</strong> —
                Kru Ploy's mother and grandmother, whose lifelong love of Thai traditional dance
                inspired this school's very existence. Kru Dang's devotion to preserving Thailand's
                dance traditions is the foundation upon which everything here is built. Her legacy
                lives in every movement, every student, every performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="dance-styles">
        <h2 className="values__heading">What We Teach</h2>
        <div className="styles__grid">
          {[
            { icon: "👑", title: "Traditional Thai Dance", thai: "นาฏศิลป์ไทยดั้งเดิม", desc: "Elegant and intricate movements rooted in Thailand's royal court and cultural traditions. Every hand gesture, every posture carries deep meaning passed down through centuries." },
            { icon: "🎉", title: "Thai Folk Dance", thai: "รำพื้นบ้าน", desc: "Vibrant, energetic, and joyful — folk dances from across Thailand's regions celebrate community, harvest, and everyday life with colour and infectious rhythm." },
            { icon: "🌟", title: "Contemporary Thai Dance", thai: "นาฏศิลป์ไทยร่วมสมัย", desc: "Dynamic and expressive, blending traditional Thai aesthetics with modern movement language for today's performers and creative dancers." },
          ].map((s) => (
            <div className="style-card" key={s.title}>
              <div className="style-card__icon">{s.icon}</div>
              <div className="style-card__thai">{s.thai}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="values">
        <h2 className="values__heading">What We Stand For</h2>
        <div className="values__grid">
          {[
            { title: "Cultural Preservation", icon: "🙏", desc: "We are proud keepers of Thai dance tradition — keeping these art forms alive and thriving in Western Australia." },
            { title: "Warm & Inclusive", icon: "💛", desc: "Our school is a welcoming family. No Thai background or prior experience required — only an open heart." },
            { title: "Community Connection", icon: "🌏", desc: "We actively participate in Perth's multicultural community, performing at festivals and events across WA." },
            { title: "Accredited Teaching", icon: "⭐", desc: "All instructors are accredited in Thai dramatic arts, trained to the highest standards of dance education." },
            { title: "Joy of Dancing", icon: "🎶", desc: "Whether your goal is performance, fitness, or simply fun — dancing at Dara brings happiness." },
            { title: "Cultural Pride", icon: "🇹🇭", desc: "We celebrate Thai culture with deep pride and share it generously with our entire Perth community." },
          ].map((v) => (
            <div className="value-card" key={v.title}>
              <div className="value-card__icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

// ─── CLASSES ──────────────────────────────────────────────────────────────────
function Classes({ setPage }) {
  const classes = [
    {
      level: "Children's Classes",
      age: "All ages welcome",
      tag: "Traditional · Folk · Contemporary",
      color: "pink",
      desc: "An enchanting introduction to traditional Thai and folk dance for children. Kids develop coordination, confidence, and a love of Thai culture through movement, music, and storytelling. Performance opportunities throughout the year.",
      note: "Message us on Facebook for current schedule",
    },
    {
      level: "Teen & Youth",
      age: "Teenagers",
      tag: "Traditional · Folk · Contemporary",
      color: "teal",
      desc: "Building on foundations with deeper traditional technique, expressive folk repertoire, and contemporary Thai styles. Students perform at showcases and community cultural events across Perth.",
      note: "Message us on Facebook for current schedule",
    },
    {
      level: "Adult Classes",
      age: "Adults — all levels",
      tag: "All Styles",
      color: "gold",
      desc: "Never danced before? Perfect. Our adult classes welcome complete beginners through to experienced dancers. Learn traditional Thai dance in a warm, supportive environment with no pressure.",
      note: "Message us on Facebook for current schedule",
    },
    {
      level: "Cultural Workshops",
      age: "Open to all",
      tag: "Special Events",
      color: "ruby",
      desc: "Intensive cultural workshops combining Thai dance, music, and traditions. We have hosted workshops across WA including at Karratha's Red Earth Arts Precinct. Watch Facebook for upcoming events.",
      note: "Follow Facebook for upcoming dates",
    },
  ];

  return (
    <main className="page classes">
      <header className="page-header">
        <div className="page-header__ornament">✦</div>
        <h1>Our Classes</h1>
        <p>นาฏศิลป์ไทย — For every age, every background, every dream</p>
      </header>

      <div className="classes__intro">
        <p>
          We offer traditional Thai dance, folk dance, and contemporary Thai dance for children,
          teenagers, and adults — led by <strong>Kru Ploy</strong>, inspired by the legacy of <strong>Kru Dang</strong>.
          Our accredited teachers create a warm and inclusive space where creativity and cultural
          pride flourish. <strong>All ages. All abilities. All welcome.</strong>
        </p>
      </div>

      <section className="classes__grid">
        {classes.map((c) => (
          <div className={`class-card class-card--${c.color}`} key={c.level}>
            <div className="class-card__tag">{c.tag}</div>
            <h2 className="class-card__level">{c.level}</h2>
            <p className="class-card__age">{c.age}</p>
            <p className="class-card__desc">{c.desc}</p>
            <div className="class-card__details">
              <div className="class-card__detail">
                <span className="class-card__detail-label">Schedule</span>
                <span>{c.note}</span>
              </div>
            </div>
            <button className="btn btn--gold" onClick={() => setPage("Contact")}>
              Enquire Now
            </button>
          </div>
        ))}
      </section>

      <section className="trial-banner">
        <h2>✨ ทุกเพศทุกวัย — All Are Welcome ✨</h2>
        <p>No Thai heritage or prior experience required — just a love of culture and movement.</p>
        <a href="https://www.facebook.com/darathaidancing" target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
          Message Us on Facebook
        </a>
      </section>
    </main>
  );
}

// ─── EVENTS ───────────────────────────────────────────────────────────────────
function Events() {
  const events = [
    { emoji: "🎊", title: "Thailand Fun Fair — Perth", date: "Annual · Perth, WA", desc: "Dara Thai Dancing School is a proud organiser and performer at Perth's Thailand Fun Fair — bringing authentic Thai dance, culture, food, and community celebration to all of Perth.", tag: "Community Festival" },
    { emoji: "🎭", title: "Culture & Dance Workshop — Karratha", date: "October 2024 · Red Earth Arts Precinct", desc: "A two-day intensive cultural workshop at the Red Earth Arts Precinct in Karratha, held with the Northwest Multicultural Association WA Inc. Celebrating Thai dance, music, and culture with the Pilbara community.", tag: "Cultural Workshop" },
    { emoji: "🌟", title: "End of Year Student Showcase", date: "Annual · Perth", desc: "Our much-loved annual showcase where every student takes to the stage to celebrate their year of learning — dressed in beautiful traditional Thai costumes and performing for family and friends.", tag: "Student Showcase" },
    { emoji: "🙏", title: "Cultural Performances Across WA", date: "Throughout the year", desc: "The school regularly performs at multicultural events, community festivals, and cultural celebrations across Western Australia — spreading the joy and beauty of Thai dance wherever we go.", tag: "Performance" },
    { emoji: "💃", title: "Regular Classes — Maddington", date: "Ongoing · Maddington, Perth", desc: "Weekly classes in Maddington, Perth. A nurturing space where students of all ages develop their skills, make lifelong friends, and deepen their love of Thai culture.", tag: "Weekly Classes" },
    { emoji: "🤝", title: "Multicultural Community Partnerships", date: "Various · WA", desc: "Dara Thai Dancing School actively partners with multicultural organisations across WA to bring Thai culture to communities throughout the state and foster cultural understanding.", tag: "Community Outreach" },
  ];

  return (
    <main className="page gallery">
      <header className="page-header">
        <div className="page-header__ornament">✦</div>
        <h1>Events & Performances</h1>
        <p>Bringing Thai culture to life across Western Australia</p>
      </header>

      <div className="gallery__grid">
        {events.map((ev, i) => (
          <div className={`gallery-item gallery-item--${(i % 3) + 1}`} key={ev.title}>
            <div className="gallery-item__inner">
              <div className="gallery-item__emoji">{ev.emoji}</div>
              <div className="gallery-item__tag-top">{ev.tag}</div>
              <div className="gallery-item__overlay">
                <div className="gallery-item__date">{ev.date}</div>
                <h3>{ev.title}</h3>
                <p>{ev.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="gallery__cta">
        <p>Follow <strong>@darathaidancing</strong> on Facebook for upcoming events and performances.</p>
        <a href="https://www.facebook.com/darathaidancing" target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ display: "inline-block", marginTop: "1rem" }}>
          Follow on Facebook →
        </a>
      </div>
    </main>
  );
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <main className="page contact">
      <header className="page-header">
        <div className="page-header__ornament">✦</div>
        <h1>Get in Touch</h1>
        <p>We'd love to welcome you into our community</p>
      </header>

      <div className="contact__layout">
        <div className="contact__info">
          <h2>Find Us</h2>
          <div className="contact__details">
            {[
              { icon: "📍", label: "Location", val: "Maddington, Perth, Western Australia" },
              { icon: "🇹🇭", label: "School Name (Thai)", val: "ดารานาฏศิลป์ไทย" },
              { icon: "📘", label: "Facebook", val: "facebook.com/darathaidancing" },
              { icon: "👩‍🏫", label: "Teachers", val: "Accredited Thai dramatic art instructors" },
              { icon: "📅", label: "Established", val: "2019" },
            ].map((d) => (
              <div className="contact__detail" key={d.label}>
                <span className="contact__detail-icon">{d.icon}</span>
                <div>
                  <strong>{d.label}</strong>
                  <p>{d.val}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="contact__social">
            <h3>Reach Us On Facebook</h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-light)", marginBottom: "1rem", fontStyle: "italic" }}>
              The quickest way to reach us and stay updated on classes and events.
            </p>
            <a href="https://www.facebook.com/darathaidancing" target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ display: "inline-block" }}>
              📘 Message Us on Facebook
            </a>
          </div>

          <div className="contact__tagline">
            <p>ร่วมสืบสานวัฒนธรรมไทยในต่างแดนไปกับเรา</p>
            <span>Preserve Thai culture abroad — join us</span>
          </div>
        </div>

        <div className="contact__form-wrap">
          {sent ? (
            <div className="contact__success">
              <div className="contact__success-icon">🌸</div>
              <h2>ขอบคุณมาก!</h2>
              <p>Thank you for your message. We will be in touch with you soon.</p>
              <p style={{ marginTop: "1rem" }}>
                You can also reach us directly on{" "}
                <a href="https://www.facebook.com/darathaidancing" target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)" }}>
                  Facebook @darathaidancing
                </a>.
              </p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <h2>Send a Message</h2>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Phone</label>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="04xx xxx xxx" />
                </div>
                <div className="form-group">
                  <label>Interested In</label>
                  <select name="interest" value={form.interest} onChange={handleChange}>
                    <option value="">Select...</option>
                    <option>Children's Classes</option>
                    <option>Teen & Youth Classes</option>
                    <option>Adult Classes</option>
                    <option>Cultural Workshop</option>
                    <option>Performance / Event Booking</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell us about yourself or ask us anything..." />
              </div>
              <button type="submit" className="btn btn--gold btn--full">Send Message ✦</button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer({ setPage }) {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__thai">ดารานาฏศิลป์ไทย</span>
          <p>Dara Thai Dancing School</p>
          <p className="footer__tagline">Maddington, Perth · Western Australia · Est. 2019</p>
        </div>
        <div className="footer__nav">
          {["Home", "About", "Classes", "Events", "Contact"].map((l) => (
            <button key={l} className="footer__link" onClick={() => setPage(l)}>{l}</button>
          ))}
        </div>
        <div className="footer__social-row">
          <a href="https://www.facebook.com/darathaidancing" target="_blank" rel="noopener noreferrer" className="footer__fb">
            📘 facebook.com/darathaidancing
          </a>
        </div>
        <div className="footer__copy">
          <p>© 2025 Dara Thai Dancing School ดารานาฏศิลป์ไทย · All rights reserved.</p>
        </div>
      </div>
      <div className="footer__ornament">✦ ✦ ✦</div>
    </footer>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("Home");
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [page]);
  const pages = { Home, About, Classes, Events, Contact };
  const PageComponent = pages[page];
  return (
    <div className="app">
      <Nav page={page} setPage={setPage} />
      <PageComponent setPage={setPage} />
      <Footer setPage={setPage} />
    </div>
  );
}
