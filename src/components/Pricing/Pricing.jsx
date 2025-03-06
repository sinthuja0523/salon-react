"use client"
import React from 'react'
import  pricejpg from "../../assets/img/price.jpg";

const Pricing = () => {
    const prices = [
        { service: "Haircut", price: "$29.00" },
        { service: "Beard Trim", price: "$35.00" },
        { service: "Mans Shave", price: "$23.00" },
        { service: "Hair Dyeing", price: "$19.00" },
        { service: "Mustache", price: "$15.00" },
        { service: "Stacking", price: "$39.00" },
      ]
      
  return (
        <section className="py-16 bg-black" >
          <div className="container mx-auto px-4 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="bg-gray-800 p-8 flex flex-col justify-center wow fadeIn" data-wow-delay="0.1s">
                <p className="inline-block bg-black text-primary py-1 px-4 mb-4 self-start">Price & Plan</p>
                <h1 className="text-3xl font-bold text-white mb-8">Check Out Our Barber Services And Prices</h1>
    
                <div>
                  {prices.map((item, index) => (
                    <div
                      key={index}
                      className={`flex justify-between py-3 ${
                        index !== prices.length - 1 ? "border-b border-gray-700" : ""
                      }`}
                    >
                      <h6 className="text-white font-semibold">{item.service}</h6>
                      <span className="text-primary font-semibold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
    
              <div className="wow fadeIn" data-wow-delay="0.5s">
                <img className="w-full h-full object-cover" src={pricejpg} alt="Pricing" />
              </div>
            </div>
          </div>
        </section>
      )
    }
    
    

export default Pricing