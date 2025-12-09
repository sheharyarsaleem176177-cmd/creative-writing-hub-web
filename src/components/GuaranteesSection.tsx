import { Shield, RefreshCw, Clock, Lock, Award, Headphones, FileCheck, CreditCard } from "lucide-react";

const guarantees = [
  {
    icon: Shield,
    title: "100% Plagiarism Free",
    description: "Every paper is written from scratch and checked with Turnitin. We guarantee original, unique content.",
  },
  {
    icon: RefreshCw,
    title: "Free Unlimited Revisions",
    description: "Not satisfied? Request revisions until your paper meets your expectations at no extra cost.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We guarantee delivery before your deadline. Never miss a submission again.",
  },
  {
    icon: Lock,
    title: "100% Confidential",
    description: "Your personal information and order details are protected by UK Data Protection Act.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "All papers undergo rigorous quality checks by our editorial team before delivery.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our dedicated support team is available around the clock to assist you.",
  },
  {
    icon: FileCheck,
    title: "AI-Free Content",
    description: "Zero AI involvement - only human PhD experts write your papers.",
  },
  {
    icon: CreditCard,
    title: "Money-Back Guarantee",
    description: "Full refund if we can't meet your requirements or you're not satisfied.",
  },
];

const GuaranteesSection = () => {
  return (
    <section id="guarantees" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title font-serif">
            Our <span className="text-accent">Guarantees</span>
          </h2>
          <p className="section-subtitle">
            We stand behind our work with comprehensive guarantees. Your academic success and satisfaction are our top priorities.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {guarantees.map((item, index) => (
            <div 
              key={item.title} 
              className="text-center p-6 rounded-xl bg-card border border-border hover:border-accent/50 hover:shadow-card transition-all duration-300 group slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="inline-flex p-4 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors mb-4">
                <item.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-serif font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuaranteesSection;
