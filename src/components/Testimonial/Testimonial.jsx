"use client"
import React, { useState, useEffect, useRef } from "react";
import testimonial1jpg from "../../assets/img/testimonial1.jpg";
import testimonial2jpg from "../../assets/img/testimonial2.jpg";
import testimonial3jpg from "../../assets/img/testimonial3.jpg";

const Testimonial = () => {
  console.log("Testimonial component is rendering..."); // Debugging Log

  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      image: testimonial1jpg,
      name: "Client Name 1",
      profession: "Designer",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: testimonial2jpg,
      name: "Client Name 2",
      profession: "Developer",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: testimonial3jpg,
      name: "Client Name 3",
      profession: "Entrepreneur",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  useEffect(() => {
    console.log("Current Slide:", currentSlide); // Debugging Log
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentSlide]);

  const goToSlide = (index) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrentSlide(index);
  };

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="inline-block bg-gray-800 text-primary py-1 px-4 mb-4">Testimonial</p>
          <h1 className="text-4xl text-white font-bold font-roboto">What Our Clients Say!</h1>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Testimonials */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4 text-center">
                  <img
                    src={testimonial.image}
                    alt={`Client ${index + 1}`}
                    className="w-24 h-24 mx-auto rounded-full mb-4"
                  />
                  <h4 className="text-xl text-white font-bold">{testimonial.name}</h4>
                  <p className="text-primary mb-2">{testimonial.profession}</p>
                  <p className="text-white text-lg">{testimonial.text}</p>
                </div>
              ))}

              
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-primary scale-125" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
