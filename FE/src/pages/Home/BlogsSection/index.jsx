import './style.css'
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
        <div className="article-card featured">
          <div
            className="article-image"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop')",
            }}
          ></div>
          <div className="article-info">
            <div className="article-meta">
              <span className="article-category">Stress İdarəetmə</span>
              <span className="article-date">5 gün əvvəl</span>
            </div>
            <h3 className="article-title">Stresin Təbii Üsullarla Azaldılması və İdarə Edilməsi</h3>
            <p className="article-excerpt">
              Gündəlik həyatda qarşılaşdığımız stresin səbəbləri və onu necə effektiv şəkildə idarə edə biləcəyimiz barədə ətraflı məlumat. Nəfəs texnikaları, meditasiya və həyat tərzi dəyişiklikləri ilə stresin təsirini minimuma endirmək mümkündür.
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
          <div
            className="article-image"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=250&fit=crop')",
            }}
          ></div>
          <div className="article-info">
            <div className="article-meta">
              <span className="article-category">Özgüvən</span>
              <span className="article-date">1 həftə əvvəl</span>
            </div>
            <h3 className="article-title">Özgüvəni Artırmaq və Öz-Dəyərini Qiymətləndirmək</h3>
            <p className="article-excerpt">
              Özgüvən problemləri ilə necə mübarizə aparaq və öz potensialımızı tam şəkildə ortaya çıxaraq barədə praktik məsləhətlər...
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
          <div
            className="article-image"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&h=250&fit=crop')",
            }}
          ></div>
          <div className="article-info">
            <div className="article-meta">
              <span className="article-category">Yuxu Sağlığı</span>
              <span className="article-date">3 gün əvvəl</span>
            </div>
            <h3 className="article-title">Yuxu Keyfiyyəti və Ruh Sağlığına Təsiri</h3>
            <p className="article-excerpt">
              Keyfiyyətli yuxunun ruh sağlığımıza təsiri və yaxşı yuxu vərdişləri yaratmaq üçün tövsiyələr və praktik üsullar...
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
          <div
            className="article-image"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop')",
            }}
          ></div>
          <div className="article-info">
            <div className="article-meta">
              <span className="article-category">Münasibətlər</span>
              <span className="article-date">2 həftə əvvəl</span>
            </div>
            <h3 className="article-title">Sağlam Münasibətlərin Qurulması və Saxlanılması</h3>
            <p className="article-excerpt">
              Ailə, dostluq və sevgi münasibətlərində effektiv ünsiyyət və qarşılıqlı anlaşma yaratmaq üçün lazım olan bacarıqlar...
            </p>
            <div className="article-stats">
              <div className="stat">
                <i className="fas fa-eye"></i>
                <span>2.9k oxunma</span>
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
        <a href="#" className="btn btn-secondary">Bütün məqalələri gör</a>
      </div>
    </section>
  );
}

export default BlogsSection;