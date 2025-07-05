import { Eye, Edit2, Trash2 } from "lucide-react";
import { useContext } from "react";
import { AdminDataContext } from "../../../context/AdminProvider.jsx";

function DoctorTable() {
  const { data, loading, deleteItem } = useContext(AdminDataContext);

  if (loading) return <p>Yüklənir...</p>;

  const handleDelete = (id) => {
    if (window.confirm("Bu həkimi silmək istədiyinizə əminsiniz?")) {
      deleteItem("doctor", id);
    }
  };

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
            {data.doctor.map((doctor) => (
              <tr key={doctor.id} className="table-row">
                <td className="table-cell table-cell-bold">{doctor.fullName}</td>
                <td className="table-cell">{doctor.position}</td>
                <td className="table-cell">{doctor.phone}</td>
                <td className="table-cell">@mindcare.az</td>
                <td className="table-cell">
                  <div className="action-buttons">
                    <button
                      className="action-btn action-btn-view"
                      title="Baxış"
                    >
                      <Eye size={16} />
                    </button>
                    <button
                      className="action-btn action-btn-edit"
                      title="Redaktə"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      className="action-btn action-btn-delete"
                      title="Sil"
                      onClick={() => handleDelete(doctor.id)}
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

export default DoctorTable;
