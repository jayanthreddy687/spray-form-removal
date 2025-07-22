import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AsSeenOnTVSection = () => {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              As Seen On TV
            </h2>
            
            <p className="text-xl text-muted-foreground">
              The Dangers of Spray Foam
            </p>
          </div>
          
          {/* Responsive YouTube video embed */}
          <div className="relative rounded-lg overflow-hidden shadow-2xl max-w-3xl mx-auto aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/PMJIt8hObkA"
              title="BBC One show about spray foam dangers"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};