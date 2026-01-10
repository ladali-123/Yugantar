import { ArrowUpRight } from "lucide-react";

const services = [
  "12 Step Program",
  "Alcoholism Treatment",
  "Ayurveda Treatment",
  "Counseling",
  "AA & NA Meetings",
  "Anxiety Management",
  "Corporate Program",
  "Depression Treatment",
];

export default function ServicesOffered() {
  return (
    <section className="py-16 bg-[#FBF6EC]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Services Offered
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex items-center justify-between
              border-b border-gray-300 pb-4"
            >
              <span className="text-base md:text-lg font-medium text-gray-800">
                {service}
              </span>

              <ArrowUpRight
                className="w-4 h-4 text-teal-700
                transition-transform duration-200
                group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12 text-center">
          <button
            className="inline-flex items-center gap-2
            bg-teal-700 text-white px-6 py-2.5
            rounded-full text-sm font-medium
            hover:bg-teal-800 transition"
          >
            View More
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
