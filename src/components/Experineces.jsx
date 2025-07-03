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
                <div className="dark:bg-[#222]/50 bg-gray-200  text-black dark:text-[#efefef] backdrop-blur-2xl p-6 rounded-[20px] shadow-lg 
                max-[400px]:h-[400px]
                border-t-[5px] border-transparent transition-colors duration-300 dark:hover:border-gray-200 hover:border-gray-800">
                  {" "}
                  {/* Added h-full for consistent height */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="font-bold text-lg">
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-sm">
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-sm mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <p key={idx}>• {resp}</p>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

       
        </div>
      </div>
    </section>
  );
}

export default Experiences;
