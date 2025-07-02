import { Eye, Edit2, Trash2 } from "lucide-react";

function QuizTable({ quizler }) {
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
              <th className="table-header-cell">Status</th>
              <th className="table-header-cell">Əməliyyatlar</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {quizler.map((quiz) => (
              <tr key={quiz.id} className="table-row">
                <td className="table-cell table-cell-bold">{quiz.ad}</td>
                <td className="table-cell">{quiz.pasiyent}</td>
                <td className="table-cell">{quiz.netice}</td>
                <td className="table-cell">{quiz.tarix}</td>
                <td className="table-cell">
                  <span
                    className={`status-badge ${
                      quiz.status === "Yüksək"
                        ? "status-high"
                        : quiz.status === "Orta"
                        ? "status-medium"
                        : "status-low"
                    }`}
                  >
                    {quiz.status}
                  </span>
                </td>
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

export default QuizTable;
