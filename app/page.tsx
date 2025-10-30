import { Testimonials } from "@/components/testimonials";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center h-screen gap-8 p-5">
        <h1 className="text-3xl font-semibold text-center md:text-5xl">
          Testimonials section with parallax effect
        </h1>
        <div className="p-2 border rounded-full animate-bounce bg-muted">
          <ChevronDown />
        </div>
      </section>
      <Testimonials />
      <div className="flex items-end justify-center h-screen">
        <Button asChild variant="link">
          <a
            href="https://x.com/codewithgaston"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            by Gaston
          </a>
        </Button>
      </div>
    </div>
  );
}
