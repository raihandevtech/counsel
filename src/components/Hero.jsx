import Header from "./Header";
import HeroSlider from "./HeroSlider";

function Hero() {
  return (
    <div className="hero">
      <div className="container hero_bg">
        <Header />
        <HeroSlider />
      </div>
    </div>
  );
}

export default Hero;
