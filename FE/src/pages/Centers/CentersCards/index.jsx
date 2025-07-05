import { useContext } from "react";
import { DataContext } from "./../../../context/DataProvider.jsx";
import { CenterFilterContext } from "../../../context/CenterFilterProvider";
import { Link } from "react-router";
import "./style.css";

function CentersCards() {
  const { data, loading } = useContext(DataContext);
  const { filters } = useContext(CenterFilterContext);

  if (loading) return <p>Yüklənir...</p>;

  const cityMap = {
    baku: "bakı",
    ganja: "gəncə",
    sumqayit: "sumqayıt",
  };

  const filteredCenters = data.center.filter((center) => {
    const searchLower = filters.search.toLowerCase();
    const fullAddress = center.fullAddress.toLowerCase();
    const centerName = center.name.toLowerCase();

    const matchSearch =
      filters.search === "" ||
      centerName.includes(searchLower) ||
      fullAddress.includes(searchLower);

    const matchCity =
      filters.city === "all" ||
      fullAddress.includes(filters.city.toLowerCase()) ||
      fullAddress.includes(cityMap[filters.city]);

    return matchSearch && matchCity;
  });

  return (
    <section className="centers-section">
      <div className="centers-container">
        <div className="centers-grid" id="centersGrid">
          {filteredCenters.map((center) => (
            <div className="center-card" key={center._id}>
              <div className="center-header">
                <div className="center-image">
                  <img src={center.photoUrl} alt="center image" />
                  <div className="center-status">
                    <i className="fas fa-circle"></i>
                    Açıq
                  </div>
                </div>
              </div>

              <div className="center-content">
                <div className="center-info">
                  <h3 className="center-name">{center.name}</h3>
                  <div className="center-location">
                    <i className="fas fa-map-marker-alt"></i>
                    {center.fullAddress}
                  </div>
                  <div className="center-contact">
                    <i className="fas fa-phone"></i>
                    {center.phoneNumber}
                  </div>
                </div>

                <div className="center-services">
                  {center.specialties?.map((s, i) => (
                    <div className="service-tag" key={i}>{s}</div>
                  ))}
                </div>

                <div className="center-stats">
                  <div className="stat-item">
                    <i className="fas fa-user-md"></i>
                    <span>{center.rating} həkim</span>
                  </div>
                  <div className="stat-item">
                    <i className="fas fa-clock"></i>
                    <span>09:00 - 21:00</span>
                  </div>
                  <div className="stat-item">
                    <i className="fas fa-star"></i>
                    <span>{center.rating} (156 rəy)</span>
                  </div>
                </div>

                <div className="center-actions">
                  <Link to={"/about"} className="btn btn-outline">
                    <i className="fas fa-info-circle"></i>
                    Xəritədə aç
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {filteredCenters.length === 0 && (
            <p style={{ textAlign: "center", width: "100%" }}>
              Uyğun nəticə tapılmadı.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default CentersCards;
