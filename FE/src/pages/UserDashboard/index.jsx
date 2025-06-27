import "./style.css";
import TestResultsUser from "./TestResultsUser";
import UserHeader from "./UserHeader";
import UsersAppointments from "./UsersAppointments";
import UsersDoctor from "./UsersDoctor";
import WelcomeUser from "./WelcomeUser";
import UsersRecommendations from "./UsersRecommendations";
import UserSidebar from './UserSidebar'
import QuickOperationsUser from "./QuickOperationsUser";
import UsersDiaryMood from "./UsersDiaryMood";

function UserDashboard() {
  return (
    <>
      <UserHeader />

      <div className="dashboard-container">
        <UserSidebar/>
        <main className="main-content">
          <WelcomeUser />

          <div className="dashboard-grid">
            <TestResultsUser />
            <UsersDoctor />
            <UsersAppointments />
            <UsersRecommendations />
            <QuickOperationsUser />
            <UsersDiaryMood/>
          </div>
        </main>
      </div>
    </>
  );
}

export default UserDashboard;
