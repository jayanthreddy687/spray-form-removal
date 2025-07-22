export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-6 sm:py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4">
            <span className="text-2xl">♻️</span>
            <span className="font-bold text-xl">Spray Foam Removal Scheme</span>
          </div>
          <p className="text-primary-foreground/80 mb-4">
          *Homeowners in the UK can qualify for 20% discount – this is based on individual circumstances
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-6 text-sm text-primary-foreground/60 items-center">
            <span>© 2024 Spray Foam Removal Scheme</span>
            <span>•</span>
            <a href="/privacy-policy" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};