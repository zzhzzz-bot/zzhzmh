import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { getCategoryById } from '../data'
import PhotoCard from '../components/PhotoCard'
import Lightbox from '../components/Lightbox'

const S = '#D6336C'

export default function AlbumPage() {
  const { id } = useParams()
  const category = getCategoryById(id)
  const [lightboxIndex, setLightboxIndex] = useState(-1)

  if (!category) {
    return (
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#FFFDF5' }}>
        <div className="text-center">
          <p className="text-2xl font-bold text-black mb-6">这个相册不存在呢</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 font-bold text-sm uppercase tracking-wider bg-white border-4 border-black shadow-[6px_6px_0px_0px_#D6336C] transition-all duration-100 hover:shadow-[8px_8px_0px_0px_#D6336C] hover:-translate-y-1 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none text-black"
          >
            <ArrowLeft size={18} strokeWidth={3} />
            回到首页
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="relative z-10 min-h-screen py-6 sm:py-10" style={{ backgroundColor: '#FFFDF5' }}>
      <div className="mx-auto px-3 sm:px-6 max-w-none xl:max-w-7xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 mb-6 sm:mb-10 px-4 py-2 sm:px-5 sm:py-2.5 font-bold text-xs sm:text-sm uppercase tracking-wider bg-white border-[3px] sm:border-4 border-black shadow-[3px_3px_0px_0px_#D6336C] sm:shadow-[4px_4px_0px_0px_#D6336C] transition-all duration-100 hover:shadow-[5px_5px_0px_0px_#D6336C] hover:-translate-y-0.5 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none text-black"
        >
          <ArrowLeft size={16} strokeWidth={3} />
          返回首页
        </Link>

        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-block bg-[#C4B5FD] border-[3px] sm:border-4 border-black px-6 py-2.5 sm:px-10 sm:py-4 shadow-[6px_6px_0px_0px_#D6336C] sm:shadow-[8px_8px_0px_0px_#D6336C]">
            <h2
              className="font-bold uppercase tracking-tighter leading-none"
              style={{
                fontSize: 'clamp(1.6rem, 6vw, 3.5rem)',
                color: '#000',
              }}
            >
              {category.name}
            </h2>
          </div>
          <p className="mt-4 sm:mt-6 text-black/50 font-bold text-xs sm:text-sm uppercase tracking-widest">
            {category.photos.length} PHOTOS
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-5" style={{ marginTop: '-8px' }}>
          {category.photos.map((photo, i) => (
            <div
              key={i}
              className="w-[42%] sm:w-[28%] md:w-[22%] lg:w-[18%]"
            >
              <PhotoCard
                photo={photo}
                index={i}
                onClick={() => setLightboxIndex(i)}
              />
            </div>
          ))}
        </div>

        {category.photos.length === 0 && (
          <div className="text-center py-16">
            <p className="font-bold text-xl text-black/40 uppercase tracking-wider">还没有照片哦</p>
          </div>
        )}

        <div className="mt-20 sm:mt-28 py-4 sm:py-6 border-y-[3px] sm:border-y-4 border-black overflow-hidden whitespace-nowrap select-none">
          <span className="font-bold text-lg sm:text-2xl uppercase tracking-wider text-black inline-block pr-8">
            ★ {category.name} &nbsp; ★ GALLERY &nbsp; ★ MEMORIES &nbsp;
            ★ {category.name} &nbsp; ★ GALLERY &nbsp; ★ MEMORIES &nbsp;
            ★ {category.name} &nbsp;
          </span>
        </div>
      </div>

      {lightboxIndex >= 0 && (
        <Lightbox
          photos={category.photos}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(-1)}
          onPrev={() => setLightboxIndex((p) => Math.max(0, p - 1))}
          onNext={() => setLightboxIndex((p) => Math.min(category.photos.length - 1, p + 1))}
        />
      )}
    </div>
  )
}
