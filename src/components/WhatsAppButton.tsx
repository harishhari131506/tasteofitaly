import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phone = "917708993061";
  const message = encodeURIComponent("Hi! I'd like to book a celebration at Taste of Italy.");

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 border-2 border-white"
      style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-8 w-8" strokeWidth={1.5} />
    </a>
  );
}
