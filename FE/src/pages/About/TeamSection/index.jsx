import './style.css'

function TeamSection() {
  return (
    <section className="team-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-badge">👥 Komandamız</div>
            <h2 className="section-title">MindCare Ailəsi</h2>
            <p className="section-subtitle">
              Psixologiya, texnologiya və təhsil sahələrində təcrübəli
              mütəxəssislərdən ibarət komanda
            </p>
          </div>

          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">
                <i className="fas fa-user"></i>
              </div>
              <h3 className="team-name">Dr. Aynur Məmmədova</h3>
              <div className="team-role">Baş Psixoloq və Təsisçi</div>
              <p className="team-desc">
                15 illik təcrübə, Klinik Psixologiya üzrə PhD, platformanın elmi
                yanaşmasının əsas məmarı
              </p>
            </div>

            <div className="team-card">
              <div className="team-avatar">
                <i className="fas fa-user"></i>
              </div>
              <h3 className="team-name">Nərmin Kərimova</h3>
              <div className="team-role">Texnologiya Direktoru</div>
              <p className="team-desc">
                Platformanın texniki
                infrastrukturunun yaradıcısı
              </p>
            </div>

            <div className="team-card">
              <div className="team-avatar">
                <i className="fas fa-user"></i>
              </div>
              <h3 className="team-name">Dr. Leyla Qasımova</h3>
              <div className="team-role">Uşaq Psixoloqu</div>
              <p className="team-desc">
                Uşaq və yeniyetmə psixologiyası üzrə 10 illik təcrübə, ailə
                terapiyası mütəxəssisi
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default TeamSection