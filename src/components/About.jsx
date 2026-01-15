import React from "react";
import pink from "../assets/pink.jpg";
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="relative py-12 overflow-hidden">
      
      {/* Background Image */}
      <img
        src={pink}
        alt="About Abhasa"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Heading */}
          <h2 className="text-3xl lg:text-3xl xl:text-4xl font-bold
           text-white mb-6 leading-tight text-center"> {t('aboutHeading')} </h2>

          <p className="text-base lg:text-base
            text-gray-100 mb-6 leading-relaxed text-justify font-semibold"> {t('aboutParagraph1') || `Take full charge of your life
             and confidently step into a healthier, happier future. We are always here to support you with 
             practical guidance, effective tools, and a compassionate community that truly understands your
              journey. Our programs help individuals overcome alcohol addiction through structured treatment,
               emotional support, evidence-based recovery strategies. With professional medical guidance and 
               a focus on safe,responsible care, we empower you to achieve lasting recovery, regain control of 
               your life, and move toward a stable future.`} </p>

               <p className="text-base lg:text-base text-gray-100 mb-6 leading-relaxed font-semibold"> 
                {t('aboutParagraph2') || `With proven methods, expert advice, and inspiring real-life success stories, we make recovery 
                not just achievable, but truly empowering. Every step you take with us brings you closer to the
                 life you deserve, full of energy, confidence, freedom, and inner happiness. Our supportive community
                  and personalized guidance ensure you never walk this journey alone. Start today, embrace the process, 
                  and let us build a brighter, stronger, and better tomorrow together one step at a time with trust, care,
                   and unwavering support.`} </p>

        </div>
      </div>
    </section>
  );
};

export default About;
