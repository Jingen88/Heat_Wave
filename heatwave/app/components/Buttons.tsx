import React from "react";
import { FaWrench, FaWater, FaFire } from "react-icons/fa";
import { JSX } from "react/jsx-dev-runtime";

type Variant = "blue" | "amber";
type IconType = "wrench" | "water" | "fire";

interface ServiceButtonProps {
  variant?: Variant;
  text?: string;
  icon?: IconType;
  disabled?: boolean;
}

const ServiceButton: React.FC<ServiceButtonProps> = ({
  variant = "blue",
  text = "Book Service",
  icon = "wrench",
  disabled = false
}) => {
  const baseStyles = "group flex items-center justify-center gap-2 rounded-lg px-6 py-5 font-bold text-white transition-all duration-300 min-w-[160px] min-h-[44px] focus:ring-4 focus:outline-none";

  const variants: Record<Variant, string> = {
    blue: `${baseStyles} bg-[#2D9CD0] hover:bg-gradient-to-r hover:from-[#2D9CD0] hover:to-[#45fbdb] hover:text-black`,
    amber: `${baseStyles} bg-[#EFA622] hover:bg-gradient-to-r hover:from-[#EFA622] hover:to-[#fe903b] hover:text-black`
  };

  const icons: Record<IconType, JSX.Element> = {
    wrench: <FaWrench className="w-10 h-10 text-black group-hover:text-[#45fbdb] transition-colors duration-300" />,
    water: <FaWater className="w-10 h-10 text-black group-hover:text-[#45fbdb] transition-colors duration-300" />,
    fire: <FaFire className="w-10 h-10 text-black group-hover:text-[#45fbdb] transition-colors duration-300" />
  };

  return (
    <button
      className={`${variants[variant]} transform cursor-pointer hover:scale-105 active:scale-95 disabled:hover:scale-100 disabled:cursor-not-allowed disabled:opacity-60 shadow-lg hover:shadow-xl`}
      disabled={disabled}
      aria-label={text}
    >
      {icons[icon]}
      <span className="text-3xl text-black group-hover:text-black transition-colors duration-300">{text}</span>
    </button>
  );
};

const ServiceButtonDemo = () => {
  return (
    <div className="min-h-screen bg-gray-800 p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Blue Variants */}
          <ServiceButton variant="blue" text="Book Service" icon="wrench" />
          <ServiceButton variant="blue" text="Get a Quote" icon="water" />
          <ServiceButton variant="blue" text="Emergency Repair" icon="fire" />
          <ServiceButton variant="blue" text="Contact Us" icon="wrench" disabled />

          {/* Amber Variants */}
          <ServiceButton variant="amber" text="Book Service" icon="wrench" />
          <ServiceButton variant="amber" text="Get a Quote" icon="water" />
          <ServiceButton variant="amber" text="Emergency Repair" icon="fire" />
          <ServiceButton variant="amber" text="Contact Us" icon="wrench" disabled />
        </div>
      </div>
    </div>
  );
};

export const QuoteButton = () => (
  <ServiceButton variant="amber" text="Get a Quote" icon="wrench" />
);

export default ServiceButtonDemo;