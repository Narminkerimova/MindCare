import DoctorsCardsSection from "./DoctorsCardsSection";
import DoctorsFilterSection from "./DoctorsFilterSection";
import DoctorsHeroSection from "./DoctorsHeroSection";
import "./style.css";

function Doctors() {
  return (
    <>
    <title>MindCare: Doctors</title>
      <DoctorsHeroSection />
      <DoctorsFilterSection />
      <DoctorsCardsSection />
    </>
  );
}

export default Doctors;
