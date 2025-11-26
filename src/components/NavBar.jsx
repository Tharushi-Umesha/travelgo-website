import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '/images/TravelGo.png';
import PrimaryButton from './buttons/PrimaryBtn';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (id) => {

        const element = document.getElementById(id);

        if (element) {

            element.scrollIntoView({ behavior: 'smooth' });


            setIsMenuOpen(false);
        }
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 bg-[#F8F8F8] ${isScrolled ? 'shadow-md' : ''}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo Section */}
                    <div className="flex-shrink-0">
                        <img
                            src={logo}
                            alt="TravelGo Logo"
                            className="h-12 w-auto cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => scrollToSection('home')}
                        />
                    </div>

                    {/* Desktop Navigation Menu */}
                    <div className="hidden md:flex items-center space-x-8">

                        <button
                            onClick={() => scrollToSection('home')}
                            className="text-color-dark hover:text-[#2E73D3] transition-colors font-medium"
                        >
                            Home
                        </button>


                        <button
                            onClick={() => scrollToSection('about')}
                            className="text-color-dark hover:text-[#2E73D3] transition-colors font-medium"
                        >
                            About Us
                        </button>


                        <button
                            onClick={() => scrollToSection('services')}
                            className="text-color-dark hover:text-[#2E73D3] transition-colors font-medium"
                        >
                            Services
                        </button>


                        <button
                            onClick={() => scrollToSection('gallery')}
                            className="text-color-dark hover:text-[#2E73D3] transition-colors font-medium"
                        >
                            Gallery
                        </button>
                    </div>


                    <div className="hidden md:block">
                        <PrimaryButton
                            text="Contact us"
                            onClick={() => scrollToSection('contact')}
                        />
                    </div>

                    {/* Hamburger Menu Button - Mobile */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-color-dark hover:text-[#2E73D3] focus:outline-none transition-colors"
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <div className="px-2 pt-2 pb-6 space-y-3">

                        <button
                            onClick={() => scrollToSection('home')}
                            className="block w-full text-left px-3 py-2 text-color-dark hover:bg-white hover:text-[#2E73D3] rounded-lg transition-colors font-medium"
                        >
                            Home
                        </button>


                        <button
                            onClick={() => scrollToSection('about')}
                            className="block w-full text-left px-3 py-2 text-color-dark hover:bg-white hover:text-[#2E73D3] rounded-lg transition-colors font-medium"
                        >
                            About Us
                        </button>


                        <button
                            onClick={() => scrollToSection('services')}
                            className="block w-full text-left px-3 py-2 text-color-dark hover:bg-white hover:text-[#2E73D3] rounded-lg transition-colors font-medium"
                        >
                            Services
                        </button>


                        <button
                            onClick={() => scrollToSection('gallery')}
                            className="block w-full text-left px-3 py-2 text-color-dark hover:bg-white hover:text-[#2E73D3] rounded-lg transition-colors font-medium"
                        >
                            Gallery
                        </button>


                        <div className="mt-2">
                            <PrimaryButton
                                text="Contact us"
                                onClick={() => scrollToSection('contact')}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;