import { Eye, Edit2, Trash2 } from 'lucide-react';

function CenterTable({ merkezler }) {
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
            {merkezler.map((merkez) => (
              <tr key={merkez.id} className="table-row">
                <td className="table-cell table-cell-bold">{merkez.ad}</td>
                <td className="table-cell">{merkez.unvan}</td>
                <td className="table-cell">{merkez.telefon}</td>
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

export default CenterTable;
