import React from "react";
import { Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import { experiences } from "../data/experiences.js";

// 1. Import Swiper React components and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// 2. Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

function Experiences() {
  // No useEffect needed! Swiper's React components handle initialization and cleanup.

  return (
    <section id="experience" className="px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center animate-fade-in-up text-gray-800 dark:text-gray-200">
          Work Experience
        </h2>

        {/* 3. Use the Swiper component and pass configuration as props */}
        <div className="relative">
          <Swiper
            // Register the modules you are using
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2500, // A delay of 400ms is very fast, 2500ms is more standard
              disableOnInteraction: false,
            }}
            // Connect your custom navigation buttons
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            className="mySwiper" // Optional: for custom styling if needed
          >
            {experiences.map((exp, index) => (
              // 4. Use the SwiperSlide component for each item
              <SwiperSlide key={index}>
                <div className="bg-[#222] dark:bg-[#fefefe] p-6 rounded-lg shadow-lg h-full">
                  {" "}
                  {/* Added h-full for consistent height */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="font-bold text-lg dark:text-black text-white">
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-sm dark:text-[#333] text-[#fefefe]">
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-sm mb-4  dark:text-[#333] text-[#fefefe]">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="space-y-2  dark:text-[#333] text-[#fefefe]">
                    {exp.responsibilities.map((resp, idx) => (
                      <p key={idx}>• {resp}</p>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* 5. Your custom navigation buttons now just need the correct classNames */}
          <div className="swiper-button-prev-custom absolute top-1/2 left-[-10%] transform -translate-y-1/2 z-10 cursor-pointer h-[50px] w-[50px] rounded-[50%] bg-[#222] text-white dark:bg-white dark:text-black flex items-center justify-center group">
            <ArrowLeft className="w-8 h-8 group-hover:translate-x-[-5px] duration-300" />
          </div>
          <div className="swiper-button-next-custom absolute top-1/2 right-[-10%] transform -translate-y-1/2 z-10 cursor-pointer h-[50px] w-[50px] rounded-[50%]  bg-[#222] text-white dark:bg-white dark:text-black flex items-center justify-center group">
            <ArrowRight className="w-8 h-8 group-hover:translate-x-[5px] duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
