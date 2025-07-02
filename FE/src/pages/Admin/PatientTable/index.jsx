import './style.css';
import { Eye, Edit2, Trash2 } from 'lucide-react';

function PatientTable({ pasiyentler }) {
  return (
    <div className="table-container">
      <div className="table-wrapper">
        <table className="data-table">
          <thead className="table-head">
            <tr>
              <th className="table-header-cell">Ad Soyad</th>
              <th className="table-header-cell">Yaş</th>
              <th className="table-header-cell">Telefon</th>
              <th className="table-header-cell">Həkim</th>
              <th className="table-header-cell">Son Seans</th>
              <th className="table-header-cell">Əməliyyatlar</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {pasiyentler.map((pasiyent) => (
              <tr key={pasiyent.id} className="table-row">
                <td className="table-cell table-cell-bold">{pasiyent.ad}</td>
                <td className="table-cell">{pasiyent.yas}</td>
                <td className="table-cell">{pasiyent.telefon}</td>
                <td className="table-cell">{pasiyent.hekim}</td>
                <td className="table-cell">{pasiyent.sonSeans}</td>
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

export default PatientTable;
