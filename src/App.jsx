import { useState, useEffect, useRef } from "react";
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

  const links = ["Home", "About", "Classes", "Gallery", "Contact"];

  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <button className="nav__logo" onClick={() => setPage("Home")}>
        <span className="nav__logo-thai">ดารา</span>
        <span className="nav__logo-en">Dara Thai Dancing</span>
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
          <p className="hero__eyebrow">✦ The Art of Thai Classical Dance ✦</p>
          <h1 className="hero__title">
            <span>Where</span>
            <em>Grace</em>
            <span>Becomes</span>
            <em>Art</em>
          </h1>
          <p className="hero__sub">
            Discover the ancient elegance of Thai classical dance in Perth, Western Australia.
            Taught with heart, performed with soul.
          </p>
          <div className="hero__ctas">
            <button className="btn btn--gold" onClick={() => setPage("Classes")}>
              Explore Classes
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

      {/* Features */}
      <section className="features">
        <div className="features__grid">
          {[
            { icon: "🌸", title: "Classical Technique", desc: "Rooted in centuries of Ramakien tradition, every movement tells a story." },
            { icon: "🏆", title: "Performance Ready", desc: "Train for festivals, cultural events, and professional stage performances." },
            { icon: "👶", title: "All Ages Welcome", desc: "Programs for children from age 5 through to adult beginners and advanced dancers." },
            { icon: "🎭", title: "Cultural Immersion", desc: "Learn the history, music, and spiritual meaning behind each gesture and posture." },
          ].map((f) => (
            <div className="feature-card" key={f.title}>
              <div className="feature-card__icon">{f.icon}</div>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Banner */}
      <section className="quote-banner">
        <div className="quote-banner__inner">
          <div className="quote-banner__ornament">❋</div>
          <blockquote>
            "Thai dance is not just movement — it is prayer made visible, history made alive."
          </blockquote>
          <cite>— Kru Dara, Founder</cite>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="cta-strip">
        <h2>Begin Your Journey</h2>
        <p>Trial classes available every term. No experience necessary.</p>
        <button className="btn btn--gold" onClick={() => setPage("Contact")}>
          Book a Trial Class →
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
        <p>A legacy woven in gold thread and devotion</p>
      </header>

      <section className="about__story">
        <div className="about__image-wrap">
          <div className="about__image-placeholder">
            <span className="about__thai-symbol">ระบำ</span>
            <p>Thai Dance</p>
          </div>
          <div className="about__image-frame" />
        </div>
        <div className="about__text">
          <h2>From Bangkok to Perth</h2>
          <p>
            Dara Thai Dancing was founded in 2008 by Kru Dara Supasiri, a classically trained dancer
            from the prestigious Bunditpatanasilpa Institute in Bangkok, Thailand. Arriving in Perth
            with a heart full of passion and a suitcase of costumes, she set about building a home
            for Thai classical dance in Western Australia.
          </p>
          <p>
            What began as a small class of eight students in a community hall has grown into one of
            Perth's most celebrated cultural dance schools — nurturing hundreds of students across
            every age group, from tiny five-year-olds enchanted by the glittering headdresses to
            adults discovering a new creative world.
          </p>
          <p>
            Every class at Dara Thai Dancing honours the deep spiritual and artistic heritage of
            Thailand's royal court dances — Khon, Lakhon, and Fawn Thai — while making them
            accessible, joyful, and alive for a new generation.
          </p>
        </div>
      </section>

      <section className="values">
        <h2 className="values__heading">What We Stand For</h2>
        <div className="values__grid">
          {[
            { title: "Respect for Tradition", icon: "🙏", desc: "We teach the authentic forms, gestures, and stories exactly as they have been passed down through generations." },
            { title: "Community & Belonging", icon: "💛", desc: "Our school is a family. Students support each other, celebrate together, and grow as artists and people." },
            { title: "Excellence", icon: "⭐", desc: "We hold high standards — not to intimidate, but because we believe every student is capable of greatness." },
            { title: "Cultural Pride", icon: "🇹🇭", desc: "We celebrate Thai culture and share it generously with our broader Perth community." },
            { title: "Joy in Movement", icon: "🎶", desc: "Dance should be a delight. We teach rigour alongside warmth, discipline alongside play." },
            { title: "Inclusivity", icon: "🌏", desc: "Thai dance is for everyone. You do not need Thai heritage or prior experience — only an open heart." },
          ].map((v) => (
            <div className="value-card" key={v.title}>
              <div className="value-card__icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="team">
        <h2>Meet Kru Dara</h2>
        <div className="team__card">
          <div className="team__avatar">
            <span>กรู</span>
          </div>
          <div className="team__bio">
            <h3>Kru Dara Supasiri</h3>
            <p className="team__title">Founder & Principal Teacher</p>
            <p>
              Trained at the Bunditpatanasilpa Institute, Bangkok · 30+ years experience ·
              Graduate of Thailand's National College of the Arts · Recipient of the Thai
              Cultural Excellence Award 2019 · Performed at the Thai Royal Court Cultural
              Exchange Program.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

// ─── CLASSES ──────────────────────────────────────────────────────────────────
function Classes({ setPage }) {
  const classes = [
    {
      level: "Little Dancers",
      age: "Ages 5–8",
      tag: "Beginners",
      color: "pink",
      desc: "An enchanting introduction to Thai classical dance through movement, music, and storytelling. Children learn basic hand gestures (natasin), footwork, and perform in end-of-year showcases.",
      days: "Saturday 9:00am – 10:00am",
      fee: "$25 / class · $85 / term",
    },
    {
      level: "Junior Classical",
      age: "Ages 9–14",
      tag: "Foundation",
      color: "teal",
      desc: "Students deepen their understanding of Fawn Thai and begin exploring Lakhon form. Emphasis on posture, expression, and musicality. Regular performance opportunities.",
      days: "Saturday 10:15am – 11:45am",
      fee: "$30 / class · $110 / term",
    },
    {
      level: "Senior Classical",
      age: "Ages 15+",
      tag: "Intermediate–Advanced",
      color: "gold",
      desc: "Full classical curriculum covering Khon, Lakhon, and Fawn Thai. Students work toward performance grades and cultural exchange programs. Costume and stage training included.",
      days: "Saturday 12:00pm – 2:00pm · Wednesday 6:30pm – 8:00pm",
      fee: "$35 / class · $130 / term",
    },
    {
      level: "Adult Beginners",
      age: "18+",
      tag: "All Levels",
      color: "ruby",
      desc: "Never danced before? Perfect. This warm, supportive class introduces adults to the beauty of Thai classical movement with no pressure and plenty of encouragement.",
      days: "Wednesday 7:00pm – 8:30pm",
      fee: "$30 / class · $100 / term",
    },
  ];

  return (
    <main className="page classes">
      <header className="page-header">
        <div className="page-header__ornament">✦</div>
        <h1>Our Classes</h1>
        <p>Every student. Every age. Every dream.</p>
      </header>

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
                <span>{c.days}</span>
              </div>
              <div className="class-card__detail">
                <span className="class-card__detail-label">Fees</span>
                <span>{c.fee}</span>
              </div>
            </div>
            <button className="btn btn--gold" onClick={() => setPage("Contact")}>
              Enquire Now
            </button>
          </div>
        ))}
      </section>

      <section className="trial-banner">
        <h2>✨ First Class Free ✨</h2>
        <p>All new students are welcome to attend one complimentary trial class before enrolling.</p>
        <button className="btn btn--ghost" onClick={() => setPage("Contact")}>
          Book Your Free Trial
        </button>
      </section>
    </main>
  );
}

// ─── GALLERY ──────────────────────────────────────────────────────────────────
function Gallery() {
  const items = [
    { label: "Fawn Leb — Fingernail Dance", emoji: "💅", desc: "The iconic golden fingernail extensions trace elegant arcs through the air." },
    { label: "Khon Mask Dance", emoji: "🎭", desc: "Elaborate lacquered masks and brocade costumes recreate scenes from the Ramakien epic." },
    { label: "Lakhon Nai", emoji: "🌸", desc: "The refined inner-court dance form, once performed exclusively for royalty." },
    { label: "Fawn Thai — Northern Style", emoji: "🕯️", desc: "Candle dances from Chiang Mai, flickering light echoing through graceful fingers." },
    { label: "Wai Kru Ceremony", emoji: "🙏", desc: "The ritual teacher-honouring ceremony that opens every performance season." },
    { label: "End of Year Showcase", emoji: "🌟", desc: "Our annual gala performance where every student shines on a professional stage." },
    { label: "Costume Workshop", emoji: "👑", desc: "Students learn to wear and care for traditional silk costumes and headdresses." },
    { label: "Cultural Festival", emoji: "🎊", desc: "Dara Thai Dancing performs at the annual Perth Thai Festival each April." },
    { label: "Advanced Ensemble", emoji: "🎵", desc: "Our senior ensemble, performing with live piphat musicians." },
  ];

  return (
    <main className="page gallery">
      <header className="page-header">
        <div className="page-header__ornament">✦</div>
        <h1>Gallery</h1>
        <p>Glimpses of grace, colour, and devotion</p>
      </header>

      <div className="gallery__grid">
        {items.map((item, i) => (
          <div className={`gallery-item gallery-item--${(i % 3) + 1}`} key={item.label}>
            <div className="gallery-item__inner">
              <div className="gallery-item__emoji">{item.emoji}</div>
              <div className="gallery-item__overlay">
                <h3>{item.label}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="gallery__cta">
        <p>Follow our journey on Instagram <strong>@DaraThaîDancing</strong></p>
      </div>
    </main>
  );
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="page contact">
      <header className="page-header">
        <div className="page-header__ornament">✦</div>
        <h1>Get in Touch</h1>
        <p>We'd love to welcome you to our family</p>
      </header>

      <div className="contact__layout">
        <div className="contact__info">
          <h2>Find Us</h2>
          <div className="contact__details">
            {[
              { icon: "📍", label: "Studio Location", val: "12 Lotus Lane, Northbridge WA 6003" },
              { icon: "📞", label: "Phone", val: "(08) 9200 0000" },
              { icon: "✉️", label: "Email", val: "hello@darathai.com.au" },
              { icon: "🕐", label: "Office Hours", val: "Tue–Sat, 9am – 6pm" },
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
            <h3>Follow Us</h3>
            <div className="contact__social-links">
              <a href="#" className="social-btn">Facebook</a>
              <a href="#" className="social-btn">Instagram</a>
              <a href="#" className="social-btn">YouTube</a>
            </div>
          </div>
        </div>

        <div className="contact__form-wrap">
          {sent ? (
            <div className="contact__success">
              <div className="contact__success-icon">🌸</div>
              <h2>Khob Khun Mak!</h2>
              <p>Thank you for reaching out. Kru Dara will be in touch within 1–2 business days.</p>
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
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="(08) xxxx xxxx" />
                </div>
                <div className="form-group">
                  <label>Interested In</label>
                  <select name="interest" value={form.interest} onChange={handleChange}>
                    <option value="">Select a class...</option>
                    <option>Little Dancers (Ages 5–8)</option>
                    <option>Junior Classical (Ages 9–14)</option>
                    <option>Senior Classical (Ages 15+)</option>
                    <option>Adult Beginners</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell us a little about yourself or your child..." />
              </div>
              <button type="submit" className="btn btn--gold btn--full">
                Send Message ✦
              </button>
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
          <span className="footer__thai">ดารา</span>
          <p>Dara Thai Dancing</p>
          <p className="footer__tagline">Perth, Western Australia</p>
        </div>
        <div className="footer__nav">
          {["Home", "About", "Classes", "Gallery", "Contact"].map((l) => (
            <button key={l} className="footer__link" onClick={() => setPage(l)}>{l}</button>
          ))}
        </div>
        <div className="footer__copy">
          <p>© 2025 Dara Thai Dancing. All rights reserved.</p>
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

  const pages = { Home, About, Classes, Gallery, Contact };
  const PageComponent = pages[page];

  return (
    <div className="app">
      <Nav page={page} setPage={setPage} />
      <PageComponent setPage={setPage} />
      <Footer setPage={setPage} />
    </div>
  );
}
