import { cn } from "@/lib/utils";
import { CarouselItem } from "@/shadcnComponents/ui/carousel";

interface CategoryCardProps {
  index: number;
  name: string;
  image: string;
  className?: string;
}

const CategoryCard = ({ index, name, image, className }: CategoryCardProps) => {
  return (
    <CarouselItem
      key={index}
      className={cn(
        "group relative hover:translate-x-0.5   rounded-lg transition-all duration-300  basis-1/2 md:basis-1/4",
        className
      )}
    >
      <div
        className="min-w-52 min-h-52 md:min-w-56 md:min-h-56 xl:min-w-64 xl:min-h-64 aspect-square    relative  bg-cover bg-center bg-no-repeat transition-transform duration-300  rounded-lg  hover:shadow-md"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black/5 transition-opacity duration-300 group-hover:opacity-20" />
      </div>

      <div className=" text-lg md:text-xl font-medium font-mono   text-black/80 flex items-center gap-x-2 pt-2 pl-1">
        <h3>0{index + 1}</h3>
        <h3 className="">{name}</h3>
      </div>
    </CarouselItem>
  );
};

export default CategoryCard;
