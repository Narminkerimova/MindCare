import './style.css'

function BlogHeaderSection() {
  return (
    <div className="blog-header">
        <div className="blog-header-container">
          <div className="blog-badge">
            <i className="fas fa-book-open"></i>
            Ekspert Məqalələri
          </div>
          <h1 className="blog-title">Psixoloji Sağlamlıq Bloqu</h1>
          <p className="blog-subtitle">
            Mütəxəssislərimizin qələmindən psixoloji sağlamlıq, stress idarəsi və 
            həyat keyfiyyətinin artırılması haqqında faydalı məqalələrimiz mövcuddur.
          </p>
        </div>
      </div>
  )
}

export default BlogHeaderSection