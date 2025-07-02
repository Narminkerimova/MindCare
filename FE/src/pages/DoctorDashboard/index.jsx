import DoctorDashboardSidebar from "./DDSidebar";
import DDHeader from "./DDHeader";
import DDtestResults from "./DDTestResults";
import DDQuickActions from "./DDQuickActions";
import DDRecentMessages from "./DDRecentMessages";
import DDTodaysSchedule from "./DDTodaysSchedule";
import "./style.css";

function DoctorDashboard() {
  return (
    <>

    <title>Mindcare: Doctor Dashboard</title>
      <DoctorDashboardSidebar />
      <div className="main-content">
        <DDHeader />
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
