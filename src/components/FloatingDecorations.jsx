const shapes = [
  { x: '4%', y: '12%', w: 60, h: 60, color: '#FF6B6B', rot: 12, anim: 'animate-float-slow', delay: '0s', type: 'rect' },
  { x: '88%', y: '18%', w: 50, h: 50, color: '#FFD93D', rot: -8, anim: 'animate-spin-slow', delay: '0.5s', type: 'circle' },
  { x: '8%', y: '72%', w: 44, h: 44, color: '#C4B5FD', rot: -15, anim: 'animate-float-slow', delay: '1s', type: 'circle' },
  { x: '82%', y: '75%', w: 56, h: 56, color: '#FF6B6B', rot: 20, anim: 'animate-spin-slow', delay: '1.5s', type: 'rect' },
  { x: '45%', y: '92%', w: 40, h: 40, color: '#FFD93D', rot: -5, anim: 'animate-float-slow', delay: '2s', type: 'circle' },
  { x: '94%', y: '50%', w: 36, h: 36, color: '#C4B5FD', rot: 10, anim: 'animate-float-slow', delay: '0.3s', type: 'rect' },
  { x: '2%', y: '45%', w: 48, h: 48, color: '#FFD93D', rot: -10, anim: 'animate-spin-slow', delay: '2.5s', type: 'circle' },
  { x: '70%', y: '10%', w: 32, h: 32, color: '#FF6B6B', rot: 25, anim: 'animate-float-slow', delay: '1.8s', type: 'rect' },
]

export default function PrimitiveShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden" aria-hidden="true">
      {shapes.map((s, i) => (
        <div
          key={i}
          className={`absolute border-4 border-black ${s.anim}`}
          style={{
            left: s.x,
            top: s.y,
            width: s.w,
            height: s.h,
            backgroundColor: s.color,
            borderRadius: s.type === 'circle' ? '50%' : '0px',
            transform: `rotate(${s.rot}deg)`,
            animationDelay: s.delay,
          }}
        />
      ))}
    </div>
  )
}
