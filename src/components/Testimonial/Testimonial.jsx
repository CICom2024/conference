// import PropTypes from "prop-types";

import SwiperSlider from "../SwiperSlider/SwiperSlider";

const Testimonial = () => {
  return (
    <section className="bg-[#181A1B]  p-5 md:p-10 lg:p-20">
      <p className="font-semibold text-xl  md:text-3xl lg:text-5xl text-slate-300 mb-5 " data-aos="fade-up">
        Keynotes (Coming Soon!!)
      </p>
      <SwiperSlider />
    </section>
  );
};

Testimonial.propTypes = {};

export default Testimonial;
