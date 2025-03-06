import React from 'react'
import  openjpg from "../../assets/img/open.jpg";

const WorkingHour = () => {
    const hours = [
        { day: "Monday", time: "09 AM - 09 PM" },
        { day: "Tuesday", time: "09 AM - 09 PM" },
        { day: "Wednesday", time: "09 AM - 09 PM" },
        { day: "Thursday", time: "09 AM - 09 PM" },
        { day: "Friday", time: "09 AM - 09 PM" },
        { day: "Sat / Sun", time: "Closed", closed: true },
      ]
  return (
    <section className="py-16 bg-black">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <div className="wow fadeIn" data-wow-delay="0.1s">
          <img
            className="w-full h-full object-cover"
            src={openjpg}
            alt="Working Hours"
          />
        </div>

        <div className="bg-gray-800 p-8 flex flex-col justify-center wow fadeIn" data-wow-delay="0.5s">
          <p className="inline-block bg-black text-primary py-1 px-4 mb-4 self-start">Working Hours</p>
          <h1 className="text-3xl font-bold text-white mb-8">Professional Barbers Are Waiting For You</h1>

          <div>
            {hours.map((item, index) => (
              <div
                key={index}
                className={`flex justify-between py-3 ${
                  index !== hours.length - 1 ? "border-b border-gray-700" : ""
                }`}
              >
                <h6 className="text-white font-semibold">{item.day}</h6>
                <span className={`font-semibold ${item.closed ? "text-primary" : "text-white"}`}>{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)
}



export default WorkingHour