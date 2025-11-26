import React from 'react';

const InputField = ({ label, type = "text", name, value, onChange, placeholder, fullWidth = false, rows }) => {
    const isTextarea = type === "textarea";

    return (
        <div className={`flex flex-col ${fullWidth ? 'w-full' : 'w-full md:w-[48%]'}`}>
            {/* Label */}
            <label
                htmlFor={name}
                className="text-sm font-medium mb-2 uppercase tracking-wide"
                style={{ color: '#333' }}
            >
                {label}
            </label>

            {/* Input or Textarea */}
            {isTextarea ? (
                <textarea
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    rows={rows || 6}
                    className="px-4 py-3 rounded-lg bg-white border-none outline-none focus:ring-2 focus:ring-[#2E73D3] transition-all duration-300 resize-none"
                    style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
                />
            ) : (
                <input
                    id={name}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="px-4 py-3 rounded-lg bg-white border-none outline-none focus:ring-2 focus:ring-[#2E73D3] transition-all duration-300"
                    style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
                />
            )}
        </div>
    );
};

export default InputField;