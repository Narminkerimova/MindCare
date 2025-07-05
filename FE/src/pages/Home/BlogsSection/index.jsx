import { useContext } from "react";
import { DataContext } from "./../../../context/DataProvider.jsx";
import {Link} from 'react-router'

import "./style.css";

function BlogsSection() {
  const { data, loading } = useContext(DataContext);
  if (loading) return <p>Yüklənir...</p>;

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
        {data.article.map((article) => (
          <div className="article-card">
            <div
              className="article-image">
                <img src={article.photoUrl} alt="article" />
              </div>
            <div className="article-info">
              <div className="article-meta">
                <span className="article-category">{article.category}</span>
              </div>
              <h3 className="article-title">
                {article.title.slice(0,35)}...
              </h3>
              <p className="article-excerpt">
                {article.content.slice(0,100)}...
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
              <Link to={`/blogdetail/${article._id}`} className="btn btn-outline article-btn">
                Oxumağa davam et
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="articles-footer">
        <Link to={'/blog'} className="btn btn-secondary">
          Bütün məqalələri gör
        </Link>
      </div>
    </section>
  );
}

export default BlogsSection;
