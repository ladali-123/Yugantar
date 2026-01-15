import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
];

import { useLanguage } from '../context/LanguageContext';

export default function PhotoGallery() {
  const { t } = useLanguage();
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;
    const scrollAmount = direction === "left" ? -350 : 350;
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section id="gallery" className="w-full py-14 bg-white">
      <h2 className="text-4xl font-bold text-center mb-10">{t('galleryHeading')}</h2>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full hover:scale-105 transition"
        >
          <ChevronLeft />
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="min-w-70 md:min-w-80 h-65 md:h-80 lg:h-90 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >


              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full hover:scale-105 transition"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}

/* Tailwind Utility (add once globally)
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
*/
