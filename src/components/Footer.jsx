import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer style={{ backgroundColor: '#E8E8E8' }}>

            <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    <div className="md:col-span-1">

                        <div className="mb-4 cursor-pointer" onClick={() => scrollToSection('home')}>
                            <img
                                src="/images/TravelGo.png"
                                alt="TravelGo Logo"
                                className="h-12 hover:opacity-80 transition-opacity"
                            />
                        </div>

                        <p className="text-sm leading-relaxed" style={{ color: '#333' }}>
                            Your trusted partner in creating unforgettable travel experiences around the world.
                        </p>
                    </div>


                    <div>
                        <h4 className="text-base font-bold mb-4 uppercase" style={{ color: '#000' }}>
                            Quick Links
                        </h4>
                        <ul className="space-y-2">

                            <li>
                                <button
                                    onClick={() => scrollToSection('home')}
                                    className="text-sm hover:text-primary transition-colors text-left"
                                    style={{ color: '#333' }}
                                >
                                    Home
                                </button>
                            </li>


                            <li>
                                <button
                                    onClick={() => scrollToSection('about')}
                                    className="text-sm hover:text-primary transition-colors text-left"
                                    style={{ color: '#333' }}
                                >
                                    About Us
                                </button>
                            </li>


                            <li>
                                <button
                                    onClick={() => scrollToSection('services')}
                                    className="text-sm hover:text-primary transition-colors text-left"
                                    style={{ color: '#333' }}
                                >
                                    Services
                                </button>
                            </li>


                            <li>
                                <button
                                    onClick={() => scrollToSection('gallery')}
                                    className="text-sm hover:text-primary transition-colors text-left"
                                    style={{ color: '#333' }}
                                >
                                    Gallery
                                </button>
                            </li>


                            <li>
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="text-sm hover:text-primary transition-colors text-left"
                                    style={{ color: '#333' }}
                                >
                                    Contact Us
                                </button>
                            </li>
                        </ul>
                    </div>


                    <div>
                        <h4 className="text-base font-bold mb-4 uppercase" style={{ color: '#000' }}>
                            Social Media
                        </h4>
                        <div className="flex gap-3">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                                style={{ backgroundColor: '#2E73D3' }}
                            >
                                <Instagram size={20} color="white" />
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                                style={{ backgroundColor: '#2E73D3' }}
                            >
                                <Facebook size={20} color="white" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                                style={{ backgroundColor: '#2E73D3' }}
                            >
                                <Twitter size={20} color="white" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                                style={{ backgroundColor: '#2E73D3' }}
                            >
                                <Linkedin size={20} color="white" />
                            </a>
                        </div>
                    </div>


                    <div>
                        <h4 className="text-base font-bold mb-4 uppercase" style={{ color: '#000' }}>
                            Contact Info
                        </h4>
                        <div className="space-y-2 text-sm" style={{ color: '#333' }}>
                            <p>
                                <span className="font-semibold">Address:</span> 123 Beach Road, Negombo, Sri Lanka
                            </p>
                            <p>
                                <span className="font-semibold">Phone:</span> +94 77 123 4567
                            </p>
                            <p>
                                <span className="font-semibold">Email:</span>{' '}
                                <a
                                    href="mailto:info@travelgo.com"
                                    className="hover:text-primary transition-colors"
                                >
                                    info@travelgo.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="border-t border-gray-300">
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
                    <p className="text-center text-sm font-semibold" style={{ color: '#000' }}>
                        © 2024 TRAVELGO. ALL RIGHTS RESERVED.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;