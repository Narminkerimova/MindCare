import { useContext } from "react";
import { Link } from 'react-router'; 
import Psyc from "./../../../assets/freud.jpg";
import { DataContext } from "../../../context/DataProvider";
import { DoctorFilterContext } from "../../../context/DoctorFilterProvider";
import LoadingSpinner from './../../../components/LoadingSpinner.jsx'
import "./style.css";

function DoctorsCardsSection() {
    const dataContextValue = useContext(DataContext);
    const { filter } = useContext(DoctorFilterContext);

    if (!dataContextValue) {
        return <p>Məlumat yüklənərkən xəta baş verdi və ya kontekst təmin edilmədi.</p>;
    }

    const { data, loading } = dataContextValue;

    
    if (loading) {
        return <LoadingSpinner/>;
    }

    if (!data.doctor || !Array.isArray(data.doctor) || data.doctor.length === 0) {
        return <p>Həkim tapılmadı.</p>;
    }

    const filteredDoctors = data.doctor.filter((doctor) => {
        const matchSpecialty = filter.specialty ? doctor.specialty === filter.specialty : true;
        const matchExperience = filter.experience
            ? (filter.experience === "1-5" && doctor.experienceYears >= 1 && doctor.experienceYears <= 5) ||
              (filter.experience === "5-10" && doctor.experienceYears > 5 && doctor.experienceYears <= 10) ||
              (filter.experience === "10+" && doctor.experienceYears > 10)
            : true;
        const matchRating = filter.rating
            ? parseFloat(doctor.rating) >= parseFloat(filter.rating)
            : true;

        return matchSpecialty && matchExperience && matchRating;
    });

    return (
        <section className="doctors">
            <div className="doctors-container">
                <div className="doctors-grid">
                    {filteredDoctors.length > 0 ? (
                        filteredDoctors.map((doctor) => (
                            <div className="doctor-card" key={doctor._id}>
                                <div className="doctor-card-body">
                                    <div className="doctor-avatar">
                                        <img src={doctor.photoUrl || Psyc} alt={doctor.fullName} />
                                    </div>
                                    <div className="doctor-info">
                                        <h3 className="doctor-name">Dr. {doctor.fullName}</h3>
                                        <div className="doctor-specialty">{doctor.specialty}</div>
                                        <div className="doctor-experience">
                                            {doctor.experienceYears} il təcrübə
                                        </div>
                                        <div className="doctor-rating">
                                            <div className="stars">
                                                {[...Array(5)].map((_, i) => (
                                                    <i
                                                        key={i}
                                                        className={
                                                            i < Math.round(doctor.rating)
                                                                ? "fas fa-star"
                                                                : "far fa-star"
                                                        }
                                                    ></i>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="doctor-card-footer">
                                    <div className="doctor-actions">
                                        <Link to={`/doctordetail/${doctor._id}`} className="btn btn-outline btn-small">
                                            <i className="fas fa-eye"></i>
                                            Profil
                                        </Link>
                                        <Link to={`/doctordetail/${doctor._id}`} className="btn btn-primary btn-small">
                                            <i className="fas fa-calendar-plus"></i>
                                            Randevu
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Filtrə uyğun həkim tapılmadı.</p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default DoctorsCardsSection;