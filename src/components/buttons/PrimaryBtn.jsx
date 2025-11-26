import React from 'react';

const PrimaryButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#2E73D3] text-white px-8 py-3 rounded-full hover:bg-[#1f5aa8] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
    >
      {text}
    </button>
  );
};

export default PrimaryButton;