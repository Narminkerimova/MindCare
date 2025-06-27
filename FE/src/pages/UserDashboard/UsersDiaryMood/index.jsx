import './style.css'

function UsersDiaryMood() {
  return (
      <div className="dashboard-card">
              <div className="card-header">
                <h3 className="card-title">
                  <i className="fas fa-smile"></i>
                  Bu günün əhval-ruhiyyəsi
                </h3>
              </div>
              <div className="card-content">
                <div className="mood-selector">
                  <div className="mood-options">
                    <div className="mood-option" data-mood="1">
                      😫
                    </div>
                    <div className="mood-option" data-mood="2">
                      😔
                    </div>
                    <div className="mood-option active" data-mood="3">
                      😐
                    </div>
                    <div className="mood-option" data-mood="4">
                      🙂
                    </div>
                    <div className="mood-option" data-mood="5">
                      😊
                    </div>
                  </div>
                  <div className="mood-note">
                    <textarea placeholder="Bu gün necə hiss etdiyinizi qeyd edin..."></textarea>
                    <button className="btn btn-sm btn-primary">
                      <i className="fas fa-save"></i>
                      Saxla
                    </button>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default UsersDiaryMood