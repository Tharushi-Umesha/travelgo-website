import React, { useState, useEffect } from 'react';
import GalleryCard from '../components/GalleryCard';
import PaginationDots from '../components/PaginationDots';

const Gallery = () => {
    const [currentDestination, setCurrentDestination] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const destinations = [
        {
            destination: 'MALDIVES',
            description: 'Overwater bungalows with turquoise water description: crystal-clear waters and luxury overwater villas await you',
            image: '/gallery/maldives.jpg'
        },
        {
            destination: 'SWISS ALPS',
            description: 'Breathtaking snow-capped peaks and world-class skiing adventures in the heart of Europe',
            image: '/gallery/swiss-alps.jpg'
        },
        {
            destination: 'BALI, INDONESIA',
            description: 'Tropical paradise with stunning rice terraces, ancient temples, and pristine beaches',
            image: '/gallery/bali.jpg'
        },
        {
            destination: 'SANTORINI, GREECE',
            description: 'Iconic white-washed buildings, blue domes, and spectacular Mediterranean sunsets',
            image: '/gallery/santorini.jpg'
        },
        {
            destination: 'SAFARI, KENYA',
            description: 'Witness incredible wildlife including lions, elephants, and zebras in their natural habitat',
            image: '/gallery/kenya.jpg'
        },
        {
            destination: 'TOKYO, JAPAN',
            description: 'Where ancient traditions seamlessly blend with cutting-edge technology and modern culture',
            image: '/gallery/tokyo.jpg'
        },
        {
            destination: 'PARIS, FRANCE',
            description: 'The city of light offers romance, world-class art, and unforgettable culinary experiences',
            image: '/gallery/paris.jpg'
        },
        {
            destination: 'DUBAI, UAE',
            description: 'Futuristic architecture, luxury shopping, desert safaris, and Arabian hospitality',
            image: '/gallery/dubai.jpg'
        },
        {
            destination: 'MACHU PICCHU, PERU',
            description: 'Ancient Incan citadel set high in the Andes mountains with breathtaking views',
            image: '/gallery/machu-picchu.jpg'
        },
        {
            destination: 'ICELAND',
            description: 'Land of fire and ice featuring stunning northern lights, glaciers, and volcanic landscapes',
            image: '/gallery/iceland.jpg'
        }
    ];


    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentDestination((prev) => (prev + 1) % destinations.length);
                setIsTransitioning(false);
            }, 300);
        }, 5000);

        return () => clearInterval(interval);
    }, [destinations.length]);

    const handleDotClick = (index) => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentDestination(index);
            setIsTransitioning(false);
        }, 300);
    };

    return (
        <section id="gallery" className="py-16 px-6 md:px-12 bg-background">
            <div className="max-w-7xl mx-auto">

                <h3 className="text-primary text-sm md:text-base font-bold uppercase tracking-wider mb-12">
                    GALLERY
                </h3>


                <div
                    className={`mb-8 transition-all duration-500 ease-in-out ${isTransitioning ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
                        }`}
                >

                    <div className="block md:hidden">
                        <div className="flex justify-center">
                            <GalleryCard
                                destination={destinations[currentDestination].destination}
                                description={destinations[currentDestination].description}
                                image={destinations[currentDestination].image}
                            />
                        </div>
                    </div>


                    <div className="hidden md:grid grid-cols-4 gap-4">
                        {[0, 1, 2, 3].map((offset) => {
                            const index = (currentDestination + offset) % destinations.length;
                            return (
                                <GalleryCard
                                    key={index}
                                    destination={destinations[index].destination}
                                    description={destinations[index].description}
                                    image={destinations[index].image}
                                />
                            );
                        })}
                    </div>
                </div>


                <PaginationDots
                    total={destinations.length}
                    current={currentDestination}
                    onDotClick={handleDotClick}
                />
            </div>
        </section>
    );
};

export default Gallery;