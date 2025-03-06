"use client"
import React, { useState, useEffect } from 'react'
import carousejpg from "../../assets/img/carousel.jpg";
import carouse2jpg from "../../assets/img/carousel2.jpg";
import { MapPin, Phone } from "lucide-react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: carousejpg,
      title: "WE WILL KEEP YOU AN AWESOME LOOK",
      address: "123 STREET, NEW YORK, USA",
      phone: "+012 345 67890",
    },
    {
      image: carouse2jpg,
      title: "LUXURY HAIRCUT AT AFFORDABLE PRICE",
      address: "123 STREET, NEW YORK, USA",
      phone: "+012 345 67890",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[90vh] md:h-[85vh]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          <img
            src={slide.image || "/placeholder.svg"}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20">
            <div className="container mx-auto h-full px-4 md:px-12">
              <div className="flex flex-col justify-center h-full max-w-4xl">
                <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-wide">
                  {slide.title}
                </h1>
                <div className="space-y-4">
                  <div className="flex items-center text-white">
                    <MapPin className="text-red-600 w-6 sm:w-8 h-6 sm:h-8 mr-4" />
                    <h4 className="text-lg sm:text-xl md:text-2xl tracking-wide">
                      {slide.address}
                    </h4>
                  </div>
                  <div className="flex items-center text-white">
                    <Phone className="text-red-600 w-6 sm:w-8 h-6 sm:h-8 mr-4" />
                    <h4 className="text-lg sm:text-xl md:text-2xl tracking-wide">
                      {slide.phone}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* Navigation arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 p-4 hover:bg-black/50 transition-colors"
        onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
      >
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 p-4 hover:bg-black/50 transition-colors"
        onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
      >
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
