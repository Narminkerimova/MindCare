import { useContext, useState } from "react";
import { DataContext } from "./../../context/DataProvider.jsx";
import BlogHeaderSection from "./BlogHeaderSection";
import BlogFilterSection from "./BlogFilterSection";
import BlogCard from "./BlogCard";
import LoadingSpinner from './../../components/LoadingSpinner.jsx'
import "./style.css";

function Blog() {
  const { data, loading } = useContext(DataContext);
  const [selectedCategory, setSelectedCategory] = useState("Hamısı");

  if (loading) return <LoadingSpinner/>;

  const categoriesFromData = data.article
    ? Array.from(new Set(data.article.map((article) => article.category)))
    : [];

  const categories = ["Hamısı", ...categoriesFromData];

  const filteredPosts =
    selectedCategory === "Hamısı"
      ? data.article
      : data.article.filter((post) => post.category === selectedCategory);

  return (
    <>
      <title>MindCare: Blog</title>
      <div className="blog-page">
        <BlogHeaderSection />
        <div className="blog-content">
          <BlogFilterSection
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <div className="blog-grid">
            <div className="blog-grid-container">
              {filteredPosts.map((post) => {
                const authorObj = data.doctor.find(
                  (doc) => String(doc._id) === String(post.author)
                );
                const authorName = authorObj ? authorObj.fullName : "Naməlum";

                return (
                  <BlogCard
                    key={post._id}
                    post={post}
                    authorName={authorName}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
