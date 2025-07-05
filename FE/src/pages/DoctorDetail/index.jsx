import { useContext } from "react";
import { useParams, Link } from "react-router";
import { DataContext } from "../../context/DataProvider";
import DoctorProfile from "./DoctorProfile";
import DoctorSideInfo from "./DoctorSideInfo";
import DoctorArticle from "./DoctorArticles";
import "./style.css";

function DoctorDetail() {
  const { id } = useParams();
  const { data, loading } = useContext(DataContext);
  const doctor = data?.doctor?.find((doc) => doc._id === id);

  if (loading) return <p>Yüklənir...</p>;
  if (!doctor) return <p>Həkim tapılmadı</p>;

  return (
    <>
      <title>MindCare: Doctor Detail</title>

      <section className="back-nav">
        <div className="back-nav-container">
          <Link to={"/doctors"} className="back-link">
            <i className="fas fa-arrow-left"></i> Həkimlər siyahısına qayıt
          </Link>
        </div>
      </section>

      <section className="doctor-profile">
        <div className="doctor-profile-container">
          <div className="doctor-profile-grid">
            <DoctorProfile doctor={doctor} />
            <DoctorSideInfo doctor={doctor} />
          </div>
        </div>
      </section>

      <DoctorArticle doctor={doctor} />
    </>
  );
}

export default DoctorDetail;
