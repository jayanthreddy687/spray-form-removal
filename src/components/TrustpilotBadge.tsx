export const TrustpilotBadge = () => {
  return (
    <div className="flex items-center gap-2 bg-card rounded-lg px-3 py-2 border">
      <div className="flex items-center gap-1">
        <div className="flex text-green-500">
          {'★★★★★'.split('').map((star, i) => (
            <span key={i} className="text-sm">{star}</span>
          ))}
        </div>
        <span className="text-xs font-medium text-green-600 ml-1">Trustpilot</span>
      </div>
    </div>
  );
};