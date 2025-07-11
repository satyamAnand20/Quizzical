function NormalShapes({ className = "" }) {
  return (
    <div className={`absolute inset-0 pointer-events-none z-0 ${className}`}>
      {/* Squares */}
      <div className="absolute top-10 left-10 w-16 h-16 border border-white/10 rotate-12" />
      <div className="absolute top-40 right-20 w-20 h-20 border border-white/10 rotate-6" />
      <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-white/10 rotate-45" />
      <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/10" />
      <div className="absolute top-[55%] left-10 w-12 h-12 border border-white/10 rotate-12" />

      {/* Circles */}
      <div className="absolute top-20 left-[40%] w-16 h-16 border-2 border-white/10 rounded-full" />
      <div className="absolute bottom-[10%] left-[35%] w-10 h-10 border-2 border-white/10 rounded-full" />
      <div className="absolute top-[30%] right-[15%] w-12 h-12 border border-white/10 rounded-full" />
      <div className="absolute top-[10%] left-[20%] w-12 h-12 border-2 border-white/10 rounded-full" />

      {/* Triangles */}
      <svg
        className="absolute top-[15%] right-[30%] w-16 h-16 stroke-white/10"
        viewBox="0 0 100 100"
      >
        <polygon points="50,0 100,100 0,100" fill="none" strokeWidth="2" />
      </svg>
      <svg
        className="absolute bottom-[20%] left-[10%] w-16 h-16 stroke-white/10 rotate-180"
        viewBox="0 0 100 100"
      >
        <polygon points="50,0 100,100 0,100" fill="none" strokeWidth="2" />
      </svg>
      <svg
        className="absolute top-[45%] left-[20%] w-12 h-12 stroke-white/10 rotate-12"
        viewBox="0 0 100 100"
      >
        <polygon points="50,0 100,100 0,100" fill="none" strokeWidth="2" />
      </svg>

      {/* Crosses */}
      <div className="absolute top-[35%] left-[60%] w-4 h-4 border-l-2 border-white/10 border-t-2 rotate-45" />
      <div className="absolute bottom-[25%] right-[35%] w-5 h-5 border-l-2 border-white/10 border-t-2 rotate-45" />

      {/* Stars */}
      <svg
        className="absolute top-[25%] left-[75%] w-10 h-10 stroke-white/10"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          strokeWidth="1.5"
          d="M12 2 L15 8 L22 9 L17 14 L18 21 L12 18 L6 21 L7 14 L2 9 L9 8 Z"
        />
      </svg>
      <svg
        className="absolute bottom-[15%] right-[15%] w-10 h-10 stroke-white/10"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          strokeWidth="1.5"
          d="M12 2 L15 8 L22 9 L17 14 L18 21 L12 18 L6 21 L7 14 L2 9 L9 8 Z"
        />
      </svg>
    </div>
  );
}
export default NormalShapes;
