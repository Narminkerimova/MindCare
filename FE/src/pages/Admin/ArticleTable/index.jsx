import './style.css';
import { Eye, Edit2, Trash2 } from 'lucide-react';

function ArticleTable({ meqaleler }) {
  return (
    <div className="table-container">
      <div className="table-wrapper">
        <table className="data-table">
          <thead className="table-head">
            <tr>
              <th className="table-header-cell">Başlıq</th>
              <th className="table-header-cell">Müəllif</th>
              <th className="table-header-cell">Tarix</th>
              <th className="table-header-cell">Status</th>
              <th className="table-header-cell">Əməliyyatlar</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {meqaleler.map((meqale) => (
              <tr key={meqale.id} className="table-row">
                <td className="table-cell table-cell-bold">{meqale.basliq}</td>
                <td className="table-cell">{meqale.muellif}</td>
                <td className="table-cell">{meqale.tarix}</td>
                <td className="table-cell">
                  <span className={`status-badge ${
                    meqale.status === 'Dərc edilib' ? 'status-high' :
                    meqale.status === 'Gözləmədə' ? 'status-medium' :
                    'status-low'
                  }`}>
                    {meqale.status}
                  </span>
                </td>
                <td className="table-cell">
                  <div className="action-buttons">
                    <button className="action-btn action-btn-view"><Eye size={16} /></button>
                    <button className="action-btn action-btn-edit"><Edit2 size={16} /></button>
                    <button className="action-btn action-btn-delete"><Trash2 size={16} /></button>
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
