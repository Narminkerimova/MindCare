import './style.css'

function BlogFilterSection({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div className="blog-filters">
      <div className="blog-filters-container">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={selectedCategory === category}
            className={`filter-btn ${selectedCategory === category ? 'filter-btn-active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default BlogFilterSection;
