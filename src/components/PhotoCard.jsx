export default function PhotoCard({ photo, index, onClick }) {
  const SHADOW = '#F4A0C0'

  return (
    <div
      className="break-inside-avoid mb-8 cursor-pointer group select-none"
      onClick={onClick}
    >
      <div
        className="relative overflow-hidden transition-all duration-200"
        style={{
          border: '3px solid #000',
          boxShadow: `6px 6px 0px 0px ${SHADOW}`,
          backgroundColor: '#fff',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)'
          e.currentTarget.style.boxShadow = `12px 12px 0px 0px ${SHADOW}`
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0px)'
          e.currentTarget.style.boxShadow = `6px 6px 0px 0px ${SHADOW}`
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.transform = 'translateY(0px)'
          e.currentTarget.style.boxShadow = `2px 2px 0px 0px ${SHADOW}`
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)'
          e.currentTarget.style.boxShadow = `12px 12px 0px 0px ${SHADOW}`
        }}
      >
        <img
          src={photo}
          alt=""
          className="w-full h-auto block"
          loading="lazy"
        />
      </div>
    </div>
  )
}
