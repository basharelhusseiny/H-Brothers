const ServicesSection = ({ dict, header }) => {
  const serviceImages = {
    1: "/images/services/DSC09850.webp",
    2: "/images/services/DSC09860.webp",
    3: "/images/services/DSC09856.webp",
    4: "/images/services/DSC09937.webp",
    6: "/images/services/DSC09917.webp",
    7: "/images/services/DSC09923.webp",
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-white via-[#f5f7fa] to-white overflow-hidden">
      {/* Decorative blurred circles */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-sky-400 opacity-20 rounded-full filter blur-3xl z-0" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-400 opacity-20 rounded-full filter blur-3xl z-0" />
      {/* Logo background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <img
          src="/images/logo-h-brothers.png"
          alt="H Brothers Logo Background"
          className="w-[50vw] max-w-4xl opacity-30 select-none"
          draggable={false}
        />
      </div>
      <div className="container mx-auto px-5 relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center drop-shadow-lg">
          {header || ""}
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {dict.services.map((service) => (
            <div
              key={service.id}
              className="group bg-white/90 rounded-3xl shadow-xl border border-gray-100 p-7 flex flex-col h-full transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300"
            >
              <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 shadow-lg border border-gray-100">
                <img
                  src={serviceImages[service.id]}
                  alt={service.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold text-red-800 mb-3 group-hover:text-sky-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-800 font-medium mb-2">
                {service.descOne}
              </p>
              <p className="text-gray-600 text-[17px]">{service.descTwo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
