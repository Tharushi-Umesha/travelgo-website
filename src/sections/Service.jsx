import React, { useState, useEffect } from 'react';
import ServiceCard from '../components/ServiceCard';
import PaginationDots from '../components/PaginationDots';

const Service = () => {
    const [currentService, setCurrentService] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const services = [
        {
            number: '01',
            title: 'Beach Getaways',
            description: 'Escape to paradise with our stunning beach destinations. Relax on pristine white sands, dive into crystal-clear waters, and unwind in luxury beachfront resorts. We create the perfect tropical retreat tailored to your desires.',
            image: '/services/beach.jpg'
        },
        {
            number: '02',
            title: 'Adventure Tours',
            description: 'Fuel your adventurous spirit with thrilling expeditions across breathtaking landscapes. Experience mountain trekking, jungle safaris, and extreme sports with expert guides. Push your limits while exploring nature\'s most spectacular wonders in complete safety.',
            image: '/services/adventure.jpg'
        },
        {
            number: '03',
            title: 'Cultural Journeys',
            description: 'Immerse yourself in the rich tapestry of global cultures and ancient civilizations. Explore historical landmarks, visit UNESCO Heritage sites, and savor authentic local cuisine. We create meaningful connections with communities for unforgettable cultural experiences.',
            image: '/services/cultural.jpg'
        },
        {
            number: '04',
            title: 'Custom Packages',
            description: 'Your journey should be as unique as you are. Our travel experts design completely personalized itineraries matching your interests, budget, and schedule. From honeymoons to family vacations, we handle every detail for your perfect travel experience.',
            image: '/services/custom.jpg'
        }
    ];

    //Auto Slide
    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentService((prev) => (prev + 1) % services.length);
                setIsTransitioning(false);
            }, 300);
        }, 5000);

        return () => clearInterval(interval);
    }, [services.length]);

    const handleDotClick = (index) => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentService(index);
            setIsTransitioning(false);
        }, 300);
    };

    return (
        <section id="services" className="py-16 px-6 md:px-12 bg-background">
            <div className="max-w-7xl mx-auto">

                <h3 className="text-primary text-sm md:text-base font-bold uppercase tracking-wider mb-12">
                    SERVICES
                </h3>


                <div
                    className={`mb-8 transition-all duration-500 ease-in-out ${isTransitioning ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
                        }`}
                >
                    <ServiceCard
                        number={services[currentService].number}
                        title={services[currentService].title}
                        description={services[currentService].description}
                        image={services[currentService].image}
                    />
                </div>


                <PaginationDots
                    total={services.length}
                    current={currentService}
                    onDotClick={handleDotClick}
                />
            </div>
        </section>
    );
};

export default Service;