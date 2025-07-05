import { Eye, Edit2, Trash2 } from 'lucide-react';
import { useContext } from 'react';
import { AdminDataContext } from '../../../context/AdminProvider.jsx';

function PatientTable() {
  const { data, loading, deleteItem } = useContext(AdminDataContext);

  if (loading) return <p>Yüklənir...</p>;

  // Həkimin adını tapırıq
  const getDoctorName = (doctorId) => {
    const doctor = data.doctor.find(d => d._id === doctorId);
    return doctor ? doctor.fullName : 'Naməlum həkim';
  };

  // Son test tarixini ən son testin tarixindən götürürük
  const getLastQuizDate = (quizResults) => {
    if (!quizResults || quizResults.length === 0) return '-';
    const latest = quizResults.reduce((a, b) => (new Date(a.date) > new Date(b.date) ? a : b));
    return new Date(latest.date).toLocaleDateString('az-AZ');
  };

  const handleDelete = (id) => {
    if (window.confirm('Bu pasiyenti silmək istədiyinizə əminsiniz?')) {
      deleteItem('patient', id);
    }
  };

  return (
    <div className="table-container">
      <div className="table-wrapper">
        <table className="data-table">
          <thead className="table-head">
            <tr>
              <th className="table-header-cell">Ad Soyad</th>
              <th className="table-header-cell">Həkim</th>
              <th className="table-header-cell">Son Seans / Son Test</th>
              <th className="table-header-cell">Qeydlər</th>
              <th className="table-header-cell">Əməliyyatlar</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {data.patient.map((pasiyent) => (
              <tr key={pasiyent._id} className="table-row">
                <td className="table-cell table-cell-bold">{pasiyent.fullName}</td>
                <td className="table-cell">{getDoctorName(pasiyent.doctor)}</td>
                <td className="table-cell">{getLastQuizDate(pasiyent.quizResults)}</td>
                <td className="table-cell">{pasiyent.notes || '-'}</td>
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
                      onClick={() => handleDelete(pasiyent._id)}
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

export default PatientTable;
