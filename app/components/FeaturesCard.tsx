import { LucideIcon } from "lucide-react";

interface FeaturesCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}
{
  /** Store features card */
}
const FeaturesCard = ({
  icon: Icon,
  title,
  description,
}: FeaturesCardProps) => {
  return (
    <div className=" relative py-3 md:py-6 px-1 md:px-4 2xl:py-8  rounded-2xl bg-white  transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 group hover:border-[0.5px] border-[0.2px] shadow-[#C9B3A2]/20">
      <div
        className={`w-12 h-12 rounded-full bg-[#F6EDE7] flex items-center justify-center mb-4 mx-auto   `}
      >
        <Icon className="w-6 h-6 text-gray-700" />
      </div>
      <h3 className="text-lg lg:text-xl font-semibold text-center mb-2 text-gray-800">
        {title}
      </h3>
      <p className="text-sm text-center text-[#77573f] gray-600 tracking-wide text-balance lg:leading-relaxed line-clamp-3">
        {description}
      </p>
    </div>
  );
};

export default FeaturesCard;
