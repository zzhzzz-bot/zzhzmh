import { getCategories } from '../data'
import CategoryCard from '../components/CategoryCard'

const sideCategories = [1, 2, 3, 4]

export default function HomePage() {
  const categories = getCategories()

  return (
    <div className="relative z-10 min-h-screen flex flex-col" style={{ backgroundColor: '#FFFDF5' }}>
      <div className="pt-6 sm:pt-12 px-4 sm:px-6 text-center max-w-7xl mx-auto w-full">
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 overflow-hidden whitespace-nowrap pointer-events-none select-none opacity-[0.05]">
            <span className="font-bold text-[2rem] sm:text-[5rem] uppercase tracking-tighter leading-none inline-block">
              zzh ♥ zmh &nbsp; zzh ♥ zmh &nbsp; zzh ♥ zmh &nbsp; zzh ♥ zmh &nbsp;
            </span>
          </div>

          <div className="inline-block relative">
            <h1
              className="font-bold uppercase tracking-tighter leading-none select-none absolute inset-0"
              style={{
                fontSize: 'clamp(1.8rem, 9vw, 6.5rem)',
                WebkitTextStroke: '2px #000',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
              }}
            >
              zzh ♥ zmh
            </h1>
            <h1
              className="font-bold uppercase tracking-tighter leading-none select-none relative"
              style={{
                fontSize: 'clamp(1.8rem, 9vw, 6.5rem)',
                color: '#000',
                transform: 'translate(4px, 4px)',
              }}
            >
              <span className="text-[#FF6B6B]">zzh</span>{' '}
              <span className="text-[#FFD93D]">♥</span>{' '}
              <span className="text-[#000]">zmh</span>
            </h1>
          </div>

          <div className="mt-5 sm:mt-6 inline-block bg-[#FFD93D] border-[3px] border-black px-4 py-1.5 shadow-[3px_3px_0px_0px_#D6336C]">
            <p className="font-bold text-xs sm:text-base uppercase tracking-widest text-black">
              每一张照片，都是我们的故事
            </p>
          </div>
        </div>
      </div>

      <div style={{ height: 'clamp(2rem, 8vh, 5rem)' }} />

      {/* Mobile — all in one grid */}
      <div className="flex-1 md:hidden px-4" style={{ minHeight: 0 }}>
        <div className="grid grid-cols-2 gap-2 h-full">
          <div className="col-span-2" style={{ minHeight: '150px' }}>
            <CategoryCard category={categories[0]} index={0} special />
          </div>
          {sideCategories.map((i) => (
            <div key={categories[i].id}>
              <CategoryCard category={categories[i]} index={i} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop — cross layout */}
      <div className="hidden md:block flex-1 max-w-4xl mx-auto px-4 w-full" style={{ minHeight: 0 }}>
        <div className="grid grid-cols-3 gap-8 lg:gap-12 justify-items-center items-center h-full">
          <div />
          <div className="scale-125">
            <CategoryCard category={categories[1]} index={1} />
          </div>
          <div />
          <div className="scale-125">
            <CategoryCard category={categories[2]} index={2} />
          </div>
          <div className="scale-[1.65] lg:scale-[1.85]">
            <CategoryCard category={categories[0]} index={0} special />
          </div>
          <div className="scale-125">
            <CategoryCard category={categories[3]} index={3} />
          </div>
          <div />
          <div className="scale-125">
            <CategoryCard category={categories[4]} index={4} />
          </div>
          <div />
        </div>
      </div>

      <div className="py-4 sm:py-6 border-y-[3px] sm:border-y-4 border-black overflow-hidden whitespace-nowrap select-none">
        <span className="font-bold text-lg sm:text-2xl uppercase tracking-wider text-black inline-block pr-8">
          ★ MEMORIES &nbsp; ★ PHOTOS &nbsp; ★ LOVE &nbsp; ★ zzh ♥ zmh &nbsp;
          ★ MEMORIES &nbsp; ★ PHOTOS &nbsp; ★ LOVE &nbsp; ★ zzh ♥ zmh &nbsp;
          ★ MEMORIES &nbsp; ★ PHOTOS &nbsp; ★ LOVE &nbsp;
        </span>
      </div>
    </div>
  )
}
