import { LucideIcon } from "lucide-react";

interface FeaturesCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeaturesCard = ({
  icon: Icon,
  title,
  description,
}: FeaturesCardProps) => {
  return (
    <div className="relative p-6 rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:translate-x-4 group ">
      <div
        className={`w-12 h-12 rounded-full bg-[#F8F9FA] flex items-center justify-center mb-4 mx-auto   `}
      >
        <Icon className="w-6 h-6 text-gray-700" />
      </div>
      <h3 className="text-lg font-semibold text-center mb-2 text-gray-800">
        {title}
      </h3>
      <p className="text-sm text-center text-gray-600 leading-relaxed">
        {description}
      </p>
      <div
        className={`absolute inset-0 rounded-2xl transition-all duration-300 group-hover:animate-feature-hover pointer-events-none`}
      ></div>
    </div>
  );
};

export default FeaturesCard;
