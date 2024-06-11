import {Helmet} from "react-helmet-async";
import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Services from "../../components/Services/Services";
import Footer from "./../../components/Footer/Footer";
import Testimonial from "../../components/Testimonial/Testimonial";
import FaqSection from "./../../components/FAQ/FaqSection";

const Home = () => {
  return (
    <>
      <Helmet>
        <link rel="shortcut icon" href="/icon/home.svg" type="image/x-icon" />
        <title>CICom 2024</title>
      </Helmet>
      <Banner />
      <About />
      <Testimonial />
      <FaqSection />
      <Footer />
    </>
  );
};

export default Home;
