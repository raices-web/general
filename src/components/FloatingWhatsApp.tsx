import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '../lib/whatsapp'

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactanos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-forest text-cream shadow-lg transition-colors hover:bg-forest-light"
    >
      <MessageCircle size={26} strokeWidth={1.5} />
    </a>
  )
}

export default FloatingWhatsApp
