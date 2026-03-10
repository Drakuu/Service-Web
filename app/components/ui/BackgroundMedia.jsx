export default function BackgroundMedia({ variant = "abstract", src, overlayOpacity = "bg-black/60", className = "" }) {
  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}>
      {variant === "video" ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${src})` }}
        />
      )}
      
      {/* Overlay to ensure maximum legibility for text on top */}
      <div className={`absolute inset-0 ${overlayOpacity}`} />
    </div>
  );
}
