import styles from './style.module.css'
import { Link } from 'react-router';

function BlogsSection() {
  return (
    <section className={styles.articlesSection} id="articles"> {/* ✅ Module CSS */}
      <div className={styles.sectionHeader}>
        <div className={styles.sectionBadge}>📚 Məqalələr</div>
        <h2 className={styles.sectionTitle}>Populyar Psixologiya Məqalələri</h2>
        <p className={styles.sectionSubtitle}>
          Ruh sağlığı və şəxsi inkişaf haqqında faydalı məlumatlar
        </p>
      </div>

      <div className={styles.articlesGrid}>
        <div className={styles.articleCard}>
          <div
            className={styles.articleImage}
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=250&fit=crop')" }}
          ></div>
          <div className={styles.articleInfo}>
            <div className={styles.articleMeta}>
              <span className={styles.articleCategory}>Stress İdarəetmə</span>
              <span className={styles.articleDate}>5 gün əvvəl</span>
            </div>
            <h3 className={styles.articleTitle}>Stresin Təbii Üsullarla Azaldılması və İdarə Edilməsi</h3>
            <p className={styles.articleExcerpt}>
              Gündəlik həyatda qarşılaşdığımız stresin səbəbləri və onu necə effektiv şəkildə idarə edə biləcəyimiz...
            </p>
            <div className={styles.articleStats}>
              <div className={styles.stat}>
                <i className="fas fa-eye"></i>
                <span>2.4k oxunma</span>
              </div>
              <div className={styles.stat}>
                <i className="fas fa-clock"></i>
                <span>8 dəq</span>
              </div>
            </div>
            <a href="#" className={`${styles.btn} ${styles.btnOutline} ${styles.articleBtn}`}>
              Oxumağa davam et
            </a>
          </div>
        </div>
      </div>

      <div className={styles.articlesFooter}>
        <Link to={'#'}  className={`${styles.btn} ${styles.btnSecondary}`}> Bütün məqalələri gör</Link>
      </div>
    </section>
  );
}

export default BlogsSection;
