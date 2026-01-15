import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Counter = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};


const Testimonials = () => {
  const { t } = useLanguage();
  const testimonials = [
    {
      name: t('testimonial1Name'),
      age: 42,
      duration: t('testimonial1Duration'),
      quote: t('testimonial1Quote'),
      rating: 5,
      image: "https://plus.unsplash.com/premium_photo-1682089804117-cea5d901647f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmVzc2lvbmFsJTIwbWFuJTIwaW5kaWFufGVufDB8fDB8fHww"

    },
    {
      name: t('testimonial2Name'),
      age: 38,
      duration: t('testimonial2Duration'),
      quote: t('testimonial2Quote'),
      rating: 5,
      image: "https://images.unsplash.com/photo-1609770653328-a4d1dd377970?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGluZGlhbiUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D"

    },
    {
      name: t('testimonial3Name'),
      age: 45,
      duration: t('testimonial3Duration'),
      quote: t('testimonial3Quote'),
      rating: 5,
      image: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGluZGlhbiUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D"

    },
    {
      name: t('testimonial4Name'),
      relation: t('testimonial4Relation'),
      quote: t('testimonial4Quote'),
      rating: 5,
      image: "https://plus.unsplash.com/premium_photo-1681483544221-e04d719060ff?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    },
    {
      name: t('testimonial5Name'),
      age: 35,
      duration: t('testimonial5Duration'),
      quote: t('testimonial5Quote'),
      rating: 5,
      image: "https://media.istockphoto.com/id/1315976553/photo/portrait-of-a-smiling-man-of-indian-origin.webp?a=1&b=1&s=612x612&w=0&k=20&c=q3XnkehXZShGGerEGnuMNkZtennMr7Jb5d67evwJDg4="

    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="py-10 bg-linear-to-b from-white to-teal-50/30">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            {t('testimonialsHeading')}
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-4"></div>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            {t('testimonialsSubtitle')}
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-l-4 border-teal-600">
              <div className="flex flex-col lg:flex-row items-center gap-6 p-8 lg:p-10">
                {/* Image with decorative elements */}
                <div className="relative shrink-0">
                  <div className="absolute inset-0 bg-teal-100 rounded-full blur-2xl opacity-30"></div>
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="relative w-28 h-28 lg:w-36 lg:h-36 rounded-full object-cover border-4
                     border-white shadow-xl"
                  />

                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-base lg:text-lg text-gray-700 mb-4 leading-relaxed italic">
                    "{testimonials[activeIndex].quote}"
                  </p>

                  <div className="border-t border-gray-100 pt-2">
                    <h4 className="text-lg font-bold text-gray-900">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-sm text-teal-600 font-medium mt-1">
                      {testimonials[activeIndex].relation || `${testimonials[activeIndex].duration}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 bg-teal-600 text-white
               w-11 h-11 lg:w-12 lg:h-12 rounded-full shadow-lg flex items-center justify-center
                hover:bg-teal-700 transition-all hover:scale-110"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 bg-teal-600 text-white w-11 h-11 lg:w-12 lg:h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-teal-700 transition-all hover:scale-110"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`h-2 rounded-full transition-all ${index === activeIndex
                  ? 'bg-teal-600 w-8'
                  : 'bg-gray-300 w-2 hover:bg-teal-400'
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          <div className="relative bg-white rounded-xl p-5 text-center shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
            <div className="absolute inset-0 bg-linear-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="text-3xl lg:text-4xl font-bold text-teal-600 mb-1">
                <Counter end={2000} suffix="+" />
              </div>

              <div className="text-xs lg:text-sm text-gray-600">Successfully Treated</div>
            </div>
          </div>

          <div className="relative bg-white rounded-xl p-5 text-center shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
            <div className="absolute inset-0 bg-linear-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-1">
                <Counter end={95} suffix="+" />
              </div>              
              <div className="text-xs lg:text-sm text-gray-600">Satisfaction Rate</div>
            </div>
          </div>

          <div className="relative bg-white rounded-xl p-5 text-center shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-1">
                <Counter end={85} suffix="+" />
              </div>              
              <div className="text-xs lg:text-sm text-gray-600">Sober After 1 Year</div>
            </div>
          </div>

          <div className="relative bg-white rounded-xl p-5 text-center shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
            <div className="absolute inset-0 bg-linear-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="text-3xl lg:text-4xl font-bold text-orange-600 mb-1">
                <Counter end={500} suffix="+" />
              </div>              
              <div className="text-xs lg:text-sm text-gray-600">Families Reunited</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;