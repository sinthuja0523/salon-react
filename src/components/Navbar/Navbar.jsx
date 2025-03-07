
import React, { useState } from 'react'; 
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";




const NavLinks = [
  { id: "1", name: "Home", link: "/#" },
  { id: "2", name: "About", link: "/#about" },
  { id: "3", name: "Contact", link: "/#contact" },
  { id: "4", name: "Services", link: "/#services" },
];

const Navbar = ({ theme, setTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="shadow-md bg-white dark:bg-dark dark:text-white transition duration-300 fixed w-full z-50">
      <div className="flex justify-between py-3 px-5 items-center">
        {/* Logo */}    
        <h1 className="font-roboto text-3xl md:text-4xl font-bold text-primary">
          Classic Cuts
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {NavLinks.map((item) => (
              <li key={item.id} className="py-4">
                <a
                  className="inline-block py-2 text-lg font-medium font-roboto hover:text-primary transition-colors duration-300"
                  href={item.link}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Appointment Button */}
          <button 
        
          className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors duration-300">
            Appointment
          </button>

          {/* Theme Toggle */}
          <div onClick={handleThemeToggle} className="cursor-pointer text-2xl">
            {theme === "dark" ? <BiSolidSun /> : <BiSolidMoon />}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden focus:outline-none text-gray-600 dark:text-white"
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-dark shadow-md absolute top-16 left-0 w-full py-4 transition-all duration-300">
          <ul className="flex flex-col items-center gap-4">
            {NavLinks.map((item) => (
              <li key={item.id} className="w-full text-center">
                <a
                  className="block py-3 text-lg font-medium hover:text-primary transition-colors duration-300"
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
            <button 
  className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors duration-300"
>
  Appointment
</button>

            </li>
            {/* Theme Toggle in Mobile */}
            <li className="mt-2">
              <div onClick={handleThemeToggle} className="cursor-pointer text-3xl">
                {theme === "dark" ? <BiSolidSun /> : <BiSolidMoon />}
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
