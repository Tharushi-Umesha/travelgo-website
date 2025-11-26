import React from 'react';

const GalleryCard = ({ destination, description, image }) => {
    return (
        <div className="bg-card rounded-3xl overflow-hidden shadow-lg h-[540px] flex flex-col max-w-[340px] mx-auto">
            {/* Image */}
            <div className="p-5 flex-shrink-0">
                <div className="w-full h-[320px] rounded-2xl overflow-hidden">
                    <img
                        src={image}
                        alt={destination}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="px-5 pb-5 flex-grow flex flex-col">

                <h3
                    className="text-xl font-bold mb-3 uppercase"
                    style={{ color: '#2E73D3' }}
                >
                    {destination}
                </h3>

                {/* Description */}
                <p
                    className="text-sm leading-relaxed uppercase"
                    style={{ color: 'rgba(0, 0, 0, 0.6)' }}
                >
                    {description}
                </p>
            </div>
        </div>
    );
};

export default GalleryCard;