import { ArrowRight } from "lucide-react";

const Button = (props) => {
  return (
    <button
      className={`group relative overflow-hidden bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-3 transition duration-300 ${props.className || ""}`}
    >
      <span className="relative z-10">{props.name}</span>

      <ArrowRight
        size={20}
        className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
      />

      {/* Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition duration-500" />
    </button>
  );
};

export default Button;
