import { BookOpen, FileText, GraduationCap, PenTool, BookMarked, FlaskConical, Code, FileQuestion, Brain, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: BookMarked,
    title: "Thesis Writing",
    description: "Professional thesis writing services with rigorous research and academic precision for Master's and PhD students.",
    price: "From £18.99",
  },
  {
    icon: BookOpen,
    title: "Assignment Writing",
    description: "Professional assignment help across all subjects. Guaranteed to meet your university's requirements.",
    price: "From £10.99",
  },
  {
    icon: GraduationCap,
    title: "Dissertation Support",
    description: "Comprehensive dissertation assistance from topic selection to final submission with PhD-level expertise.",
    price: "From £15.99",
  },
  {
    icon: FileQuestion,
    title: "Quizzes & Exams Preparation",
    description: "Expert assistance with quiz and exam preparation to help you achieve top grades and academic success.",
    price: "From £12.99",
  },
  {
    icon: Code,
    title: "Python",
    description: "Expert Python programming help, coding assistance, and tutoring for assignments and projects.",
    price: "From £14.99",
  },
  {
    icon: Code,
    title: "MatLAB",
    description: "Professional MatLAB programming support, data analysis, and computational problem-solving assistance.",
    price: "From £16.99",
  },
  {
    icon: FlaskConical,
    title: "SPSS",
    description: "SPSS data analysis help, statistical analysis support, and research methodology assistance.",
    price: "From £13.99",
  },
  {
    icon: Code,
    title: "Java",
    description: "Java programming tutoring, coding help, and assignment assistance for computer science students.",
    price: "From £14.99",
  },
  {
    icon: Brain,
    title: "ML/DL",
    description: "Machine Learning and Deep Learning conceptual guidance, project help, and academic support.",
    price: "From £19.99",
  },
  {
    icon: Wrench,
    title: "Engineering Projects",
    description: "Comprehensive engineering project assistance including design, analysis, calculations, and technical documentation.",
    price: "From £17.99",
  },
  {
    icon: Wrench,
    title: "Electrical Engineering",
    description: "Expert electrical engineering assistance including circuit design, power systems, electronics, and technical analysis.",
    price: "From £16.99",
  },
];

const ServicesSection = () => {
  const handleOrderClick = () => {
    const orderForm = document.getElementById('order-form');
    if (orderForm) {
      orderForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title font-serif">
            Our <span className="text-accent">Academic Services</span>
          </h2>
          <p className="section-subtitle">
            We offer a comprehensive range of academic writing services to help you excel in your studies. All services come with free unlimited revisions and money-back guarantee.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="text-center p-6 rounded-xl bg-card border border-border hover:border-accent/50 hover:shadow-card transition-all duration-300 group slide-up relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="inline-flex p-4 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors mb-4">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-2 text-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                <div className="text-lg font-bold text-accent mb-4">{service.price}</div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all"
                  onClick={handleOrderClick}
                >
                  Order Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
