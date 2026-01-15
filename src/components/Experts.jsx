import React from "react";
import { useLanguage } from '../context/LanguageContext';

import GayathriImg from "../assets/gayathri.jpg";
import RohitImg from "../assets/rohit.jpg";
import AnanyaImg from "../assets/ananya.jpg";

const teamMembers = [
  {
    name: 'expert1Name',
    role: 'expert1Role',
    image: GayathriImg,
    description: 'expert1Desc',
  },
  {
    name: 'expert2Name',
    role: 'expert2Role',
    image: RohitImg,
    description: 'expert2Desc',
  },
  {
    name: 'expert3Name',
    role: 'expert3Role',
    image: AnanyaImg,
    description: 'expert3Desc',
  },
];

export default function MeetOurTeam() {
  const { t } = useLanguage();

  return (
    <section id="experts" className="py-16 bg-gray-50">
      <div className="max-w-8xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('expertsHeading')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('expertsSubtitle')}
          </p>
        </div>

        {/* Team Members */}
        <div className="space-y-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center justify-center gap-8 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="shrink-0 w-48 md:w-1/5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-55 object-cover rounded-2xl shadow-md"
                />
              </div>

              {/* Content */}
              <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm max-w-3xl">
                <h3 className="text-2xl font-semibold text-teal-700 mb-1">
                  {t(member.name)}
                </h3>
                <p className="text-sm font-medium text-gray-500 mb-4">
                  {t(member.role)}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {t(member.description)}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
