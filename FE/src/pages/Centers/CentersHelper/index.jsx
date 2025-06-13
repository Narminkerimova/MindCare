import {Link} from "react-router"
import './style.css'

function CentersHelper() {
  return (
     <section className="cta-section">
        <div className="cta-container">
            <div className="cta-content">
                <h2 className="cta-title">Sizə Ən Uyğun Mərkəzi Tapmadınız?</h2>
                <p className="cta-subtitle">
                    Online xidmətlərimizdən yararlanın və ya bizə müraciət edin. 
                    Tezliklə yeni mərkəzlər açılacaq!
                </p>
                <div className="cta-buttons">
                  <Link to={'/about'} className="btn btn-primary">
                  <i className="fas fa-video"></i>
                        Online Randevu
                  </Link>
                    <Link to={'/about'} className="btn btn-white">
                   <i className="fas fa-phone"></i>
                        Bizimlə Əlaqə
                  </Link>
                </div>
            </div>
        </div>
    </section>

  )
}

export default CentersHelper