import { useContext } from "react";
import { useParams, Link } from "react-router";
import { DataContext } from "../../context/DataProvider";
import "./style.css";

function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year} ${month} ${day}`;
}

const BlogDetail = () => {
  const { id } = useParams();
  const { data, loading } = useContext(DataContext);

  if (loading) return <div>Yüklənir...</div>;

  const post = (data.article || []).find((item) => item._id === id);
  if (!post) return <div>Məqalə tapılmadı</div>;

  const doctor = (data.doctor || []).find(
    (doc) => String(doc._id) === String(post.author)
  );

  const authorName = doctor ? doctor.fullName : "Naməlum Həkim";
  const photoUrl = post.photoUrl || "/default-image.jpg";

  return (
    <div className="blog-detail-page">
      <header className="blog-detail-header">
        <div className="blog-detail-container">
          <div className="blog-detail-category">{post.category}</div>
          <h1 className="blog-detail-title">{post.title}</h1>
          <div className="blog-detail-meta">
            <span className="blog-detail-author">{authorName}</span>
            <span className="blog-detail-date">{formatDate(post.date)}</span>
            <span className="blog-detail-read-time">{post.readTime}</span>
          </div>
        </div>
      </header>

      <section className="blog-detail-image">
        <img src={photoUrl} alt={post.title} />
      </section>

      <section className="blog-detail-content">
        <div className="blog-detail-container">
          <div className="blog-detail-text">{post.content}</div>

          <div className="blog-detail-tags">
            {post.tags.map((tag, i) => (
              <span key={i} className="blog-detail-tag">
                #{tag}
              </span>
            ))}
          </div>

          <div className="blog-detail-actions">
            <div className="back-button">
              <Link to="/blog">Geri qayıt</Link>
            </div>
            <button className="share-button">Paylaş</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
