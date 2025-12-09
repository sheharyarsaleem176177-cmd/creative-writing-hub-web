import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Menu, X, ShoppingCart } from "lucide-react";
import { assetPath } from "@/lib/assetPath";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOrderClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const orderForm = document.getElementById('order-form');
    if (orderForm) {
      orderForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { label: "About us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Guarantees", href: "#guarantees" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact us", href: "#", onClick: handleContactClick },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <img src={assetPath("uk.jpg")} alt="UK Flag" className="h-5 w-auto" />
            <span className="hidden sm:inline">United Kingdom</span>
          </div>
          <div className="flex items-center gap-3 md:gap-4 lg:gap-6 flex-wrap">
            <a href="tel:+447366420922" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-4 w-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm">+44-7366-420922</span>
            </a>
            <a href="mailto:criticalwritinghub80@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="h-4 w-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm hidden sm:inline">criticalwritinghub80@gmail.com</span>
              <span className="text-xs sm:inline sm:hidden">Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-primary/95 backdrop-blur-md text-primary-foreground py-4 md:pr-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center gap-6 md:gap-10">
            <div className="p-1 bg-primary-foreground/10 rounded-lg">
              <img 
                src={assetPath("logo.jpg")} 
                alt="Critical Writing Hub Logo" 
                className="h-16 w-16 md:h-16 md:w-16 rounded-md object-cover"
              />
            </div>
            <div className="relative">
              <span className="text-xl md:text-2xl font-serif font-bold">
                CRITICAL<span className="text-accent"> WRITING</span>
              </span>
              <span className="block text-xl md:text-2xl font-serif font-bold">    HUB</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={item.onClick}
                className="px-3 py-2 text-sm text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-md transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="gold" size="sm" className="flex items-center gap-2" onClick={handleOrderClick}>
              Order Now
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="xl:hidden p-1 hover:bg-primary-foreground/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
        {isMobileMenuOpen && (
        <div
          className="xl:hidden fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`xl:hidden fixed top-0 right-0 h-full w-48 max-w-[78vw] bg-primary text-primary-foreground shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-primary-foreground/20">
            <h2 className="text-xl font-serif font-bold">Menu</h2>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Sidebar Navigation */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-3 text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-lg transition-all"
                  onClick={(e) => {
                    if (item.onClick) {
                      item.onClick(e);
                    }
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
