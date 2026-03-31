import { useState, useEffect } from "react";

interface ProjectCarousel {
  images: string[];
}

export default function ProjectCarousel({ images }: ProjectCarousel) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex mx-auto relative w-[70%] h-auto overflow-hidden rounded-2xl justify-center border border-blue-800">
      {/* IMAGE TRACK */}

      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className="w-full flex-shrink-0 object-cover aspect-video max-h-[300px]"
          />
        ))}
      </div>

      {/* DOT INDICATORS */}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full transition
            ${index === i ? "bg-blue-500" : "bg-white/80"}`}
          />
        ))}
      </div>
    </div>
  );
}
