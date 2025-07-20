import { Eye, Edit2, Trash2 } from 'lucide-react';
import { useContext } from 'react';
import { AdminDataContext } from '../../../context/AdminProvider.jsx';
import { ModalContext } from '../../../context/ModalProvider.jsx';

function ArticleTable() {
  const { data, loading, deleteItem } = useContext(AdminDataContext);
  const { openModal } = useContext(ModalContext);

  if (loading) return <p>Yüklənir...</p>;

  const articles = data?.article || [];
  const doctorsList = data?.doctor || [];

  const getAuthorName = (authorId) => {
    const doctor = doctorsList.find(d => d._id === authorId || d.id === authorId);
    return doctor ? doctor.fullName : 'Naməlum müəllif';
  };

  const formatDate = (dateString) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return date.toLocaleDateString('az-AZ');
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
            {articles.length === 0 ? (
              <tr>
                <td colSpan={5} style={{ textAlign: "center" }}>
                  Heç bir məqalə tapılmadı.
                </td>
              </tr>
            ) : (
              articles.map((article) => (
                <tr key={article._id || article.id} className="table-row">
                  <td className="table-cell table-cell-bold">{article.title}</td>
                  <td className="table-cell">{getAuthorName(article.author)}</td>
                  <td className="table-cell">{formatDate(article.date)}</td>
                  <td className="table-cell">{article.category || '-'}</td>
                  <td className="table-cell">
                    <div className="action-buttons">
                      <button
                        className="action-btn action-btn-view"
                        title="Baxış"
                        onClick={() => openModal('view', 'article', article)}
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        className="action-btn action-btn-edit"
                        title="Redaktə"
                        onClick={() => openModal('edit', 'article', article)}
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        className="action-btn action-btn-delete"
                        title="Sil"
                        onClick={() => handleDelete(article._id || article.id)}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ArticleTable;