import { useEffect, useRef } from "react";
import { Clock, GraduationCap, FileCheck, Shield, Headphones, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Urgent Essay Help",
    description: "Our PhD writers are available 24/7 for prompt essay writing assistance with guaranteed on-time delivery. They can meet urgent deadlines without compromising on quality.",
  },
  {
    icon: GraduationCap,
    title: "Verified UK PhD Writers",
    description: "Our team comprises skilled academic essay writers who are international PhD-qualified individuals graduated from Top Russell Group Universities.",
  },
  {
    icon: FileCheck,
    title: "100% Original Work",
    description: "Since 2020, we have provided academic essay assistance to 14000+ students in the UK and US. Every paper is written from scratch and guaranteed to pass Turnitin checks.",
  },
  {
    icon: Shield,
    title: "100% Confidential",
    description: "Your identity and order details remain strictly confidential. We conform to the United Kingdom's Data Protection Act with encrypted payment gateways.",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description: "We have 24/7 customer care representatives available for different time zones to respond quickly to your calls and emails.",
  },
  {
    icon: RefreshCw,
    title: "Free Unlimited Revisions",
    description: "We put the needs of our customers first with our free unlimited revisions policy. 100% satisfaction backed by money-back guarantee.",
  },
];

const formatNumber = (value: number, suffix: string) => {
  if (suffix.includes("K")) return `${Math.round(value)}K+`;
  if (suffix.includes("%")) return `${Math.round(value)}%`;
  if (!Number.isInteger(value)) return value.toFixed(1);
  return Math.round(value).toString();
};

const FeaturesSection = () => {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const targets = Array.from(el.querySelectorAll("[data-target]")) as HTMLElement[];
            targets.forEach((target) => {
              const endValue = Number(target.dataset.target ?? "0");
              const suffix = target.dataset.suffix ?? "";
              let start = 0;
              const duration = 1200;
              const startTime = performance.now();

              const step = (now: number) => {
                const progress = Math.min((now - startTime) / duration, 1);
                const current = start + (endValue - start) * progress;
                target.textContent = formatNumber(current, suffix);
                if (progress < 1) requestAnimationFrame(step);
              };

              requestAnimationFrame(step);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title font-serif">
            Your Journey to Top the Class Starts Here!
            <span className="block text-accent">Experience the Best Academic Help</span>
          </h2>
          <p className="section-subtitle">
            Concerned about producing a strong academic paper? Critical Writing Hub offers affordable and reliable academic guidance, editing, and research support to help you excel with confidence.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className="feature-card group slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 inline-flex p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div ref={statsRef} className="mt-20 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: 14, suffix: "K+", label: "Students Helped" },
            { number: 25, suffix: "+", label: "Expert Writers" },
            { number: 5.0, suffix: "", label: "Average Rating" },
            { number: 100, suffix: "%", label: "Success Rate" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2"
                data-target={stat.number}
                data-suffix={stat.suffix}
              >
                {stat.suffix ? `0${stat.suffix}` : "0"}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
