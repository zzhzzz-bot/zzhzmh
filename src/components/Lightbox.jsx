import { useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const SHADOW = '#F4A0C0'

export default function Lightbox({ photos, currentIndex, onClose, onPrev, onNext }) {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    },
    [onClose, onPrev, onNext]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown])

  if (currentIndex < 0 || currentIndex >= photos.length) return null

  const btnClass = `absolute z-10 p-3 bg-white border-4 border-black transition-all duration-100 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:shadow-[6px_6px_0px_0px_${SHADOW}]`

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: 'rgba(255,253,245,0.97)' }}
      onClick={onClose}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onClose() }}
        className={btnClass + ' top-6 right-6'}
        style={{ boxShadow: `4px 4px 0px 0px ${SHADOW}` }}
      >
        <X size={24} color="#000" strokeWidth={4} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        className={btnClass + ' left-4 bg-[#FFD93D] disabled:opacity-30 disabled:pointer-events-none'}
        style={{ boxShadow: `4px 4px 0px 0px ${SHADOW}` }}
        disabled={currentIndex <= 0}
      >
        <ChevronLeft size={24} color="#000" strokeWidth={4} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onNext() }}
        className={btnClass + ' right-4 bg-[#FF6B6B] disabled:opacity-30 disabled:pointer-events-none'}
        style={{ boxShadow: `4px 4px 0px 0px ${SHADOW}` }}
        disabled={currentIndex >= photos.length - 1}
      >
        <ChevronRight size={24} color="#000" strokeWidth={4} />
      </button>

      <div className="absolute top-6 left-6 z-10 bg-white border-3 border-black px-4 py-1.5" style={{ boxShadow: `3px 3px 0px 0px ${SHADOW}` }}>
        <span className="font-bold text-base uppercase tracking-widest text-black">
          {currentIndex + 1} / {photos.length}
        </span>
      </div>

      <img
        src={photos[currentIndex]}
        alt=""
        className="max-w-[90vw] max-h-[85vh] object-contain border-4 border-black"
        style={{ boxShadow: `12px 12px 0px 0px ${SHADOW}` }}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )
}
