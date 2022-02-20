import Agency from "../components/Agency";
import FindLawyer from "../components/FindLawyer";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Success from "../components/Success";
import Testimonial from "../components/Testimonial";

function Home() {
  return (
    <div className="main">
      <Hero />
      <Success />
      <Agency />
      <Services />
      <Testimonial />
      <FindLawyer />
      <Footer />
    </div>
  );
}

export default Home;
