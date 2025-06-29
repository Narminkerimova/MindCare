import DoctorsCardsSection from "./DoctorsCardsSection";
import DoctorsFilterSection from "./DoctorsFilterSection";
import DoctorsHeroSection from "./DoctorsHeroSection";
import "./style.css";

function Doctors() {
  return (
    <>
      <DoctorsHeroSection />
      <DoctorsFilterSection />
      <DoctorsCardsSection />
    </>
  );
}

export default Doctors;
