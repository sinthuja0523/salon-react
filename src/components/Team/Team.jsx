import React from 'react'
import { Facebook, Twitter, Instagram } from "lucide-react"
import  team1jpg from "../../assets/img/team1.jpg";
import  team2jpg from "../../assets/img/team2.jpg";
import  team3jpg from "../../assets/img/team3.jpg";
import  team4jpg from "../../assets/img/team4.jpg";

const Team = () => {
    const team = [
        {
          image: team1jpg,
          name: "Barber Name",
          designation: "Designation",
        },
        {
          image: team2jpg,
          name: "Barber Name",
          designation: "Designation",
        },
        {
          image: team3jpg,
          name: "Barber Name",
          designation: "Designation",
        },
        {
          image: team4jpg,
          name: "Barber Name",
          designation: "Designation",
        },
      ]
    
  return (
    
    
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12 wow fadeInUp" data-wow-delay="0.1s">
              <p className="inline-block bg-gray-800 text-primary py-1 px-4 mb-4">Our Barber</p>
              <h1 className="text-3xl font-bold">Meet Our Barber</h1>
            </div>
    
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <div key={index} className="wow fadeInUp" data-wow-delay={`${0.1 + index * 0.2}s`}>
                  <div className="relative overflow-hidden group">
                    <img className="w-full" src={member.image || "/placeholder.svg"} alt={member.name} />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-2">
                        <a
                          href="#"
                          className="w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                        >
                          <Facebook className="text-white w-5 h-5" />
                        </a>
                        <a
                          href="#"
                          className="w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                        >
                          <Twitter className="text-white w-5 h-5" />
                        </a>
                        <a
                          href="#"
                          className="w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                        >
                          <Instagram className="text-white w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-800 text-center p-4">
                    <h5 className="text-white font-bold">{member.name}</h5>
                    <span className="text-primary">{member.designation}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </section>
      )
    }
    
    

export default Team