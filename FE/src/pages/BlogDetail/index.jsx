import { Link } from "react-router";
import "./style.css";

const BlogDetail = () => {
  const post = {
    title: "Stress İdarəetməsinin 7 Effektiv Yolu",
    content: `Müasir dövrdə insanların əksəriyyəti gündəlik həyatda müxtəlif səbəblərdən stresslə qarşılaşır. İş həyatı, təhsil, ailə münasibətləri və maddi problemlər stress yaradan əsas faktorlardandır. Stress müəyyən həddə qədər insanı motivasiya edə bilər, lakin uzunmüddətli və idarə olunmayan stress psixi və fiziki sağlamlıq üçün təhlükəli ola bilər.

Stressin əsas əlamətləri arasında yorğunluq, yuxusuzluq, əsəbilik, diqqət dağınıqlığı və bəzən bədən ağrıları göstərilə bilər. İnsan bədəni stres zamanı kortizol adlı hormon ifraz edir və bu hormon orqanizmi təhlükəyə qarşı hazır vəziyyətə gətirir. Lakin kortizolun uzun müddət yüksək səviyyədə qalması immun sisteminə və ürək-damar sisteminə mənfi təsir göstərə bilər.

Stressin idarə olunması üçün bir neçə əsas üsul mövcuddur:

Zamanın düzgün idarə olunması: Gün ərzində planlı işləmək və istirahətə vaxt ayırmaq vacibdir.

Fiziki fəaliyyət: İdman və aktiv həyat tərzi stress hormonlarının azalmasına kömək edir.

Dərin nəfəs və relaksasiya texnikaları: Meditasiya, yoga və nəfəs məşqləri rahatlamağa yardım edir.

Müsbət düşüncə tərzi: Hadisələrə müsbət yanaşmaq, neqativ fikirlərdən uzaqlaşmaq əhval-ruhiyyəni yüksəldə bilər.

Sosial dəstək: Ailə, dostlar və ya psixoloqla danışmaq daxili gərginliyi azalda bilər.

Nəticə olaraq, stress həyatın bir hissəsidir və ondan tamamilə qaçmaq mümkün olmasa da, onu düzgün şəkildə idarə etməklə həyat keyfiyyətini artırmaq mümkündür.`,
    author: "Dr. Rəna Əliyeva",
    date: "15 Dekabr 2024",
    readTime: "5 dəq",
    category: "Stress İdarəsi",
    image:
      "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=400&fit=crop",
    tags: ["stress", "sağlamlıq", "məşq"],
  };

  return (
    <>
    <title>MindCare: Blog Detail</title>
       <div className="blog-detail-page">
      <div className="blog-detail-header">
        <div className="blog-detail-container">
          <div className="blog-detail-category">{post.category}</div>
          <h1 className="blog-detail-title">{post.title}</h1>

          <div className="blog-detail-meta">
            <div className="blog-detail-author">
              <i className="fas fa-user-md"></i>
              <span>{post.author}</span>
            </div>
            <div className="blog-detail-date">
              <i className="fas fa-calendar"></i>
              <span>{post.date}</span>
            </div>
            <div className="blog-detail-read-time">
              <i className="fas fa-clock"></i>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-detail-image">
        <img src={post.image} alt={post.title} />
      </div>

      <div className="blog-detail-content">
        <div className="blog-detail-container">
          <div className="blog-detail-text">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          <div className="blog-detail-tags">
            {post.tags.map((tag, index) => (
              <span key={index} className="blog-detail-tag">
                #{tag}
              </span>
            ))}
          </div>

          <div className="blog-detail-actions">
            <button className="back-button">
              <Link to={"/blog"}>
                <i className="fas fa-arrow-left"></i>
                <span>Geri qayıt</span>
              </Link>
            </button>
            <button className="share-button">
              <i className="fas fa-share-alt"></i>
              <span>Paylaş</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
 
  );
};

export default BlogDetail;
