import React from "react";

import GayathriImg from "../assets/gayathri.jpg";
import RohitImg from "../assets/rohit.jpg";
import AnanyaImg from "../assets/ananya.jpg";

const teamMembers = [
  {
    name: "Mrs. Gayathri Arvind",
    role: "Founder & Managing Director",
    image: GayathriImg,
    description:
      "Mrs. Gayathri Arvind is an entrepreneur, philanthropist, and mental health advocate.She founded Abhasa with the vision of providing a humane, holistic, and compassionate approach to addiction recovery.Her focus is on physical, mental, and emotional healing without coercion or suppression, ensuring dignity and long-term wellness for every individual.",
  },
  {
    name: "Dr. Rohit Garg",
    role: "Senior Consultant & Managing Director",
    image: RohitImg,
    description:
      "Dr. Rohit Garg is the Director of Mind Vriksha Clinic, New Delhi, and plays a pivotal role in addiction treatment at Abhasa.specializes in adult, child, and geriatric psychiatry, providing expert care across all age groups.Dr. Garg is renowned for his work in Cognitive Behavioral Therapy and advanced neuropsychiatric techniques, combining science with empathy to achieve effective outcomes.",
      
  },
  {
    name: "Dr. Ananya Sharma",
    role: "Consultant Psychiatrist",
    image: AnanyaImg,
    description:
      "Dr. Ananya Sharma is a consultant psychiatrist with extensive experience in addiction psychiatry, mood disorders, and trauma-focused care.She emphasizes evidence-based treatment combined with empathy, ensuring each patient receives personalized care.Her approach focuses on dignity, understanding, and long-term mental wellness for every individual.",
  },
];

export default function MeetOurTeam() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-8xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-teal-700">Expert Team</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experienced professionals dedicated to ethical, compassionate, and long-term recovery
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
              <div className="flex-shrink-0 w-48 md:w-1/5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[220px] object-cover rounded-2xl shadow-md"
                />
              </div>

              {/* Content */}
              <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm max-w-3xl">
                <h3 className="text-2xl font-semibold text-teal-700 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-gray-500 mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
