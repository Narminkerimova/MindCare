import "./style.css";

function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero-container">
        <div className="about-hero-content">
          <div className="hero-badge">
            <i className="fas fa-heart"></i>
            Psixoloji sağlamlıq üçün birgə missiya
          </div>
          <h1 className="about-hero-title">
            Hər insanın psixoloji
            <br />
            sağlamlığa ehtiyacı var
          </h1>
          <p className="about-hero-subtitle">
            MindCare olaraq, psixoloji sağlamlıq xidmətlərini hər kəs üçün
            əlçatan, keyfiyyətli və təhlükəsiz etmək missiyası ilə fəaliyyət
            göstəririk.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
