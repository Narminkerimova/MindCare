import { Eye, Edit2, Trash2 } from "lucide-react";
import { useContext } from "react";
import { AdminDataContext } from "../../../context/AdminProvider.jsx";
import { ModalContext } from "../../../context/ModalProvider.jsx"; 

function PatientTable() {
  const { data, loading, deleteItem } = useContext(AdminDataContext);
  const { openModal } = useContext(ModalContext);

  if (loading) {
    return <p>Pasiyent məlumatları yüklənir...</p>;
  }

  const patients = data?.patient || [];
  const doctorsList = data?.doctor || [];

  const getDoctorName = (doctorId) => {
    const doctor = doctorsList.find(d => d._id === doctorId || d.id === doctorId);
    return doctor ? doctor.fullName : 'Naməlum həkim';
  };

  const getLastQuizDate = (quizResults) => {
    if (!quizResults || quizResults.length === 0) return '-';
    const latest = quizResults.reduce((a, b) => (new Date(a.date) > new Date(b.date) ? a : b));
    return new Date(latest.date).toLocaleDateString('az-AZ');
  };

  const handleDelete = (id) => {
    if (window.confirm("Bu pasiyenti silmək istədiyinizə əminsiniz?")) {
      deleteItem("patient", id);
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
              <th className="table-header-cell">Son Quiz Tarixi</th>
              <th className="table-header-cell">Qeydlər</th>
              <th className="table-header-cell">Əməliyyatlar</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {patients.length === 0 ? (
              <tr>
                <td colSpan="5" className="table-cell text-center">Heç bir pasiyent tapılmadı.</td>
              </tr>
            ) : (
              patients.map((patient) => (
                <tr key={patient._id} className="table-row">
                  <td className="table-cell table-cell-bold">{patient.fullName}</td>
                  <td className="table-cell">{getDoctorName(patient.doctor)}</td>
                  <td className="table-cell">{getLastQuizDate(patient.quizResults)}</td>
                  <td className="table-cell">{patient.notes || '-'}</td>
                  <td className="table-cell">
                    <div className="action-buttons">
                      <button
                        className="action-btn action-btn-view"
                        title="Baxış"
                        onClick={() => openModal('view', 'patient', patient)}
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        className="action-btn action-btn-edit"
                        title="Redaktə"
                        onClick={() => openModal('edit', 'patient', patient)}
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        className="action-btn action-btn-delete"
                        title="Sil"
                        onClick={() => handleDelete(patient._id)}
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

export default PatientTable;