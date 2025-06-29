import './style.css'

function DoctorsHeroSection() {
  return (
        <section className="doctors-hero">
        <div className="doctors-hero-container">
            <div className="doctors-hero-content">
                <div className="doctors-hero-badge">
                    <i className="fas fa-user-md"></i>
                    Peşəkar həkimlərimiz
                </div>
                <h1 className="doctors-hero-title">Təcrübəli Psixoloqlarımızla Tanış Olun</h1>
                <p className="doctors-hero-subtitle">
                    Sertifikatlı və təcrübəli psixoloqlarımızdan keyfiyyətli məsləhət alın. 
                    Hər biri öz sahəsində ixtisaslaşmış mütəxəssislərdir.
                </p>
            </div>
        </div>
    </section>
  )
}

export default DoctorsHeroSection