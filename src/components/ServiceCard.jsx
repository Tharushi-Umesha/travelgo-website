import React from 'react';

const ServiceCard = ({ number, title, description, image }) => {
    return (
        <div className="bg-card rounded-3xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[500px]">

                <div className="p-8 md:p-16 flex flex-col justify-center">
                    {/* Number and Title */}
                    <div className="flex items-baseline gap-3 md:gap-4 mb-6 md:mb-8">
                        <h3
                            className="text-primary font-normal flex-shrink-0"
                            style={{
                                fontFamily: 'Montserrat Alternates',
                                fontSize: 'clamp(60px, 8vw, 100px)',
                                lineHeight: '0.9'
                            }}
                        >
                            {number}
                        </h3>
                        <h4
                            className="text-primary font-medium uppercase tracking-wide whitespace-nowrap"
                            style={{
                                fontSize: 'clamp(20px, 3vw, 28px)',
                                lineHeight: '1.2'
                            }}
                        >
                            {title}
                        </h4>
                    </div>

                    {/* Description */}
                    <p
                        className="font-medium leading-relaxed uppercase"
                        style={{
                            fontSize: 'clamp(14px, 2vw, 16px)',
                            color: 'rgba(0, 0, 0, 0.6)'
                        }}
                    >
                        {description}
                    </p>
                </div>

                {/* Image*/}
                <div className="hidden md:flex h-full items-center justify-center p-8">
                    <div className="w-full h-[420px] rounded-2xl overflow-hidden">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;