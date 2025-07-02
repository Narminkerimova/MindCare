import './style.css';
import { Eye, Edit2, Trash2 } from 'lucide-react';

function DoctorTable({ hekimler }) {
  return (
    <div className="table-container">
      <div className="table-wrapper">
        <table className="data-table">
          <thead className="table-head">
            <tr>
              <th className="table-header-cell">Ad Soyad</th>
              <th className="table-header-cell">İxtisas</th>
              <th className="table-header-cell">Telefon</th>
              <th className="table-header-cell">Email</th>
              <th className="table-header-cell">Əməliyyatlar</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {hekimler.map((hekim) => (
              <tr key={hekim.id} className="table-row">
                <td className="table-cell table-cell-bold">{hekim.ad}</td>
                <td className="table-cell">{hekim.ixtisas}</td>
                <td className="table-cell">{hekim.telefon}</td>
                <td className="table-cell">{hekim.email}</td>
                <td className="table-cell">
                  <div className="action-buttons">
                    <button className="action-btn action-btn-view">
                      <Eye size={16} />
                    </button>
                    <button className="action-btn action-btn-edit">
                      <Edit2 size={16} />
                    </button>
                    <button className="action-btn action-btn-delete">
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

export default DoctorTable;
