import { Star } from "lucide-react";
import { assetPath } from "@/lib/assetPath";

const testimonials = [
  {
    name: "James Mitchell",
    course: "MBA",
    rating: 5,
    text: "Absolutely brilliant service! They delivered my dissertation proposal ahead of schedule and the quality was exceptional. My supervisor was impressed with the depth of research.",
    orderCode: "TAP-651234",
    flag: assetPath("uk.jpg"),
  },
  {
    name: "Sophie Williams",
    course: "Psychology",
    rating: 5,
    text: "I was struggling with my research paper deadline. The writer understood exactly what I needed and delivered a paper that got me a First! Highly recommend.",
    orderCode: "TAP-652891",
    flag: assetPath("uk.jpg"),
  },
  {
    name: "Ahmed Hassan",
    course: "Engineering",
    rating: 5,
    text: "The technical expertise of my assigned writer was outstanding. Complex engineering concepts explained clearly with proper calculations and diagrams.",
    orderCode: "TAP-654102",
    flag: assetPath("uk.jpg"),
  },
  {
    name: "Emily Chen",
    course: "Economics",
    rating: 5,
    text: "Used their service for my economics dissertation. The statistical analysis was spot-on and the literature review was comprehensive. Worth every penny!",
    orderCode: "TAP-655823",
    flag: assetPath("uk.jpg"),
  },
  {
    name: "Oliver Brown",
    course: "Law",
    rating: 5,
    text: "Excellent legal analysis and case law references. The writer clearly understood UK law requirements. Received my paper on time with no plagiarism issues.",
    orderCode: "TAP-656445",
    flag: assetPath("usa.jpg"),
  },
  {
    name: "Grace Thompson",
    course: "Medicine",
    rating: 5,
    text: "Needed help with my medical literature review. The writer had genuine expertise in the field. Thorough, well-researched, and academically rigorous work.",
    orderCode: "TAP-657012",
    flag: assetPath("usa.jpg"),
  },
];

const TestimonialsSection = () => {
  return (
    <section id="reviews" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title font-serif">
            What Our <span className="text-accent">Students Say</span>
          </h2>
          <p className="section-subtitle">
            Join over 14000 satisfied students who have trusted Critical Writing Hub with their academic success.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex gap-4 md:gap-6 lg:gap-8 w-max animate-[reviews-scroll_28s_linear_infinite]"
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div 
                key={`${testimonial.orderCode}-${index}`} 
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 w-[280px] md:w-[320px] lg:w-[360px] flex-shrink-0"
              >
                {/* Flag icon */}
                <img src={testimonial.flag} alt={testimonial.flag.includes('uk') ? 'UK Flag' : 'USA Flag'} className="h-10 w-auto mb-4 rounded" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">"{testimonial.text}"</p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-xs text-accent">{testimonial.course}</div>
                  </div>
                </div>

                {/* Order code */}
                <div className="mt-4 text-xs text-muted-foreground">
                  Order: {testimonial.orderCode}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes reviews-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
