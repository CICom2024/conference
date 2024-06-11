import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import {Autoplay, Pagination} from "swiper/modules";
import logoOne from "../../assets/images/logo-lisv.jpg";
import logoTwo from "../../assets/images/lyrids.png";

const SwiperSlider = () => {
  return (
    <>
      <section className="hidden lg:block " data-aos="fade-up">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          speed={1500}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper h-[20rem]"
        >
          <SwiperSlide>
            <div className="w-[36rem] h-64 rounded-2xl bg-black bg-opacity-50 p-10 flex flex-col justify-center items-center text-center text-slate-300">
              <img
                src= "logo1"
                alt="photo"
                className="rounded-full w-20 h-20 object-cover object-center mb-2"
              />
              <h1 className="font-bold text-xl mb-2 text-opacity-80 text-slate-300">
                Key note 1
              </h1>
              <p className="text-[0.65rem] text-white text-opacity-60 mb-5">
                Topic
              </p>
              <p className="text-gray-400">
                Description
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="w-[36rem] h-64 rounded-2xl bg-black bg-opacity-50 p-10 flex flex-col justify-center items-center text-center text-slate-300">
              <img
                src= "logo1"
                alt="photo"
                className="rounded-full w-20 h-20 object-cover object-center mb-2"
              />
              <h1 className="font-bold text-xl mb-2 text-opacity-80 text-slate-300">
                Key note 2
              </h1>
              <p className="text-[0.65rem] text-white text-opacity-60 mb-5">
                Topic
              </p>
              <p className="text-gray-400">
                Description
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="w-[36rem] h-64 rounded-2xl bg-black bg-opacity-50 p-10 flex flex-col justify-center items-center text-center text-slate-300">
              <img
                src= "logo1"
                alt="photo"
                className="rounded-full w-20 h-20 object-cover object-center mb-2"
              />
              <h1 className="font-bold text-xl mb-2 text-opacity-80 text-slate-300">
                Key note 3
              </h1>
              <p className="text-[0.65rem] text-white text-opacity-60 mb-5">
                Topic
              </p>
              <p className="text-gray-400">
                Description
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="w-[36rem] h-64 rounded-2xl bg-black bg-opacity-50 p-10 flex flex-col justify-center items-center text-center text-slate-300">
              <img
                src= "logo1"
                alt="photo"
                className="rounded-full w-20 h-20 object-cover object-center mb-2"
              />
              <h1 className="font-bold text-xl mb-2 text-opacity-80 text-slate-300">
                Key note 4
              </h1>
              <p className="text-[0.65rem] text-white text-opacity-60 mb-5">
                Topic
              </p>
              <p className="text-gray-400">
                Description
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="w-[36rem] h-64 rounded-2xl bg-black bg-opacity-50 p-10 flex flex-col justify-center items-center text-center text-slate-300">
              <img
                src= "logo1"
                alt="photo"
                className="rounded-full w-20 h-20 object-cover object-center mb-2"
              />
              <h1 className="font-bold text-xl mb-2 text-opacity-80 text-slate-300">
                Key note 5
              </h1>
              <p className="text-[0.65rem] text-white text-opacity-60 mb-5">
                Topic
              </p>
              <p className="text-gray-400">
                Description
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default SwiperSlider;
