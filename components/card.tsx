import { Testimonial } from "@/types/types";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star } from "lucide-react";

export const Card = ({ src, name, rating, quote }: Testimonial) => {
  return (
    <section className="p-4 space-y-4 border rounded-lg shadow bg-background">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src={src} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <p className="text-sm font-semibold">{name}</p>
      </div>
      <p>&ldquo;{quote}&rdquo;</p>
      <div className="flex gap-1">
        {[...Array(rating)].map((_, index) => (
          <Star size={16} key={index} className="fill-primary stroke-primary" />
        ))}
      </div>
    </section>
  );
};
