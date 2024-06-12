import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import {Autoplay, Pagination} from "swiper/modules";
import bannerOne from "../../assets/images/bannerOne.jpg";
import bannerTwo from "../../assets/images/bannerTwo.jpg";
import bannerThree from "../../assets/images/bannerThree.jpg";
import bannerFour from "../../assets/images/bannerFour.jpg";
import bannerFive from "../../assets/images/bannerFive.jpg";
import bannerSix from "../../assets/images/bannerSix.jpg";
import Navbar from "./../Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Banner = () => {
  return (
    <header className="relative">
      <Navbar />
      <Swiper
        centeredSlides={true}
        speed={500}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url(${bannerOne})`,
            }}
          >
            <div className="hero-overlay bg-black bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="flex flex-col justify-center items-center text-white">
                <h1
                  className="mb-5 text-3xl  md:text-5xl lg:text-7xl font-bold"
                  data-aos="fade-down"
                >
                  4th International Conference on Computational Intelligence and Communications
                </h1>
                <p
                  className="font-bold text-white text-opacity-70  md:text-lg  w-80 md:w-[120rem] lg:w-[35rem] mb-5"
                  data-aos="fade-up"
                >
                  December 26-27, 2024 @ Paris, France
                </p>
                <a
                href="/Call.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn rounded-3xl px-5 md:px-8 lg:px-10 bg-transparent border border-blue-500 text-white min-h-0 h-9 lg:h-10 hover:bg-blue-500 hover:text-white hover:border-blue-500 normal-case font-bold text-xl"
                data-aos="fade-up"
                      >
                Call for Papers
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url(${bannerTwo})`,
            }}
          >
            <div className="hero-overlay bg-black bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="flex flex-col justify-center items-center text-white">
                <h1 className="mb-5 text-3xl  md:text-5xl lg:text-7xl font-bold">
                  CICom 2024
                </h1>
                <p className="font-bold text-white text-opacity-70  md:text-lg  w-80 md:w-[50rem] lg:w-[45rem] mb-5">
                <h1 className="font-bold uppercase text-xl md:text-2xl text-blue-500 mb-5 border-b-2 border-b-blue-500 " data-aos="fade-up">
        Important Dates
      </h1>

      <ul className="font-bold max-w-md space-y-1 text-white list-inside dark:text-white">
      <li className="flex items-center">
          <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
          Paper submission : 1st September, 2024
        </li>
        <li className="flex items-center">
          <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
          Notification deadline : 15th October, 2024
        </li>
        <li className="flex items-center">
          <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
          Camera-ready deadline : 15th November, 2024
        </li>
        <li className="flex items-center">
          <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
          Conference dates : 26-27th December, 2024
        </li>
      </ul>
                </p>
                <a
                    href="https://cmt3.research.microsoft.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn rounded-3xl px-5 md:px-8 lg:px-10 bg-transparent border border-white text-white min-h-0 h-10 lg:h-12 hover:bg-white hover:text-black hover:border-white normal-case font-bold text-xl"
                    data-aos="fade-up"
                  >
                    Submit Paper
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url(${bannerThree})`,
            }}
          >
            <div className="hero-overlay bg-black bg-opacity-60"></div>
<div className="hero-content text-center text-neutral-content">
  <div className="flex flex-col justify-center items-center text-white">
    <h1 className="mb-5 text-3xl md:text-5xl lg:text-7xl font-bold">
      26-27th December, 2024
    </h1>
    <div className="text-white text-opacity-70 md:text-lg w-80 md:w-[50rem] lg:w-[45rem] mb-5">
      <h1 className="font-bold uppercase text-xl md:text-2xl text-blue-500 mb-5 border-b-2 border-b-blue-500" data-aos="fade-up">
        Tracks
      </h1>
      <ul className="font-bold space-y-1 text-white list-inside dark:text-white">
        <li className="flex items-center">
          <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
          Computational Intelligence in Automation, Control, and Intelligent Transportation System
        </li>
        <li className="flex items-center">
          <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
          Computational Intelligence on Big Data, Internet of Things, and Smart Cities
        </li>
        <li className="flex items-center">
          <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
          Computational Intelligence on Wireless Communication Systems and Cyber Security
        </li>
        <li className="flex items-center">
          <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
          Computational Intelligence on Human/Brain-Computer Interfaces, and Image and Pattern Recognition
        </li>
      </ul>
    </div>
 

                <button className="btn rounded-3xl px-5 md:px-8 lg:px-10 bg-transparent border border-white text-white min-h-0 h-10 lg:h-12 hover:bg-white hover:text-black hover:border-white normal-case font-bold text-xl">
                  Registration Opens Soon
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url(${bannerFour})`,
            }}
          >
            <div className="hero-overlay bg-black bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="flex flex-col justify-center items-center text-white">
                <h1 className="mb-5 text-3xl  md:text-5xl lg:text-7xl font-bold">
                  Organised by
                </h1>
                <p className="font-bold text-white text-opacity-70  md:text-lg  w-80 md:w-[30rem] lg:w-[35rem] mb-5">
                  LYRIDS Laboratory, ECE École d'Ingénieurs, Paris
                </p>
                <p className="font-bold text-white text-opacity-70  md:text-lg  w-80 md:w-[30rem] lg:w-[35rem] mb-5">
                  LISV Laboratory, Université Paris-Saclay
                </p>
                <p className="font-bold text-white text-opacity-70  md:text-lg  w-80 md:w-[30rem] lg:w-[35rem] mb-5">
                  LISN Laboratory, M'Hamed BOUGARA University of Boumerdès
                </p>
                <button className="btn rounded-3xl px-5 md:px-8 lg:px-10 bg-transparent border border-white text-white min-h-0 h-10 lg:h-12 hover:bg-white hover:text-black hover:border-white normal-case font-bold text-xl">
                  Registration Opens Soon
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </header>
  );
};

export default Banner;
