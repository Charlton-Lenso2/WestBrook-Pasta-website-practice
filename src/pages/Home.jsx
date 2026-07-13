import "./Home.css";
import AboutRest from "./subcomponents/AboutRest";
import Hero from "./subcomponents/Hero";
import Reservation from "./subcomponents/Reservation";
import SubHero from "./subcomponents/SubHero";

function Home() {
  return (
    <>
      <div className="home">
        <Hero />
        <SubHero />
        <AboutRest />
        <Reservation/>
      </div>
    </>
  );
}

export default Home;
