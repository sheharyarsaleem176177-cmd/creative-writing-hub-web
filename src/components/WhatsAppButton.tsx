import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/447366420922"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-3 py-2.5 md:px-4 md:py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 group"
    >
      <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
      <span className="font-medium text-sm md:text-base">WhatsApp Now</span>
    </a>
  );
};

export default WhatsAppButton;
