import React from "react";

const Features = () => {
  const features = [
    {
      title: "All Kinds Of Services For Addiction & Mental Health",
      description:
        "A range of treatment services for any & every kind of addiction & mental health problem.",
    },
    {
      title: "Rehab Experience In The Midst Of Lush Green Nature",
      description:
        "Breathtaking views, tranquil environment, & luxurious greenery to help patients unwind in the lap of nature.",
    },
    {
      title: "Government Authorized",
      description:
        "A government authorised facility that you can trust with your loved ones and rely upon.",
    },
    {
      title: "Customised & Client-Based Treatment Options",
      description:
        "Personalised treatment strategies to carve every individual’s unique path to recovery.",
    },
    {
      title: "Team Of Experts",
      description:
        "A team of trained & highly experienced individuals to address the unique challenges of every patient.",
    },
    {
      title: "Holistic Treatment Approach",
      description:
        "A holistic modern treatment approach to help patients recover physically, mentally, & emotionally.",
    },
  ];

  return (
   <section className="py-20 bg-gradient-to-b from-[#F7FAFD] to-[#F1FAF9]">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Why Choose <span className="text-[#0E6F73]">Yugantar</span>
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Compassionate, professional and nature-driven rehabilitation care
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((item, index) => (
        <div
          key={index}
          className="bg-white border border-[#E3F1F1] rounded-2xl p-8
          shadow-sm hover:shadow-xl hover:-translate-y-1
          transition-all duration-300"
        >
          {/* Accent Line */}
          <div className="w-12 h-1 
            bg-gradient-to-r from-[#0F4C81] to-[#0E6F73]
            rounded-full mb-4">
          </div>

          <h3 className="text-xl font-semibold text-[#0F4C81] mb-3">
            {item.title}
          </h3>

          <p className="text-gray-600 leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>

  );
};

export default Features;
