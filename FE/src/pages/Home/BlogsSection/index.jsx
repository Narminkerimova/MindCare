import "./style.css"

function BlogsSection() {
  return (
    <section className="articles-section" id="articles">
      <div className="section-header">
        <div className="section-badge">📚 Məqalələr</div>
        <h2 className="section-title">Populyar Psixologiya Məqalələri</h2>
        <p className="section-subtitle">
          Ruh sağlığı və şəxsi inkişaf haqqında faydalı məlumatlar
        </p>
      </div>

      <div className="articles-grid">
        <div className="article-card">
          <div className="article-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=250&fit=crop')"}}></div>
          <div className="article-info">
            <div className="article-meta">
              <span className="article-category">Stress İdarəetmə</span>
              <span className="article-date">5 gün əvvəl</span>
            </div>
            <h3 className="article-title">Stresin Təbii Üsullarla Azaldılması və İdarə Edilməsi</h3>
            <p className="article-excerpt">
              Gündəlik həyatda qarşılaşdığımız stresin səbəbləri və onu necə effektiv şəkildə 
              idarə edə biləcəyimiz...
            </p>
            <div className="article-stats">
              <div className="stat">
                <i className="fas fa-eye"></i>
                <span>2.4k oxunma</span>
              </div>
              <div className="stat">
                <i className="fas fa-clock"></i>
                <span>8 dəq</span>
              </div>
            </div>
            <a href="#" className="btn btn-outline article-btn">
              Oxumağa davam et
            </a>
          </div>
        </div>

        <div className="article-card">
          <div className="article-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=250&fit=crop')"}}></div>
          <div className="article-info">
            <div className="article-meta">
              <span className="article-category">Ailə Münasibətləri</span>
              <span className="article-date">1 həftə əvvəl</span>
            </div>
            <h3 className="article-title">Uşaqlarla Sağlam Ünsiyyət Qurma Yolları</h3>
            <p className="article-excerpt">
              Valideynlər üçün uşaqları ilə güclü və sağlam əlaqələr qurmaq üçün 
              effektiv ünsiyyət strategiyaları...
            </p>
            <div className="article-stats">
              <div className="stat">
                <i className="fas fa-eye"></i>
                <span>1.8k oxunma</span>
              </div>
              <div className="stat">
                <i className="fas fa-clock"></i>
                <span>6 dəq</span>
              </div>
            </div>
            <a href="#" className="btn btn-outline article-btn">
              Oxumağa davam et
            </a>
          </div>
        </div>

        <div className="article-card">
          <div className="article-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=250&fit=crop')"}}></div>
          <div className="article-info">
            <div className="article-meta">
              <span className="article-category">Özünüdərk</span>
              <span className="article-date">2 həftə əvvəl</span>
            </div>
            <h3 className="article-title">Özgüvən Artırmaq üçün 10 Praktik Metod</h3>
            <p className="article-excerpt">
              Özgüvəninizi artırmaq və daha güclü bir şəxsiyyət qurmaq üçün 
              elmi araşdırmalara əsaslanan metodlar...
            </p>
            <div className="article-stats">
              <div className="stat">
                <i className="fas fa-eye"></i>
                <span>3.1k oxunma</span>
              </div>
              <div className="stat">
                <i className="fas fa-clock"></i>
                <span>12 dəq</span>
              </div>
            </div>
            <a href="#" className="btn btn-outline article-btn">
              Oxumağa davam et
            </a>
          </div>
        </div>

        <div className="article-card">
          <div className="article-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop"}}></div>
          <div className="article-info">
            <div className="article-meta">
              <span className="article-category">Mental Sağlıq</span>
              <span className="article-date">3 həftə əvvəl</span>
            </div>
            <h3 className="article-title">Anksiyete və Qorxuların Üstesindən Gəlmə</h3>
            <p className="article-excerpt">
              Anksiyete pozğunluqlarının əlamətlərini tanımaq və onlarla 
              mübarizə aparmaq üçün effektiv terapevtik yanaşmalar...
            </p>
            <div className="article-stats">
              <div className="stat">
                <i className="fas fa-eye"></i>
                <span>2.7k oxunma</span>
              </div>
              <div className="stat">
                <i className="fas fa-clock"></i>
                <span>10 dəq</span>
              </div>
            </div>
            <a href="#" className="btn btn-outline article-btn">
              Oxumağa davam et
            </a>
          </div>
        </div>
      </div>

      <div className="articles-footer">
        <a href="#" className="btn btn-secondary">
          Bütün məqalələri gör
        </a>
      </div>
    </section>
  );
}
export default BlogsSection