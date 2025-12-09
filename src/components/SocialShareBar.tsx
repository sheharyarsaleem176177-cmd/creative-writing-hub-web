import { Facebook, Linkedin, Instagram, Mail } from "lucide-react";
import { assetPath } from "@/lib/assetPath";

const SocialShareBar = () => {
  // Get current page URL for sharing
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const pageTitle = "Critical Writing Hub - Academic Services";

  // Social media links
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/share/1BUFjVWond/",
      color: "bg-[#1877F2]",
      hoverColor: "hover:bg-[#166FE5]",
      isImage: false,
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/ammaim-sheharyar-1309b6321?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      color: "bg-[#0077B5]",
      hoverColor: "hover:bg-[#006399]",
      isImage: false,
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/criticalwritinghub?igsh=ZDVqNWY0b2s5bm96",
      color: "bg-gradient-to-br from-[#F56040] via-[#E1306C] to-[#C13584]",
      hoverColor: "hover:opacity-90",
      isImage: false,
    },
    {
      name: "Fiverr",
      imageSrc: assetPath("fiverr_round.jpg"),
      url: "https://www.fiverr.com/s/vvwQk1N",
      color: "bg-[#00b22d]",
      hoverColor: "hover:bg-[#009d28]",
      isImage: true,
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:criticalwritinghub80@gmail.com",
      color: "bg-[#EA4335]",
      hoverColor: "hover:bg-[#D33B2C]",
      isImage: false,
    },
  ];

  return (
    <div className="fixed right-2 md:right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-1.5 md:gap-2">
      {socialLinks.map((social, index) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            w-10 h-10 md:w-12 md:h-12 rounded-md
            ${social.color}
            ${social.hoverColor}
            flex items-center justify-center
            text-white
            shadow-lg hover:shadow-xl
            transition-all duration-300
            hover:scale-110
            active:scale-95
            group
            cursor-pointer
            overflow-hidden
          `}
          aria-label={`Share on ${social.name}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {social.isImage && social.imageSrc ? (
            <div className="h-full w-full flex items-center justify-center bg-[#00b22d]">
              <img 
                src={social.imageSrc} 
                alt={social.name}
                className="h-8 w-8 md:h-10 md:w-10 object-contain"
              />
            </div>
          ) : (
            social.icon && <social.icon className="h-5 w-5 md:h-6 md:w-6" />
          )}
        </a>
      ))}
    </div>
  );
};

export default SocialShareBar;

