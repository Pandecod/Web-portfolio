import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // icon hamburger & close

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full z-30 transition-all ${active ? 'bg-gray-900/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-20">
        {/* Logo */}
        <div className="logo">
          <h1 className={`text-3xl font-bold ${active ? 'text-white' : 'text-gray-900'}`}>Pande</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center sm:gap-10 gap-4">
          <li>
            <a href="#Hero" className={`sm:text-lg text-base font-medium transition-colors ${active ? 'text-gray-200 hover:text-blue-400' : 'text-gray-800 hover:text-blue-600'}`}>
              Beranda
            </a>
          </li>
          <li>
            <a href="#About" className={`sm:text-lg text-base font-medium transition-colors ${active ? 'text-gray-200 hover:text-blue-400' : 'text-gray-800 hover:text-blue-600'}`}>
              About
            </a>
          </li>
          <li>
            <a href="#Projects" className={`sm:text-lg text-base font-medium transition-colors ${active ? 'text-gray-200 hover:text-blue-400' : 'text-gray-800 hover:text-blue-600'}`}>
              Proyek
            </a>
          </li>
          <li>
            <a href="#Contact" className={`sm:text-lg text-base font-medium transition-colors ${active ? 'text-gray-200 hover:text-blue-400' : 'text-gray-800 hover:text-blue-600'}`}>
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Button */}
        <button className={`md:hidden transition-colors ${active ? 'text-white' : 'text-gray-800'}`} onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className={`md:hidden flex flex-col items-center gap-6 py-6 transition-all ${active ? 'bg-gray-900/70 backdrop-blur-md text-gray-100' : 'bg-white/70 backdrop-blur-md text-gray-900'}`}>
          <a href="#Hero" className="text-lg font-medium hover:text-blue-500" onClick={() => setOpen(false)}>
            Beranda
          </a>
          <a href="#About" className="text-lg font-medium hover:text-blue-500" onClick={() => setOpen(false)}>
            About
          </a>
          <a href="#Projects" className="text-lg font-medium hover:text-blue-500" onClick={() => setOpen(false)}>
            Proyek
          </a>
          <a href="#Contact" className="text-lg font-medium hover:text-blue-500" onClick={() => setOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
