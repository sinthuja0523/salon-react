import React from 'react'
import { MapPin, Phone, Mail, Twitter, Facebook, Youtube, Linkedin } from "lucide-react"


const Footer = () => {

  return (
        <footer className="bg-black text-white mt-12 pt-12 wow fadeIn" data-wow-delay="0.1s">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Get In Touch */}
              <div>
                <h4 className="text-xl uppercase font-bold mb-6">Get In Touch</h4>
                <div className="flex items-center mb-4">
                  <div className="bg-black w-10 h-10 flex items-center justify-center mr-3 flex-shrink-0">
                    <MapPin className="text-primary" />
                  </div>
                  <span>123 Street, New York, USA</span>
                </div>
                <div className="flex items-center mb-4">
                  <div className="bg-black w-10 h-10 flex items-center justify-center mr-3 flex-shrink-0">
                    <Phone className="text-primary" />
                  </div>
                  <span>+012 345 67890</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-black w-10 h-10 flex items-center justify-center mr-3 flex-shrink-0">
                    <Mail className="text-primary" />
                  </div>
                  <span>info@example.com</span>
                </div>
              </div>
    
              {/* Quick Links */}
              <div>
                <h4 className="text-xl uppercase font-bold mb-6">Quick Links</h4>
                <div className="flex flex-col space-y-2">
                  <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-300">
                    About Us
                  </a>
                  <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-300">
                    Contact Us
                  </a>
                  <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-300">
                    Our Services
                  </a>
                  <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-300">
                    Terms & Condition
                  </a>
                  <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-300">
                    Support
                  </a>
                </div>
              </div>
    
              {/* Newsletter */}
              <div>
                <h4 className="text-xl uppercase font-bold mb-6">Newsletter</h4>
                <div className="relative mb-6">
                  <input
                    type="email"
                    className="w-full py-3 px-4 bg-transparent border border-gray-700 text-white"
                    placeholder="Your email"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1">
                    SignUp
                  </button>
                </div>
                <div className="flex space-x-2">
                  <a
                    href="#"
                    className="bg-black w-10 h-10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  >
                    <Twitter className="text-white w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-black w-10 h-10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  >
                    <Facebook className="text-white w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-black w-10 h-10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  >
                    <Youtube className="text-white w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-black w-10 h-10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  >
                    <Linkedin className="text-white w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
    
          {/* Copyright */}
          <div className="border-t border-gray-700 py-6">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0 text-center md:text-left">
                  &copy;{" "}
                  <a href="#" className="text-primary hover:underline border-b border-primary">
                    Your Site Name
                  </a>
                  , All Right Reserved.
                </div>
                <div className="text-center md:text-right">
                  Designed By{" "}
                  <a href="https://htmlcodex.com" className="text-primary hover:underline border-b border-primary">
                    HTML Codex
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      )
    }
    
    

export default Footer