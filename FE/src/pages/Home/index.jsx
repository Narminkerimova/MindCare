import BlogsSection from "./BlogsSection/index.jsx";
import CentersSection from "./CentersSection/index.jsx";
import DoctorsSection from "./DoctorsSection/index.jsx";
import FeaturesSection from "./FeaturedSection/index.jsx";
import HeroSection from "./HeroSection/index.jsx";

function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <DoctorsSection/>
      <BlogsSection/>
      <CentersSection/>
    </>
  )
}

export default Home;
