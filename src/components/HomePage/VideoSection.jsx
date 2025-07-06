const VideoSection = ({ dict }) => {
  return (
    <section className="relative mt-10 flex flex-col items-center justify-center bg-gradient-to-br from-white via-[#f5f7fa] to-white py-24 px-4 overflow-hidden">
      {/* Decorative blurred circles */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-sky-500 opacity-30 rounded-full filter blur-3xl z-0 animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-[30rem] h-[30rem] bg-red-700 opacity-20 rounded-full filter blur-3xl z-0 animate-pulse" />
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-6xl bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-200 p-4 md:p-12">
        <h2 className="text-red-800 text-3xl md:text-5xl font-extrabold mb-4 tracking-wide drop-shadow-lg text-center">
          {dict.video.title}
        </h2>
        <p className="text-gray-700 text-lg md:text-xl mb-8 text-center max-w-2xl drop-shadow">
          {dict.video.description}
        </p>
        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg border-2 border-gray-200 bg-black max-w-full min-h-[220px] md:min-h-[400px]">
          <iframe
            src="https://www.youtube.com/embed/Y9wyO10wUpU"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
