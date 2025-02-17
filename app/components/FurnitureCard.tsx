import { cn } from "@/lib/utils";
import { ShoppingBag } from "lucide-react";

interface FurnitureCardProps {
  name: string;
  price: number;
  image: string;
  colors: string[];
  className?: string;
  style: React.CSSProperties;
}

const FurnitureCard = ({
  name,
  price,
  image,
  colors,
  className,
}: FurnitureCardProps) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg",
        className
      )}
    >
      <div
        className="relative h-[380px] 2xl:h-[400px] w-full bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-[1.01]"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-zinc-400/5 transition-opacity duration-300 group-hover:opacity-20" />
      </div>
      <div className="absolute top-2  right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full p-2">
        <ShoppingBag className="text-black size-6 " />
      </div>
      <div className="absolute bottom-0 left-2 right-1  p-2  text-white transition-transform duration-300">
        <h3 className="mb-0.5 text-lg md:text-xl font-semibold  tracking-normal text-black/80">
          {name}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-base  font-semibold text-gray-700">
            ${price.toLocaleString()}
          </p>
          <div className="flex pr-3">
            {colors.map((color, index) => (
              <div
                key={index}
                className="size-4 md:size-5 rounded-full border border-gray-200 shadow-sm -mr-1.5 "
                style={{ backgroundColor: color }}
                title={`Available in ${color}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureCard;
