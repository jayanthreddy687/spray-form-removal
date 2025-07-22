import { TrustpilotBadge } from "@/components/TrustpilotBadge";

export const TrustIndicators = () => {
  return (
    <div className="bg-card border-b py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-8 flex-wrap">
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">Our customers rate us</span>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg text-green-600">Excellent</span>
              <div className="flex text-green-500">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i} className="text-lg">{star}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Based on 500+ reviews on</span>
            <TrustpilotBadge />
          </div>
        </div>
      </div>
    </div>
  );
};