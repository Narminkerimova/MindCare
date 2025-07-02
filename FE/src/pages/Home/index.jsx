import BlogsSection from "./BlogsSection/index.jsx";
import CentersSection from "./CentersSection/index.jsx";
import DoctorsSection from "./DoctorsSection/index.jsx";
import HeroSection from "./HeroSection/index.jsx";
import ServicesSection from "./ServicesSection/index.jsx";

function Home() {
  return (
    <>
    <title>MindCare: Home</title>
      <HeroSection />
      <ServicesSection/>
      <DoctorsSection/>
      <BlogsSection/>
      <CentersSection/>
    </>
  )
}

export default Home;
