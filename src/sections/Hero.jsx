import React, { useState, useEffect } from 'react';
import PrimaryButton from './../components/buttons/PrimaryBtn';

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        '/hero/hero1.jpg',
        '/hero/hero2.jpg',
        '/hero/hero3.jpg'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);


    const scrollToAbout = () => {
        const element = document.getElementById('about');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div id="home" className="relative w-full h-screen overflow-hidden">

            {images.map((img, index) => (
                <div
                    key={index}
                    className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                    style={{
                        opacity: currentImage === index ? 1 : 0,
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            ))}


            <div className="relative z-10 flex flex-col justify-center items-start h-full max-w-7xl mx-auto px-6 md:px-12">
                <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-6 max-w-2xl">
                    Discover TravelGo Affordable Luxury Awaits
                </h1>

                <p className="text-white text-lg md:text-xl font-semibold mb-8 max-w-3xl leading-relaxed">
                    Elevate Your Travel Experience with Handcrafted Premium Adventures, Luxurious Destinations,
                    and Unforgettable Memories - All at Prices That Won't Break the Bank
                </p>


                <PrimaryButton
                    text="Explore Now"
                    onClick={scrollToAbout}
                />
            </div>


            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${currentImage === index
                            ? 'bg-white w-8'
                            : 'bg-white/50 hover:bg-white/75'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;