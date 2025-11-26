import React from 'react';

const PaginationDots = ({ total, current, onDotClick }) => {
    return (
        <div className="flex justify-center gap-3">
            {Array.from({ length: total }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => onDotClick(index)}
                    className={`transition-all duration-300 rounded-full ${current === index
                            ? 'bg-primary w-12 h-3'
                            : 'bg-gray-400 w-3 h-3 hover:bg-gray-500'
                        }`}
                    aria-label={`Go to item ${index + 1}`}
                />
            ))}
        </div>
    );
};

export default PaginationDots;