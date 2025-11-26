import React from 'react';
import PrimaryButton from '../components/buttons/PrimaryBtn';

const About = () => {
    const scrollToServices = () => {
        const element = document.getElementById('services');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="about" className="py-16 px-6 md:px-12 bg-background">
            <div className="max-w-7xl mx-auto">
                {/* Section Label */}
                <h3 className="text-primary text-sm md:text-base font-bold uppercase tracking-wider mb-6">
                    ABOUT US
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-dark mb-8 leading-tight">
                            TravelGo Creates Journeys That Inspire and Transform Lives
                        </h2>

                        <div className="space-y-4 text-text text-lg leading-relaxed mb-8">
                            <p>
                                At TravelGo, we make luxury travel accessible to everyone.
                            </p>
                            <p>
                                We create personalized journeys that blend adventure, comfort, and affordability.
                            </p>
                            <p>
                                Our expert team handles every detail, from accommodations
                            </p>
                            <p>
                                to itineraries, ensuring seamless experiences.
                            </p>
                            <p>
                                Whether it's beaches, mountains, or cultural exploration,
                            </p>
                            <p>
                                we turn your travel dreams into reality.
                            </p>
                        </div>


                        <div className="flex gap-12 mb-8">
                            <div>
                                <h3 className="text-5xl font-bold text-dark mb-2">10K</h3>
                                <p className="text-text text-base">Success Trips</p>
                            </div>
                            <div>
                                <h3 className="text-5xl font-bold text-dark mb-2">200K</h3>
                                <p className="text-text text-base">Happy Clients</p>
                            </div>
                        </div>

                        {/* Explore Now Button*/}
                        <PrimaryButton
                            text="Explore Now"
                            onClick={scrollToServices}
                        />
                    </div>

                    {/* Right Images */}
                    <div className="relative h-[500px]">

                        <div className="absolute top-0 right-0 w-[70%] md:w-[65%] rounded-3xl overflow-hidden shadow-xl z-10">
                            <img
                                src="/about/about1.jpg"
                                alt="Mountain camping with RV"
                                className="w-full h-64 object-cover"
                            />
                        </div>


                        <div className="absolute bottom-20 left-0 w-[70%] md:w-[65%] rounded-3xl overflow-hidden shadow-2xl z-20">
                            <img
                                src="/about/about2.jpg"
                                alt="Friends exploring together"
                                className="w-full h-64 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;