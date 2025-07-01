import { useState } from 'react';
import BlogHeaderSection from './BlogHeaderSection';
import BlogFilterSection from './BlogFilterSection';
import BlogCard from './BlogCard';
import './style.css';

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Stress İdarəetməsinin 7 Effektiv Yolu",
      excerpt: "Gündəlik həyatda stress hər birimizin qarşılaşdığı ən böyük problemlərdən biridir. Düzgün stress idarəetmə texnikaları öyrənməklə həyat keyfiyyətimizi əhəmiyyətli dərəcədə artıra bilərik...",
      author: "Dr. Rəna Əliyeva",
      date: "15 Dekabr 2024",
      readTime: "5 dəq",
      category: "Stress İdarəsi",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=250&fit=crop",
      tags: ["stress", "sağlamlıq", "məşq"]
    },
    {
      id: 2,
      title: "Depressiyanın Erkən Əlamətlərini Necə Tanımaq Olar",
      excerpt: "Depressiya müasir dövrün ən ciddi psixoloji problemlərindən biridir. Erkən müdaxilə həyat xilas edə bilər. Bu məqalədə depressiyanın ilk əlamətlərini və nə vaxt köməkə müraciət etməli olduğunuzu...",
      author: "Dr. Elvin Quliyev", 
      date: "12 Dekabr 2024",
      readTime: "8 dəq",
      category: "Depressiya",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
      tags: ["depressiya", "sağıqlıq", "psixologiya"]
    },
    {
      id: 3,
      title: "Uşaqlarda Anksiyetenin Səbəbləri və Həll Yolları",
      excerpt: "Uşaq anksiyetesi valideynlər üçün narahatlıq mənbəyidir. Həm uşaqlar, həm də valideynlər üçün bu vəziyyətlə başa çıxmağın düzgün yolları mövcuddur. Uşağınızın anksiyetesini azaltmaq üçün...",
      author: "Dr. Sona Aslanova",
      date: "10 Dekabr 2024", 
      readTime: "6 dəq",
      category: "Uşaq Psixologiyası",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=250&fit=crop",
      tags: ["uşaq", "anksiyete", "valideyn"]
    },
    {
      id: 4,
      title: "Yuxu Keyfiyyətinin Ruhi Sağlamlığa Təsiri",
      excerpt: "Keyfiyyətli yuxu ruhi sağlamlığımızın əsasıdır. Yuxusuzluq depressiya, anksiyete və digər psixoloji problemlərin artmasına səbəb ola bilər. Yaxşı yuxu alışqanlıqları formalaşdırmaq üçün...",
      author: "Dr. Rəna Əliyeva",
      date: "8 Dekabr 2024",
      readTime: "4 dəq", 
      category: "Yuxu Sağlamlığı",
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&h=250&fit=crop",
      tags: ["yuxu", "sağlamlıq", "həyat tərzi"]
    },
    {
      id: 5,
      title: "İş Yerində Burnout Sindromu və Qarşısının Alınması",
      excerpt: "İş yerində tükənmişlik hissi müasir işçilərin böyük hissəsinin üzləşdiyi problemdir. Burnout sindromu yalnız iş məhsuldarlığını deyil, ümumi həyat keyfiyyətini də ciddi şəkildə təsir edir...",
      author: "Dr. Elvin Quliyev",
      date: "5 Dekabr 2024",
      readTime: "7 dəq",
      category: "İş Psixologiyası", 
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=250&fit=crop",
      tags: ["burnout", "iş", "stress"]
    },
    {
      id: 6,
      title: "Meditasiyanın Beyin Üzərindəki Elmi Təsiri",
      excerpt: "Meditasiya qədim praktika olsa da, müasir elmi tədqiqatlar onun beyin üzərindəki müsbət təsirlərini sübut edir. Həftədə yalnız bir neçə dəqiqə meditasiya praktikası beyninizin strukturunu...",
      author: "Dr. Sona Aslanova", 
      date: "2 Dekabr 2024",
      readTime: "9 dəq",
      category: "Meditasiya",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      tags: ["meditasiya", "beyin", "elmi"]
    }
  ];

  const categories = ["Hamısı", "Stress İdarəsi", "Depressiya", "Uşaq Psixologiyası", "Yuxu Sağlamlığı", "İş Psixologiyası", "Meditasiya"];
  const [selectedCategory, setSelectedCategory] = useState("Hamısı");

  const filteredPosts = selectedCategory === "Hamısı"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
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
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
