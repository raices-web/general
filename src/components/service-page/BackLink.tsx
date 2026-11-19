import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

function BackLink() {
  return (
    <div className="px-6 pt-8 sm:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-[1600px]">
        <Link
          to="/"
          className="inline-flex cursor-pointer items-center gap-2 text-[13px] font-medium text-body transition-colors hover:text-forest"
        >
          <ArrowLeft size={16} strokeWidth={2} />
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}

export default BackLink
