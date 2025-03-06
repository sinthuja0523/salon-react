"use client"
import React from 'react';
import aboutjpg from "../../assets/img/about.jpg";

const About = () => {
  return (
    <section className="py-16 bg-black text-white font-rooboto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="wow fadeIn" data-wow-delay="0.1s">
            <div className="flex flex-col">
              <img
                className="w-3/4 self-end"
                src={aboutjpg}
                alt="About Us"
                height="400"
                width="300"
              />
              <div className="w-1/2 bg-gray-800 p-5 -mt-[25%]">
                <h1 className="text-primary text-4xl font-bold mb-2 ">25 Years</h1>
                <h2 className="text-white text-4xl font-bold">Experience</h2>
              </div>
            </div>
          </div>

          <div className="wow fadeIn" data-wow-delay="0.5s">
            <p className="inline-block bg-gray-800 text-primary py-1 px-4 mb-4">About Us</p>
            <h1 className="text-4xl font-bold mb-6">More Than Just A Haircut. Learn More About Us!</h1>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
            </p>
            <p className="mb-6">
              Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-4xl font-bold mb-3">Since 1990</h3>
                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-3">1000+ clients</h3>
                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
