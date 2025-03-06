"use client"
import { Plus } from "lucide-react"
import haircutpng from "../../assets/img/haircut.png";
import  beardtrimpng from "../../assets/img/beardtrim.png";
import  mansShavepng from "../../assets/img/mansShave.png";
import  hairdyeingpng from "../../assets/img/hairdyeing.png";
import  mustachepng from "../../assets/img/mustache.png";
import  stackingpng from "../../assets/img/stacking.png";

export default function Services() {
  const services = [
    {
      icon: haircutpng,
      title: "Haircut",
      description: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam.",
      price: "From $15",
    },
    {
      icon: beardtrimpng,
      title: "Beard Trim",
      description: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam.",
      price: "From $15",
    },
    {
      icon: mansShavepng,
      title: "Mans Shave",
      description: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam.",
      price: "From $15",
    },
    {
      icon: hairdyeingpng,
      title: "Hair Dyeing",
      description: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam.",
      price: "From $15",
    },
    {
      icon: mustachepng,
      title: "Mustache",
      description: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam.",
      price: "From $15",
    },
    {
      icon: stackingpng,
      title: "Stacking",
      description: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam.",
      price: "From $15",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-59 font-roboto">
        <div className="text-center max-w-2xl mx-auto mb-12 wow fadeInUp" data-wow-delay="0.1s">
          <p className="inline-block bg-gray-800 text-primary py-1 px-4 mb-4">Services</p>
          <h1 className="text-4xl font-bold text-white ">What We Provide</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 font-roboto flex flex-col justify-between h-[240px] w-[450px]  overflow-hidden relative wow fadeInUp"
              data-wow-delay={`${0.1 + index * 0.2}s`}
            >
              <div className="bg-black flex-shrink-0 flex items-center justify-center w-[60px] h-[60px]">
                <img className="w-8 h-8" src={service.icon || "/placeholder.svg"} alt={service.title} />
              </div>
              <div className="p-5">
                <h3 className="text-4xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-3">{service.description}</p>
                <span className="text-primary font-semibold">{service.price}</span>
              </div>
              <a className="absolute bottom-4 right-4 w-10 h-10 bg-gray-700 flex items-center justify-center" href="#">
                <Plus className="text-primary" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

