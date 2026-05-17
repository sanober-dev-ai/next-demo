"use client";

const Input = ({ type = "text", placeholder, name, value, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="
        w-full
        px-5 py-3 mt-2
        rounded-2xl
        border border-gray-200
        focus:outline-none
        focus:ring-2 focus:ring-red-500
        transition
        bg-white text-gray-700
      "
    />
  );
};

export default Input;
