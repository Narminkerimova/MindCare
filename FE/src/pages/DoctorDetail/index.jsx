import DoctorProfile from "./DoctorProfile";
import DoctorSideInfo from "./DoctorSideInfo";
import DoctorArticle from "./DoctorArticles";
import {Link} from 'react-router'
import "./style.css";

function DoctorDetail() {
  return (
    <>
    <title>MindCare: Doctor Detail</title>
      <section className="back-nav">
        <div className="back-nav-container">
          <Link to={'/doctors'}  className="back-link">
          <i className="fas fa-arrow-left"></i>
            Həkimlər siyahısına qayıt
          </Link>
        </div>
      </section>

      <section className="doctor-profile">
        <div className="doctor-profile-container">
          <div className="doctor-profile-grid">
            <DoctorProfile />
            <DoctorSideInfo />
          </div>
        </div>
      </section>
      <DoctorArticle />
    </>
  );
}

export default DoctorDetail;
