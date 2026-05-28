import { Link } from 'react-router-dom'
import * as LucideIcons from 'lucide-react'

const SHADOW = '#D6336C'
const cardColors = ['#FF6B6B', '#FFD93D', '#C4B5FD', '#FF6B6B', '#FFD93D']
const cardRots = ['-rotate-1', 'rotate-1', '-rotate-1', 'rotate-2', '-rotate-2']

function FloatingHearts() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const positions = [
          { left: '10%', top: '60%' },
          { left: '25%', top: '70%' },
          { left: '65%', top: '65%' },
          { left: '80%', top: '55%' },
          { left: '45%', top: '80%' },
          { left: '55%', top: '75%' },
        ]
        const sizes = [16, 12, 18, 10, 14, 11]
        return (
          <span
            key={i}
            className={`absolute animate-heart-float animate-heart-float-${i + 1} select-none`}
            style={{
              left: positions[i].left,
              top: positions[i].top,
              fontSize: sizes[i],
            }}
          >
            ♥
          </span>
        )
      })}
    </div>
  )
}

export default function CategoryCard({ category, index, special }) {
  const Icon = LucideIcons[category.icon] || LucideIcons.Heart
  const bgColor = special ? 'transparent' : cardColors[index % cardColors.length]
  const rotation = special ? '' : cardRots[index % cardRots.length]

  const inner = (
    <div
      className="flex flex-col items-center justify-center gap-4 p-8 h-full transition-all duration-200 cursor-pointer select-none"
      style={{
        backgroundColor: special ? 'rgba(255,107,107,0.12)' : '#FFFFFF',
        border: '4px solid #000',
        boxShadow: `8px 8px 0px 0px ${SHADOW}`,
        position: 'relative',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)'
        e.currentTarget.style.boxShadow = `14px 14px 0px 0px ${SHADOW}`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0px)'
        e.currentTarget.style.boxShadow = `8px 8px 0px 0px ${SHADOW}`
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = 'translateY(0px)'
        e.currentTarget.style.boxShadow = `2px 2px 0px 0px ${SHADOW}`
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)'
        e.currentTarget.style.boxShadow = `14px 14px 0px 0px ${SHADOW}`
      }}
    >
      <div
        className="flex items-center justify-center w-16 h-16"
        style={{
          backgroundColor: special ? '#FF6B6B' : bgColor,
          border: '3px solid #000',
          boxShadow: `3px 3px 0px 0px ${SHADOW}`,
        }}
      >
        <Icon size={special ? 40 : 32} color={special ? '#fff' : '#000'} strokeWidth={3} />
      </div>
      <h3 className="font-bold text-2xl uppercase tracking-tight text-center text-black">
        {category.name}
      </h3>
      <p className="text-center text-black/50 text-sm font-bold uppercase tracking-widest">
        {category.photos.length} PHOTOS
      </p>
      {special && <FloatingHearts />}
    </div>
  )

  if (special) {
    return (
      <Link
        to={`/album/${category.id}`}
        className="group block h-full animate-romantic-enter"
      >
        {inner}
      </Link>
    )
  }

  return (
    <Link
      to={`/album/${category.id}`}
      className={`group block h-full ${rotation} transition-all duration-200`}
    >
      {inner}
    </Link>
  )
}
