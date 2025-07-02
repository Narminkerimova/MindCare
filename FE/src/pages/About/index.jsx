import AboutHero from "./AboutHero";
import AboutMission from "./AboutMission";
import AboutPlatform from "./AboutPlatform";
import StatsSection from "./StatsSection";
import TeamSection from "./TeamSection";
import ValueAbout from "./ValueAbout";
import AboutCTA from "./AboutCTA";
import "./style.css";

function About() {
  return (
    <>
      <title>MindCare: About</title>
      <div className="about-page">
        <AboutHero />
        <AboutMission />
        <AboutPlatform />
        <StatsSection />
        <TeamSection />
        <ValueAbout />
        <AboutCTA />
      </div>
    </>
  );
}

export default About;
