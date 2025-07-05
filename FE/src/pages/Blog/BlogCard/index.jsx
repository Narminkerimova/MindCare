import { Link } from 'react-router';
import './style.css';

function BlogCard({ post, authorName }) {
  const EXCERPT_LIMIT = 120;

  const truncateText = (text, maxLength) => {
    if (!text || typeof text !== 'string') return '';
    return text.length > maxLength ? text.slice(0, maxLength).trim() + '...' : text;
  };

  return (
    <article className="blog-card" key={post._id}>
      <div className="blog-card-image">
        <img src={post.photoUrl} alt={post.title} className="blog-card-img" />
        <div className="blog-card-category">{post.category}</div>
      </div>

      <div className="blog-card-content">
        <div className="blog-card-meta">
          <div className="blog-card-author">
            <i className="fas fa-user-md"></i>
            <span className="blog-card-author-name">{authorName}</span>
          </div>
          <div className="blog-card-date">
            <i className="fas fa-calendar"></i>
            <span className="blog-card-date-text">
              {new Date(post.date).toLocaleDateString('az-AZ')}
            </span>
          </div>
        </div>

        <h2 className="blog-card-title">{post.title}</h2>
        <p className="blog-card-excerpt">
          {truncateText(post.content, EXCERPT_LIMIT)}
        </p>

        {Array.isArray(post.tags) && post.tags.length > 0 && (
          <div className="blog-card-tags">
            {post.tags.map((tag, idx) => (
              <span key={idx} className="blog-card-tag">#{tag}</span>
            ))}
          </div>
        )}

        <div className="blog-card-footer">
          <Link to={`/blogdetail/${post._id}`} className="blog-card-read-more">
            <span className="blog-card-read-more-text">Daha ətraflı</span>
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
