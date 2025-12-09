import { Star, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const writers = [
  {
    name: "Elizabeth M.",
    degree: "PhD",
    specialization: "International Relations",
    subjects: ["Foreign Policy", "Diplomacy", "Economics", "Political Science"],
    completedOrders: 308,
    rating: 5.0,
    yearsExp: 13,
    initials: "EM",
    review: "My paper on international relations now reads smoothly and presents stronger strategic analysis thanks to her feedback.",
    reviewerCode: "TAP-656708",
  },
  {
    name: "Walter G.",
    degree: "MS",
    specialization: "Psychology",
    subjects: ["Clinical Psychology", "Cognitive Psychology", "Social Psychology", "Forensic Psychology"],
    completedOrders: 312,
    rating: 5.0,
    yearsExp: 6,
    initials: "WG",
    review: "Walter took my chaos of psychology notes and turned them into a story so stunning, I almost expected Freud to appear beside me!",
    reviewerCode: "TAP-656802",
  },
  {
    name: "Sarah K.",
    degree: "PhD",
    specialization: "Business & Management",
    subjects: ["Marketing", "Finance", "Strategic Management", "HR"],
    completedOrders: 425,
    rating: 4.9,
    yearsExp: 10,
    initials: "SK",
    review: "Sarah's expertise in business strategy helped me craft a dissertation that exceeded my supervisor's expectations.",
    reviewerCode: "TAP-657201",
  },
];

const WritersSection = () => {
  return (
    <section id="writers" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title font-serif">
            Direct Access to <span className="text-accent">Verified UK PhD Writers</span>
          </h2>
          <p className="section-subtitle">
            We have the most qualified and experienced writers in our team who have years of experience in academic essay writing. Choose your preferred writer who matches your subject area.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {writers.map((writer, index) => (
            <div 
              key={writer.name} 
              className="writer-card slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Header */}
              <div className="bg-primary p-6 text-primary-foreground">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center text-xl font-bold text-accent">
                      {writer.initials}
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold">{writer.name}</h3>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < Math.floor(writer.rating) ? 'fill-accent text-accent' : 'text-primary-foreground/30'}`} />
                        ))}
                        <span className="ml-1 text-sm">{writer.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
                    {writer.degree}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Stats */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-accent" />
                    <span className="font-semibold">{writer.completedOrders}+</span>
                    <span className="text-muted-foreground">Orders</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-accent" />
                    <span className="font-semibold">{writer.yearsExp}+</span>
                    <span className="text-muted-foreground">Years</span>
                  </div>
                </div>

                {/* Specialization */}
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-2">Specialization</div>
                  <div className="font-serif font-semibold text-foreground">{writer.specialization}</div>
                </div>

                {/* Subjects */}
                <div className="flex flex-wrap gap-2">
                  {writer.subjects.map((subject) => (
                    <span key={subject} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                      {subject}
                    </span>
                  ))}
                </div>

                {/* Review */}
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-sm italic text-muted-foreground">"{writer.review}"</p>
                  <p className="text-xs text-accent mt-2">— {writer.reviewerCode}</p>
                </div>

                <Button variant="gold" className="w-full">
                  Message Writer
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="default" size="lg">
            View All Writers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WritersSection;
