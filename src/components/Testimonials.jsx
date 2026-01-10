import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Mehta",
      age: 42,
      duration: "Alcohol-free for 3 years",
      quote: "Yugantar saved my life. After 15 years of alcohol dependency, I had lost all hope. The compassionate staff and structured program helped me rebuild my life from scratch. Today, I'm running my business successfully and enjoying time with my family.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      name: "Sanjay Kumar",
      age: 38,
      duration: "Sober for 2 years",
      quote: "The holistic approach at Yugantar made all the difference. It wasn't just about quitting alcohol, but learning to live without it. The aftercare support has been invaluable in maintaining my sobriety through challenging times.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    },
    {
      name: "Vikram Singh",
      age: 45,
      duration: "Alcohol-free for 4 years",
      quote: "As a businessman, I was skeptical about rehabilitation. But Yugantar's professional approach and complete privacy convinced me. The medical team was exceptional, and the counseling sessions changed my perspective on life.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
      name: "Anita Desai",
      relation: "Wife of a patient",
      quote: "My husband's transformation at Yugantar has been miraculous. The family counseling sessions helped us heal our relationship and communicate better. We're grateful to the entire team for giving us our family back.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    },
    {
      name: "Rohit Nair",
      age: 35,
      duration: "Sober for 18 months",
      quote: "The medical supervision during detox was excellent. The staff was always available, and the therapy sessions helped me understand my triggers. The aftercare program keeps me accountable and supported.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
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
    <section id="testimonials" className="py-10 bg-gradient-to-b from-white to-teal-50/30">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            <span className="text-teal-600">Success</span> Stories
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-4"></div>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Real people, real transformations
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-l-4 border-teal-600">
              <div className="flex flex-col lg:flex-row items-center gap-6 p-8 lg:p-10">
                {/* Image with decorative elements */}
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-teal-100 rounded-full blur-2xl opacity-30"></div>
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name}
                    className="relative w-28 h-28 lg:w-36 lg:h-36 rounded-full object-cover border-4 border-white shadow-xl"
                  />

                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
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
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex 
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
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="text-3xl lg:text-4xl font-bold text-teal-600 mb-1">2000+</div>
              <div className="text-xs lg:text-sm text-gray-600">Successfully Treated</div>
            </div>
          </div>
          
          <div className="relative bg-white rounded-xl p-5 text-center shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-1">95%</div>
              <div className="text-xs lg:text-sm text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
          
          <div className="relative bg-white rounded-xl p-5 text-center shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-1">85%</div>
              <div className="text-xs lg:text-sm text-gray-600">Sober After 1 Year</div>
            </div>
          </div>
          
          <div className="relative bg-white rounded-xl p-5 text-center shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="text-3xl lg:text-4xl font-bold text-orange-600 mb-1">500+</div>
              <div className="text-xs lg:text-sm text-gray-600">Families Reunited</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;