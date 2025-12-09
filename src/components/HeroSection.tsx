import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Shield, Minus, Plus, Lock, Star, Users, Award, Check } from "lucide-react";
import { assetPath } from "@/lib/assetPath";

const HeroSection = () => {
  const [pages, setPages] = useState(1);
  const [academicLevel, setAcademicLevel] = useState("undergraduate");
  const [paperType, setPaperType] = useState("essay");
  const [deadline, setDeadline] = useState("15days");
  const [subject, setSubject] = useState("");
  const [customSubject, setCustomSubject] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const words = pages * 250;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus(null);
    setIsSubmitting(true);

    try {
      const formDataToSubmit = new FormData();
      formDataToSubmit.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY ?? "");
      formDataToSubmit.append("email", email);
      formDataToSubmit.append("phone", phone);
      formDataToSubmit.append("academicLevel", academicLevel);
      formDataToSubmit.append("paperType", paperType);
      formDataToSubmit.append("subject", subject === "custom" ? customSubject : subject);
      formDataToSubmit.append("pages", String(pages));
      formDataToSubmit.append("words", String(words));
      formDataToSubmit.append("deadline", deadline);
      formDataToSubmit.append("subject_line", "New Order Request - Creative Writing Hub");
      formDataToSubmit.append("from_name", email);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSubmit,
      });

      const data = await res.json();
      setSubmitStatus(data.success ? "success" : "error");

      if (data.success) {
        // Reset form fields on success
        setPhone("");
        setEmail("");
        setSubject("");
        setCustomSubject("");
        setPaperType("essay");
        setAcademicLevel("undergraduate");
        setDeadline("15days");
        setPages(1);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="hero-section min-h-[90vh] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-primary-foreground space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              Boost your grades with our <span className="text-accent">Academic Services</span>
            </h1>

            
            <div className="text-lg md:text-xl text-primary-foreground/80 max-w-xl">
              <p className="mb-4">I offer specialised academic support in:</p>
              <ul className="space-y-2 list-none">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Essay & assignment guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Thesis & dissertation consulting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Research support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Coding & programming tutoring (Python, Java, MATLAB)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>SPSS & data analysis help</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>ML/DL conceptual guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Exam & quiz preparation assistance</span>
                </li>
              </ul>
            </div>

            {/* Writer avatars */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex -space-x-3">
                <img 
                  src={assetPath("pfp-1.jpg")} 
                  alt="Expert Writer 1" 
                  className="w-12 h-12 rounded-full border-2 border-accent object-cover"
                />
                <img 
                  src={assetPath("pfp-2.jpg")} 
                  alt="Expert Writer 2" 
                  className="w-12 h-12 rounded-full border-2 border-accent object-cover"
                />
                <img 
                  src={assetPath("pfp-3.jpg")} 
                  alt="Expert Writer 3" 
                  className="w-12 h-12 rounded-full border-2 border-accent object-cover"
                />
              </div>
              <div className="bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-accent font-bold">25+</span>
                <span className="text-primary-foreground/80 ml-1">Experts</span>
              </div>
              <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="h-5 w-5 text-accent" />
                <span className="text-sm">Zero AI involvement, only human experts</span>
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              {[
                { name: "ResellerRatings", rating: "5.0" },
                { name: "Average Fiverr Rating", rating: "4.8" },
              ].map((badge) => (
                <div key={badge.name} className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                  <span className="text-sm font-medium">{badge.name}</span>
                  <span className="text-accent font-bold">{badge.rating}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-accent" />
                <span><strong className="text-accent">3k+</strong> Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-accent" />
                <span>Rated <strong className="text-accent">4.9/5</strong></span>
                <a
                  href="https://www.fiverr.com/s/vvwQk1N"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 block"
                >
                  <img
                    src={assetPath("fiverr.png")}
                    alt="Fiverr"
                    className="h-16 rounded-lg border-3 border-primary-foreground/20 hover:scale-105 transition-transform"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Order Form */}
          <div className="animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
            <div id="order-form" className="order-form-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground">Place an Order Now</h3>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Academic Level */}
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">Academic Level</label>
                  <Select value={academicLevel} onValueChange={setAcademicLevel}>
                    <SelectTrigger className="w-full h-12">
                      <SelectValue placeholder="Select academic level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="highschool">High School</SelectItem>
                      <SelectItem value="undergraduate">Undergraduate</SelectItem>
                      <SelectItem value="masters">Masters</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Type of Paper */}
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">Type of Project</label>
                  <Select value={paperType} onValueChange={setPaperType}>
                    <SelectTrigger className="w-full h-12">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="essay">Essay</SelectItem>
                      <SelectItem value="assignment">Assignment</SelectItem>
                      <SelectItem value="dissertation">Dissertation</SelectItem>
                      <SelectItem value="research">Research Paper</SelectItem>
                      <SelectItem value="coursework">Coursework</SelectItem>
                      <SelectItem value="thesis">Thesis</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Type of Subject */}
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">Type of Subject</label>
                  <Select value={subject} onValueChange={setSubject}>
                    <SelectTrigger className="w-full h-12">
                      <SelectValue placeholder="Select subject type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="thesis-writing">Thesis Writing</SelectItem>
                      <SelectItem value="assignment-writing">Assignment Writing</SelectItem>
                      <SelectItem value="dissertation-support">Dissertation Support</SelectItem>
                      <SelectItem value="quizzes-exams">Quizzes & Exams Preparation</SelectItem>
                      <SelectItem value="python">Python</SelectItem>
                      <SelectItem value="matlab">MatLAB</SelectItem>
                      <SelectItem value="spss">SPSS</SelectItem>
                      <SelectItem value="java">Java</SelectItem>
                      <SelectItem value="ml-dl">ML/DL</SelectItem>
                      <SelectItem value="engineering-projects">Engineering Projects</SelectItem>
                      <SelectItem value="electrical-engineering">Electrical Engineering</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                  {subject === "custom" && (
                    <input
                      type="text"
                      value={customSubject}
                      onChange={(e) => setCustomSubject(e.target.value)}
                      placeholder="Enter custom subject"
                      className="w-full mt-2 p-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                    />
                  )}
                </div>

                {/* Pages */}
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">Pages or Words</label>
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => setPages(Math.max(1, pages - 1))}
                      className="p-2 rounded-lg border border-input hover:bg-muted transition-colors"
                    >
                      <Minus className="h-5 w-5" />
                    </button>
                    <div className="flex-1 text-center">
                      <span className="text-lg font-semibold">{pages} Page</span>
                      <span className="text-muted-foreground ml-2">{words} Words</span>
                    </div>
                    <button 
                      onClick={() => setPages(pages + 1)}
                      className="p-2 rounded-lg border border-input hover:bg-muted transition-colors"
                    >
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Deadline */}
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">Deadline</label>
                  <Select value={deadline} onValueChange={setDeadline}>
                    <SelectTrigger className="w-full h-12">
                      <SelectValue placeholder="Select deadline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="6hours">6 Hours</SelectItem>
                      <SelectItem value="12hours">12 Hours</SelectItem>
                      <SelectItem value="24hours">24 Hours</SelectItem>
                      <SelectItem value="2days">2 Days</SelectItem>
                      <SelectItem value="5days">5 Days</SelectItem>
                      <SelectItem value="10days">10 Days</SelectItem>
                      <SelectItem value="15days">15+ Days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Email */}
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    required
                    className="w-full p-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                  />
                </div>

                {/* Phone (Optional) */}
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Phone Number <span className="text-muted-foreground text-xs">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+44 123 456 7890"
                    className="w-full p-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                  />
                </div>

                {/* Order button */}
                <Button
                  type="submit"
                  variant="gold"
                  size="xl"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  <Lock className="h-5 w-5 mr-2" />
                  {isSubmitting ? "Sending..." : "Get Quote Now"}
                </Button>

                {submitStatus === "success" && (
                  <p className="text-green-600 text-sm text-center">
                    Request sent successfully!
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-600 text-sm text-center">
                    Something went wrong. Please try again.
                  </p>
                )}

                <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center">
                  <Check className="h-4 w-4 text-accent" />
                  Unlimited Free Revisions and Money-Back Guarantee
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
