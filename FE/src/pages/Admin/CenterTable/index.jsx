import { Eye, Edit2, Trash2 } from 'lucide-react';
import { useContext } from 'react';
import { AdminDataContext } from '../../../context/AdminProvider.jsx';

function CenterTable() {
  const { data, loading, deleteItem } = useContext(AdminDataContext);

  if (loading) return <p>Yüklənir...</p>;

  const handleDelete = (id) => {
    if (window.confirm('Bu mərkəzi silmək istədiyinizə əminsiniz?')) {
      deleteItem('center', id);
    }
  };

  return (
    <div className="table-container">
      <div className="table-wrapper">
        <table className="data-table">
          <thead className="table-head">
            <tr>
              <th className="table-header-cell">Mərkəz Adı</th>
              <th className="table-header-cell">Ünvan</th>
              <th className="table-header-cell">Telefon</th>
              <th className="table-header-cell">Əməliyyatlar</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {data.center.map((center) => (
              <tr key={center.id} className="table-row">
                <td className="table-cell table-cell-bold">{center.name}</td>
                <td className="table-cell">{center.fullAddress}</td>
                <td className="table-cell">{center.phoneNumber}</td>
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
                      onClick={() => handleDelete(center.id)}
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

export default CenterTable;
