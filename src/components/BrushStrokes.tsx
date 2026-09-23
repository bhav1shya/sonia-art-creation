export function BrushStroke({
  className = '',
  color = 'currentColor',
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 400 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
    >
      <path
        d="M3 18.5C45.5 12 110 8.5 178 12C246 15.5 330 19 397 10.5C365 24 285 27.5 212 25C139 22.5 58 24 3 18.5Z"
        fill={color}
        fillOpacity="0.85"
      />
      <path
        d="M20 22C75 16 160 14 240 18C300 21 370 20 390 14C350 25 270 28 190 26C110 24 45 25 20 22Z"
        fill={color}
        fillOpacity="0.4"
      />
    </svg>
  );
}

export function BrushStrokeCurve({
  className = '',
  color = 'currentColor',
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
    >
      <path
        d="M5 28C40 12 95 8 145 15C170 18.5 188 24 195 27C175 32 140 33 100 28C60 23 25 26 5 28Z"
        fill={color}
        fillOpacity="0.75"
      />
    </svg>
  );
}

export function PaletteSwatch({
  colors,
  className = '',
}: {
  colors: string[];
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      {colors.map((c, i) => (
        <span
          key={i}
          className="w-3.5 h-3.5 rounded-full border border-black/10 shadow-xs transition-transform hover:scale-125"
          style={{ backgroundColor: c }}
          title={`Color ${c}`}
        />
      ))}
    </div>
  );
}
