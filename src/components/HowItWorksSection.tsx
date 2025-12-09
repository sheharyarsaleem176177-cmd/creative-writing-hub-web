import { FileText, UserCheck, Edit3, Download } from "lucide-react";

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Place Your Order",
    description: "Fill out our simple order form with your requirements, academic level, deadline, and any specific instructions.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Get Matched with Expert",
    description: "Our system matches you with the best-suited PhD writer based on your subject area and requirements.",
  },
  {
    icon: Edit3,
    step: "03",
    title: "Writer Works on Paper",
    description: "Your assigned writer researches and crafts your paper from scratch, ensuring originality and quality.",
  },
  {
    icon: Download,
    step: "04",
    title: "Download & Review",
    description: "Receive your completed paper on time. Request unlimited free revisions if needed until you're satisfied.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title font-serif text-primary-foreground">
            How It <span className="text-accent">Works</span>
          </h2>
          <p className="section-subtitle text-primary-foreground/70">
            Getting expert academic help is simple and straightforward. Follow these easy steps to get your paper done.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div 
              key={item.step} 
              className="relative slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-accent/50 to-accent/0" />
              )}

              <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 hover:border-accent/50 transition-all duration-300 group hover:-translate-y-2">
                {/* Step number */}
                <div className="absolute -top-4 -right-2 text-6xl font-serif font-bold text-accent/20 group-hover:text-accent/30 transition-colors">
                  {item.step}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                  <item.icon className="h-8 w-8 text-accent" />
                </div>

                <h3 className="text-xl font-serif font-bold mb-3">{item.title}</h3>
                <p className="text-primary-foreground/70 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
