import './style.css';

function DoctorArticle({ doctor }) {
  if (!doctor.articles || doctor.articles.length === 0) {
    return null;
  }

  return (
    <section className="doctor-articles">
      <div className="doctor-articles-container">
        <h3 className="section-title">Məqalələr</h3>
        <div className="articles-grid">
          {doctor.articles.map((article, index) => (
            <article className="article-card" key={index}>
              <div className="article-image">
                <img src={article.imageUrl || "/default-article.jpg"} alt={article.title} />
              </div>
              <div className="article-content">
                <div className="article-category">{article.category}</div>
                <h4 className="article-title">{article.title}</h4>
                <p className="article-excerpt">{article.description}</p>
                <div className="article-meta">
                  <span className="article-date">{article.date}</span>
                  <span className="article-read-time">{article.readTime} dəq oxu</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DoctorArticle;
