import { Eye, Edit2, Trash2 } from 'lucide-react';
import { useContext } from 'react';
import { AdminDataContext } from '../../../context/AdminProvider.jsx';
import { ModalContext } from '../../../context/ModalProvider.jsx';
import DoctorFormModal from './DoctorFormModal'; 

function DoctorTable() {
  const { data, loading, deleteItem } = useContext(AdminDataContext);
  const { openModal, isOpen, modalType, currentItem, currentTable, closeModal } = useContext(ModalContext);

  if (loading) return <p>Həkim məlumatları yüklənir...</p>;

  const doctors = data?.doctor || [];

  if (!doctors || !Array.isArray(doctors)) {
    console.error("Doctor məlumatları düzgün formatda deyil:", doctors);
    return <p>Həkim məlumatları tapılmadı və ya yüklənmə zamanı problem yaşandı.</p>;
  }

  const handleDelete = (id) => {
    if (window.confirm("Bu həkimi silmək istədiyinizə əminsiniz?")) {
      deleteItem("doctor", id);
    }
  };

  return (
    <>
      {currentTable === 'doctor' && (
        <DoctorFormModal
          isOpen={isOpen}
          modalType={modalType}
          initialData={currentItem}
          onClose={closeModal}
        />
      )}

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
              {doctors.length === 0 ? (
                <tr>
                  <td colSpan="5" className="table-cell text-center">Heç bir həkim tapılmadı.</td>
                </tr>
              ) : (
                doctors.map((doctor) => (
                  <tr key={doctor._id} className="table-row">
                    <td className="table-cell table-cell-bold">{doctor.fullName}</td>
                    <td className="table-cell">{doctor.position}</td>
                    <td className="table-cell">{doctor.phone || 'N/A'}</td>
                    <td className="table-cell">{doctor.email || '@mindcare.az'}</td>
                    <td className="table-cell">
                      <div className="action-buttons">
                        <button
                          className="action-btn action-btn-view"
                          title="Baxış"
                          onClick={() => openModal('view', 'doctor', doctor)}
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          className="action-btn action-btn-edit"
                          title="Redaktə"
                          onClick={() => openModal('edit', 'doctor', doctor)}
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          className="action-btn action-btn-delete"
                          title="Sil"
                          onClick={() => handleDelete(doctor._id)}
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
    </>
  );
}

export default DoctorTable;
