import React, { useState } from 'react'; 
import "./style.css"; 

function DoctorSideInfo({ doctor }) {
    const [showModal, setShowModal] = useState(false);
    const [appointmentDate, setAppointmentDate] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleOpenModal = () => {
        setShowModal(true); 
        const now = new Date();
        const tomorrow = new Date(now); 
        tomorrow.setDate(now.getDate() + 1);
        
        setAppointmentDate(tomorrow.toISOString().split('T')[0]); 
        setAppointmentTime('09:00'); 
    };

    const handleCloseModal = () => {
        setShowModal(false); 
        setAppointmentDate('');
        setAppointmentTime('');
        setError(null); 
        setSuccess(null);
    };

    const handleBookAppointment = async () => {
        if (!appointmentDate || !appointmentTime) {
            setError('Zəhmət olmasa tarix və vaxt seçin.');
            return; 
        }

        setLoading(true);
        setError(null); 
        setSuccess(null);

        try {
            const startTimeString = `${appointmentDate}T${appointmentTime}:00`;
            const startDateTime = new Date(startTimeString);
            const endTimeDate = new Date(startDateTime.getTime() + 45 * 60 * 1000);
            const year = endTimeDate.getFullYear();
            const month = (endTimeDate.getMonth() + 1).toString().padStart(2, '0');
            const day = endTimeDate.getDate().toString().padStart(2, '0');
            const hours = endTimeDate.getHours().toString().padStart(2, '0');
            const minutes = endTimeDate.getMinutes().toString().padStart(2, '0');
            const seconds = endTimeDate.getSeconds().toString().padStart(2, '0');

            const endTimeString = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;

            const eventData = {
                summary: `Randevu: Dr. ${doctor.fullName || doctor.name + ' ' + doctor.surname} ilə`, 
                description: `Online konsultasiya. Qiymət: ${doctor.appointmentPrice} ₼.\nƏlaqə: ${doctor.phone}`,
                startTime: startTimeString,
                endTime: endTimeString,    
                location: 'Online konsultasiya',
            };

            console.log("Frontend (DoctorSideInfo): eventData to be sent to backend:", eventData);
            const response = await fetch('http://localhost:5000/api/calendar/events', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify(eventData), 
                credentials: 'include'
            });

            if (!response.ok) { 
                const errorBody = await response.json().catch(() => ({ message: response.statusText })); 
                throw new Error(errorBody.error || errorBody.message || 'Randevu yaratarkən naməlum xəta baş verdi.');
            }

            const data = await response.json();
            setSuccess('Randevu uğurla yaradıldı!'); 
            console.log('Randevu məlumatı:', data);
            
            setTimeout(() => {
                handleCloseModal(); 
            }, 2000);
            
        } catch (err) {
            console.error('Randevu yaratma xətası:', err.message);
            setError(err.message || 'Randevu yaratarkən xəta baş verdi.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="doctor-profile-sidebar">
            <div className="booking-card">
                <div className="booking-header">
                    <h3>Randevu al</h3>
                    <div className="price">
                        <span className="price-amount">{doctor.appointmentPrice} ₼</span>
                        <span className="price-period">/ seans</span>
                    </div>
                </div>
                <div className="booking-body">
                    <div className="booking-info">
                        <div className="info-item">
                            <i className="fas fa-clock"></i>
                            <span>45 dəqiqə</span>
                        </div>
                        <div className="info-item">
                            <i className="fas fa-video"></i>
                            <span>Online konsultasiya</span>
                        </div>
                    </div>
                    <button
                        className="btn btn-primary btn-full"
                        onClick={handleOpenModal}
                    >
                        <i className="fas fa-calendar-plus"></i>
                        Randevu al
                    </button>
                </div>
            </div>

            <div className="contact-card">
                <h3>Əlaqə</h3>
                <div className="contact-methods">
                    <div className="contact-method">
                        <i className="fas fa-phone"></i>
                        <span>{doctor.phone}</span>
                    </div>
                </div>
            </div>

            <div className="stats-card">
                <h3>Statistika</h3>
                <div className="stats-grid">
                    <div className="stat-item">
                        <div className="stat-number">{doctor.experienceYears}</div>
                        <div className="stat-label">İl təcrübə</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">{doctor.clientCount}+</div>
                        <div className="stat-label">Müştəri</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">{doctor.rating * 20}%</div>
                        <div className="stat-label">Məmnunluq</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">24/7</div>
                        <div className="stat-label">Dəstək</div>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2 style={{ marginBottom: '20px' }}>Randevu Tarixi və Vaxtı Seçin</h2>
                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label htmlFor="appointmentDate" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Tarix:</label>
                            <input
                                type="date"
                                id="appointmentDate"
                                value={appointmentDate}
                                onChange={(e) => setAppointmentDate(e.target.value)}
                                min={new Date().toISOString().split('T')[0]} 
                                style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                            />
                        </div>
                        <div className="form-group" style={{ marginBottom: '20px' }}>
                            <label htmlFor="appointmentTime" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Vaxt:</label>
                            <input
                                type="time"
                                id="appointmentTime"
                                value={appointmentTime}
                                onChange={(e) => setAppointmentTime(e.target.value)}
                                style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                            />
                        </div>
                        {error && <p className="error-message" style={{ color: 'red', marginBottom: '15px' }}>{error}</p>}
                        {success && <p className="success-message" style={{ color: 'green', marginBottom: '15px' }}>{success}</p>}
                        
                        <div className="modal-actions" style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                            <button
                                className="btn btn-primary"
                                onClick={handleBookAppointment}
                                disabled={loading} 
                                style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', backgroundColor: '#007bff', color: 'white' }}
                            >
                                {loading ? 'Yaradılır...' : 'Randevunu Təsdiqlə'}
                            </button>
                            <button
                                className="btn btn-secondary"
                                onClick={handleCloseModal}
                                disabled={loading}
                                style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', backgroundColor: '#6c757d', color: 'white' }}
                            >
                                Ləğv et
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DoctorSideInfo;
