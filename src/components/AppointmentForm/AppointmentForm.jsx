import { useState } from "react";
import {   MapPin, User, Mail, Phone, Home } from "lucide-react";
import openjpg from "../../assets/img/open.jpg";

export default function AppointmentForm() {
  const branches = [
    { id: 1, branch_name: "Downtown Salon" },
    { id: 2, branch_name: "Uptown Salon" },
    { id: 3, branch_name: "Westside Salon" },
  ];

  const services = [
    { id: 1, service_name: "Haircut" },
    { id: 2, service_name: "Beard Trim" },
    { id: 3, service_name: "Hair Coloring" },
    { id: 4, service_name: "Facial" },
    { id: 5, service_name: "Hair Styling" },
  ];

  const timeSlots = [
    { id: 1, time: "09:00 AM" },
    { id: 2, time: "10:00 AM" },
    { id: 3, time: "11:00 AM" },
    { id: 4, time: "12:00 PM" },
    { id: 5, time: "01:00 PM" },
    { id: 6, time: "02:00 PM" },
    { id: 7, time: "03:00 PM" },
    { id: 8, time: "04:00 PM" },
    { id: 9, time: "05:00 PM" },
  ];

  const [formData, setFormData] = useState({
    branch: branches[0]?.id || "",
    serviceIds: [],
    date: "",
    timeSlot: "",
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (serviceId) => {
    setFormData((prevState) => {
      const serviceIds = [...prevState.serviceIds];

      return serviceIds.includes(serviceId)
        ? { ...prevState, serviceIds: serviceIds.filter((id) => id !== serviceId) }
        : { ...prevState, serviceIds: [...serviceIds, serviceId] };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    setFormData({
      branch: branches[0]?.id || "",
      serviceIds: [],
      date: "",
      timeSlot: "",
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
    });

    alert("Appointment booked successfully!");
  };

  return (
   
        <section id="appointment" className="py-16 bg-black font:roboto">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              
              <h1 className="text-3xl font-bold text-white">Book Your Appointment Today</h1>
            </div>
      
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pl-20">
              {/* Left Side: Form Section */}
              <div className="bg-gray-800 p-6 md:p-8 wow fadeIn" data-wow-delay="0.1s">
                <p className="inline-block bg-black text-primary py-1 px-4 mb-4">Book an appointment</p>
                <form onSubmit={handleSubmit}>
                  <div className="border-t border-gray-700 my-4"></div>
                  <h5 className="text-white text-lg font-bold uppercase mb-4">Service Selection</h5>
                  <div className="border-t border-gray-700 mb-6"></div>
      
                  <div className="space-y-4">
                    {/* Branch Selection */}
                    <div className="relative">
                      <label htmlFor="branch" className="text-white text-sm mb-1 block">
                        Select Branch
                      </label>
                      <select
                        id="branch"
                        name="branch"
                        value={formData.branch}
                        onChange={handleInputChange}
                        className="w-full bg-gray-700 text-white border border-gray-600 rounded p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        {branches.map((branch) => (
                          <option key={branch.id} value={branch.id}>
                            {branch.branch_name}
                          </option>
                        ))}
                      </select>
                      <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    </div>
      
                    {/* Services */}
                    <div>
                      <label className="text-white text-sm mb-2 block">Select Services</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {services.map((service) => (
                          <div key={service.id} className="flex items-center">
                            <input
                              type="checkbox"
                              id={`service_${service.id}`}
                              checked={formData.serviceIds.includes(service.id)}
                              onChange={() => handleCheckboxChange(service.id)}
                              className="w-4 h-4 text-primary bg-gray-700 border-gray-600 rounded focus:ring-primary"
                            />
                            <label htmlFor={`service_${service.id}`} className="ml-2 text-sm text-gray-300">
                              {service.service_name}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
      
                    {/* Date and Time */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative">
                        <label htmlFor="date" className="text-white text-sm mb-1 block">
                          Date
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          className="w-full bg-gray-700 text-white border border-gray-600 rounded p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                
                      </div>
      
                      <div className="relative">
                        <label htmlFor="timeSlot" className="text-white text-sm mb-1 block">
                          Time
                        </label>
                        <select
                          id="timeSlot"
                          name="timeSlot"
                          value={formData.timeSlot}
                          onChange={handleInputChange}
                          className="w-full bg-gray-700 text-white border border-gray-600 rounded p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Select Time</option>
                          {timeSlots.map((slot) => (
                            <option key={slot.id} value={slot.time}>
                              {slot.time}
                            </option>
                          ))}
                        </select>
                      
                      </div>
                    </div>
      
                    <div className="border-t border-gray-700 my-4"></div>
                    <h5 className="text-white text-lg font-bold uppercase mb-4">Personal Details</h5>
                    <div className="border-t border-gray-700 mb-6"></div>
      
                    {/* Personal Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative">
                        <label htmlFor="name" className="text-white text-sm mb-1 block">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          className="w-full bg-gray-700 text-white border border-gray-600 rounded p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      </div>
      
                      <div className="relative">
                        <label htmlFor="email" className="text-white text-sm mb-1 block">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="example@example.com"
                          className="w-full bg-gray-700 text-white border border-gray-600 rounded p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      </div>
      
                      <div className="relative">
                        <label htmlFor="phoneNumber" className="text-white text-sm mb-1 block">
                          Your Phone Number
                        </label>
                        <input
                          type="text"
                          id="phoneNumber"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          placeholder="(123) 456-7890"
                          className="w-full bg-gray-700 text-white border border-gray-600 rounded p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      </div>
      
                      <div className="relative">
                        <label htmlFor="address" className="text-white text-sm mb-1 block">
                          Your Address
                        </label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="123 Main St, City"
                          className="w-full bg-gray-700 text-white border border-gray-600 rounded p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <Home className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      </div>
                    </div>
      
                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded transition duration-300 mt-4"
                    >
                      Book Appointment
                    </button>
                  </div>
                </form>
              </div>
      
              {/* Right Side: Image Section */}
              <div className="wow fadeIn hidden lg:block pr-20" data-wow-delay="0.5s">
                <img className="w-full h-full object-cover" src={openjpg} alt="Appointment" />
              </div>
            </div>
          </div>
        </section>
      );
    }
