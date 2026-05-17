import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phone = "917599982088";
  const message =
    "Hi Printeda, I have a query regarding Printing/DSC services.";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition flex items-center gap-2 group"
    >
      <MessageCircle size={24} />

      {/* Always visible on mobile, expand on hover desktop */}
      <span className="text-sm font-semibold sm:max-w-0 sm:overflow-hidden sm:group-hover:max-w-xs sm:group-hover:ml-2 transition-all duration-300 whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
}