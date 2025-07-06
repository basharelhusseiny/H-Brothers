import Image from "next/image";

const AboutSection = ({ dict }) => {
  return (
    <section className="relative">
      <div className="container mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-12 py-20 overflow-hidden">
        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col items-start">
          <span className="inline-block mb-5 px-4 py-1 rounded-full bg-sky-100 text-sky-700 font-semibold  shadow">
            {dict.aboutSection.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 drop-shadow-lg leading-tight">
            {dict.aboutSection.title}{" "}
            <span className="text-red-800">{dict.aboutSection.highlight}</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl leading-relaxed">
            {dict.aboutSection.description}
          </p>
          <ul className="mb-8 space-y-2 text-gray-600 text-base md:text-lg">
            <li className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-sky-500 rounded-full"></span>
              {dict.aboutSection.features[0]}
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-pink-400 rounded-full"></span>
              {dict.aboutSection.features[1]}
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full"></span>
              {dict.aboutSection.features[2]}
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-violet-400 rounded-full"></span>
              {dict.aboutSection.features[3]}
            </li>
          </ul>
        </div>
        <div className="relative z-10 flex-1 flex justify-center items-center">
          <div className="rounded-3xl flex overflow-hidden shadow-2xl border-2 border-gray-100 transition-transform hover:scale-105 duration-300">
            <Image
              src="/images/H-brothers.jpeg"
              alt="H BROTHERS Truck"
              width={420}
              height={280}
              className="object-cover w-full h-72"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
