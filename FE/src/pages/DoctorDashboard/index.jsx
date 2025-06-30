import DoctorDashboardSidebar from "./DDSidebar";
import DDtestResults from "./DDTestResults";
import DDQuickActions from "./DDQuickActions";
import DDRecentMessages from "./DDRecentMessages";
import DDTodaysSchedule from "./DDTodaysSchedule";
import "./style.css";

function DoctorDashboard() {
  return (
    <>
      <DoctorDashboardSidebar />
      <div className="main-content">
        <div className="dashboard-content">
          <div className="dashboard-grid">
            <DDTodaysSchedule />
            <DDRecentMessages />
            <DDQuickActions />
            <DDtestResults />
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorDashboard;
