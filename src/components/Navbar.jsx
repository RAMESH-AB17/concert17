import React, { useEffect, useState } from "react";
import { Link } from 'react-scroll'; 
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "home" },
    { link: "Aboutus", path: "aboutus" },
    { link: "Blog", path: "blog" },
    { link: "Event", path: "event" },
    { link: "Gallery", path: "gallery" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <header className={`w-full bg-white md:bg-transparent fixed top-0 left-2 right-8  ${isSticky ? 'sticky-class' : ''}`}>
      <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0  duration-300" : ""}`}>
        <div className="flex justify-between items-center text-base gap-8">
          <a href="/" className="text-2xl font-bold flex items-center space-x-3">
            <span className="text-gray-500 hover:text-green-500">CONCERT</span>
          </a>

          <ul className="md:flex space-x-10 hidden font-bold">
            {navItems.map(({ link, path }) => 
              <Link
                // className="text-gray-500 hover:text-green-500"
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
              >
                {link}
              </Link>
            )}
          </ul>
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-gray focus:outline-none focus:text-gray-500'>
              {isMenuOpen ? (<FaXmark className='h-6 w-6 text-gray' />) : (<FaBars className='h-6 w-6' />)}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className='md:hidden space-y-4 mt-4 py-7 bg-white-400 w-24 px-5 border border-white rounded-lg'>
            {navItems.map(({ link, path }) => (
              <Link
                className="block text-gray-500 hover:text-green-500"
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
