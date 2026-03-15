import { useState } from "react";
import "./App.css";

function App() {
  const [lang, setLang] = useState("en");

  const text = {
    en: {
      title: "Dara Thai Dancing",
      subtitle: "Traditional Thai Dance in Perth",
      about:
        "Dara Thai Dancing School teaches traditional Thai dance and promotes Thai culture through performances and classes.",
      classes: "Classes",
      contact: "Contact Us",
    },
    th: {
      title: "ดารานาฏศิลป์ไทย",
      subtitle: "การสอนรำไทยในเมืองเพิร์ธ",
      about:
        "โรงเรียนดารานาฏศิลป์ไทยสอนการรำไทยและเผยแพร่วัฒนธรรมไทยผ่านการแสดงและการเรียนการสอน",
      classes: "คลาสเรียน",
      contact: "ติดต่อเรา",
    },
  };

  const t = text[lang];

  return (
    <div className="container">
      <header>
        <h1>{t.title}</h1>

        <div className="lang">
          <button onClick={() => setLang("en")}>English</button>
          <button onClick={() => setLang("th")}>ไทย</button>
        </div>
      </header>

      <section className="hero">
        <h2>{t.subtitle}</h2>
      </section>

      <section className="about">
        <p>{t.about}</p>
      </section>

      <section className="buttons">
        <button>{t.classes}</button>
        <button>{t.contact}</button>
      </section>

      <footer>
        <p>© Dara Thai Dancing</p>
      </footer>
    </div>
  );
}

export default App;
