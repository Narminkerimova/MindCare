import { Eye, Edit2, Trash2 } from "lucide-react";
import { useContext } from "react";
import { AdminDataContext } from "../../../context/AdminProvider.jsx";
import { ModalContext } from "../../../context/ModalProvider.jsx";

function QuizTable() {
  const { data, deleteItem } = useContext(AdminDataContext);
  const { openModal } = useContext(ModalContext);

  const quizzes = data?.quiz || [];

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return date.toLocaleDateString("az-AZ");
  };

  const handleDelete = async (id) => {
    if (window.confirm("Bu quiz testini silmək istədiyinizə əminsiniz?")) {
      deleteItem("quiz", id);
    }
  };

  return (
    <div className="table-container">
      <div className="table-wrapper">
        <table className="data-table">
          <thead className="table-head">
            <tr>
              <th className="table-header-cell">Quiz Adı</th>
              <th className="table-header-cell">Kateqoriya</th>
              <th className="table-header-cell">Sual Sayı</th>
              <th className="table-header-cell">Vaxt (dəq)</th>
              <th className="table-header-cell">Yaradılma Tarixi</th>
              <th className="table-header-cell">Əməliyyatlar</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {quizzes.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ textAlign: "center" }}>
                  Heç bir quiz tapılmadı.
                </td>
              </tr>
            ) : (
              quizzes.map((quiz) => (
                <tr key={quiz._id} className="table-row">
                  <td className="table-cell table-cell-bold">{quiz.title}</td>
                  <td className="table-cell">{quiz.category}</td>
                  <td className="table-cell">{quiz.questionCount}</td>
                  <td className="table-cell">{quiz.timeLimit / 60}</td>
                  <td className="table-cell">{formatDate(quiz.createdAt)}</td>
                  <td className="table-cell">
                    <div className="action-buttons">
                      <button
                        className="action-btn action-btn-view"
                        title="Baxış"
                        onClick={() => openModal("view", "quiz", quiz)}
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        className="action-btn action-btn-edit"
                        title="Redaktə"
                        onClick={() => openModal("edit", "quiz", quiz)}
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        className="action-btn action-btn-delete"
                        title="Sil"
                        onClick={() => handleDelete(quiz._id)}
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

export default QuizTable;
