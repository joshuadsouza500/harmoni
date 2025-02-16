import { cn } from "@/lib/utils";

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
        className="relative h-[400px] w-full bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-[1.03]"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black/5 transition-opacity duration-300 group-hover:opacity-0" />
      </div>
      <div className="absolute bottom-0 left-0 right-0  p-2  text-white transition-transform duration-300">
        <h3 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
          {name}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-base font-medium text-gray-700">
            ${price.toLocaleString()}
          </p>
          <div className="flex pr-2">
            {colors.map((color, index) => (
              <div
                key={index}
                className="size-4 rounded-full border border-gray-200 shadow-sm -mr-1.5 "
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
