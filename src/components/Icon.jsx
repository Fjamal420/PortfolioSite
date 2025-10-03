export default function Icon({ label, icon, onClick }) {
  return (
    <div
      className="flex flex-col items-center cursor-pointer select-none"
      onClick={onClick}
    >
      {/* Render the PNG instead of text */}
      <img src={icon} alt={label} className="w-12 h-9 mb-1" />
      <p className="text-sm">{label}</p>
    </div>
  )
}
