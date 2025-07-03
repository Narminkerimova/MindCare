import {Link} from 'react-router'
import './style.css';

function BlogCard({ post }) {
  const EXCERPT_LIMIT = 120; 

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength).trim() + '...' : text;
  };

  return (
    <article className="blog-card">
      <div className="blog-card-image">
        <img src={post.image} alt={post.title} className="blog-card-img" />
        <div className="blog-card-category">{post.category}</div>
      </div>

      <div className="blog-card-content">
        <div className="blog-card-meta">
          <div className="blog-card-author">
            <i className="fas fa-user-md"></i>
            <span className="blog-card-author-name">{post.author}</span>
          </div>
          <div className="blog-card-date">
            <i className="fas fa-calendar"></i>
            <span className="blog-card-date-text">{post.date}</span>
          </div>
        </div>

        <h2 className="blog-card-title">{post.title}</h2>
        <p className="blog-card-excerpt">{truncateText(post.excerpt, EXCERPT_LIMIT)}</p>

        <div className="blog-card-tags">
          {post.tags.map((tag, index) => (
            <span key={index} className="blog-card-tag">#{tag}</span>
          ))}
        </div>

        <div className="blog-card-footer">
            <Link to={'/blogdetail'} className="blog-card-read-more">
            <span className="blog-card-read-more-text">Daha ətraflı</span>
            <i className="fas fa-arrow-right"></i>
            </Link>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
