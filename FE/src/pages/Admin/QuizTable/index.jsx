import { Eye, Edit2, Trash2 } from "lucide-react";
import { useContext } from "react";
import { AdminDataContext } from "../../../context/AdminProvider.jsx";

function QuizTable() {
  const { data, loading, updateItem } = useContext(AdminDataContext);

  if (loading) return <p>Yüklənir...</p>;

  const allQuizzes = (data.patient ?? []).flatMap((patient) =>
    (patient.quizResults ?? []).map((quiz) => ({
      ...quiz,
      patientId: patient._id,
      patientName: patient.fullName,
    }))
  );

  const handleDelete = async (patientId, quizDate, quizName) => {
    if (window.confirm(`"${quizName}" testini silmək istədiyinizə əminsiniz?`)) {
      const patient = data.patient.find((p) => p._id === patientId);
      if (!patient) return;

      const updatedQuizResults = patient.quizResults.filter(
        (q) => !(q.quizName === quizName && q.date === quizDate)
      );

      const updatedPatient = { ...patient, quizResults: updatedQuizResults };

      await updateItem("patient", patientId, updatedPatient);
    }
  };

  return (
    <div className="table-container">
      <div className="table-wrapper">
        <table className="data-table">
          <thead className="table-head">
            <tr>
              <th className="table-header-cell">Quiz Adı</th>
              <th className="table-header-cell">Pasiyent</th>
              <th className="table-header-cell">Nəticə</th>
              <th className="table-header-cell">Tarix</th>
              <th className="table-header-cell">Əməliyyatlar</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {allQuizzes.length === 0 && (
              <tr>
                <td colSpan={5} style={{ textAlign: "center" }}>
                  Heç bir quiz nəticəsi tapılmadı.
                </td>
              </tr>
            )}
            {allQuizzes.map(({ quizName, score, date, patientId, patientName }) => {
              const formattedDate = date
                ? new Date(date).toLocaleDateString("az-AZ")
                : "N/A";

              return (
                <tr key={`${patientId}-${quizName}-${date.toString()}`} className="table-row">
                  <td className="table-cell table-cell-bold">{quizName}</td>
                  <td className="table-cell">{patientName}</td>
                  <td className="table-cell">{score}</td>
                  <td className="table-cell">{formattedDate}</td>
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
                        onClick={() => handleDelete(patientId, date, quizName)}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default QuizTable;
