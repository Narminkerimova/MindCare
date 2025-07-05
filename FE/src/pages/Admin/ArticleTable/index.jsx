import { Eye, Edit2, Trash2 } from 'lucide-react';
import { useContext } from 'react';
import { AdminDataContext } from '../../../context/AdminProvider.jsx';

function ArticleTable() {
  const { data, loading, deleteItem } = useContext(AdminDataContext);

  if (loading) return <p>Yüklənir...</p>;

  // Author id-dən ad soyad tapmaq funksiyası
  const getAuthorName = (authorId) => {
    const doctor = data.doctor.find((doc) => doc.id === authorId);
    return doctor ? doctor.fullName : 'Naməlum müəllif';
  };

  // Tarixi formatlama funksiyası, məsələn "dd.mm.yyyy"
  const formatDate = (dateString) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    if (isNaN(date)) return dateString; // əgər format düzgün deyilsə orijinalını göstər
    return date.toLocaleDateString('az-AZ'); // Azərbaycan formatı dd.mm.yyyy
  };

  const handleDelete = (id) => {
    if (window.confirm('Bu məqaləni silmək istədiyinizə əminsiniz?')) {
      deleteItem('article', id);
    }
  };

  return (
    <div className="table-container">
      <div className="table-wrapper">
        <table className="data-table">
          <thead className="table-head">
            <tr>
              <th className="table-header-cell">Başlıq</th>
              <th className="table-header-cell">Müəllif</th>
              <th className="table-header-cell">Tarix</th>
              <th className="table-header-cell">Kateqoriya</th>
              <th className="table-header-cell">Əməliyyatlar</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {data.article.map((article) => (
              <tr key={article.id} className="table-row">
                <td className="table-cell table-cell-bold">{article.title}</td>
                <td className="table-cell">{getAuthorName(article.author)}</td>
                <td className="table-cell">{formatDate(article.date)}</td>
                <td className="table-cell">{article.category}</td>
                <td className="table-cell">
                  <div className="action-buttons">
                    <button className="action-btn action-btn-view" title="Baxış">
                      <Eye size={16} />
                    </button>
                    <button className="action-btn action-btn-edit" title="Redaktə">
                      <Edit2 size={16} />
                    </button>
                    <button
                      className="action-btn action-btn-delete"
                      title="Sil"
                      onClick={() => handleDelete(article.id)}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ArticleTable;
