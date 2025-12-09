import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const services = [
    "Thesis Writing",
    "Assignment Writing",
    "Dissertation Support",
    "Quizzes & Exams Preparation",
    "Python",
    "MatLAB",
    "SPSS",
    "Java",
    "ML/DL",
    "Engineering Projects",
    "Electrical Engineering",
  ];

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="inline-block mb-6">
              <span className="text-2xl font-serif font-bold">
                CRITICAL<span className="text-accent"> WRITING</span>
              </span>
              <span className="block text-2xl font-serif font-bold">HUB</span>
            </a>
            <p className="text-primary-foreground/70 mb-6 max-w-md">
              The UK's and US's most trusted academic writing service. We've helped over 14000 students achieve their academic goals since 2020.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a href="tel:+447366420922" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                <Phone className="h-5 w-5" />
                +44-7366-420922
              </a>
              <a href="mailto:criticalwritinghub80@gmail.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                <Mail className="h-5 w-5" />
                criticalwritinghub80@gmail.com
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="h-5 w-5 mt-0.5" />
                <span>International House 24 Holborn Viaduct London EC1A 2BN</span>
              </div>
            </div>

            {/* Social links removed by request */}
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="font-serif font-bold text-2xl md:text-3xl mb-8">Our Services</h4>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((item) => (
                <a 
                  key={item}
                  href="#services" 
                  className="bg-primary-foreground/10 hover:bg-primary-foreground/20 border border-primary-foreground/20 hover:border-accent rounded-lg px-4 py-3 text-primary-foreground hover:text-accent transition-all duration-200 text-base font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    const servicesSection = document.getElementById('services');
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 pb-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Critical Writing Hub. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <Link to="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
