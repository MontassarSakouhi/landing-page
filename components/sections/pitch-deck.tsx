"use client";

export function PitchDeck() {
  return (
    <section
      id={"contactus"}
      className="relative scroll-mt-10 z-10 py-8 md:py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#F3F4F8]"
    >
      <div className="max-w-7xl w-full mx-auto relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center">
        <video
          className="absolute inset-0 w-full h-full object-cover -z-10 rounded-[12px] sm:rounded-[16px] lg:rounded-[20px]"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#052E37]/90 -z-10 rounded-[12px] sm:rounded-[16px] lg:rounded-[20px]"></div>
        <div className="flex flex-col lg:flex-row items-center justify-around gap-4 sm:gap-6 lg:gap-8 w-full px-4 sm:px-6">
          <div className="max-w-xl flex flex-col items-center lg:items-start gap-4 sm:gap-6 lg:gap-8 text-center lg:text-left">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Submit Your Pitch Deck
            </h1>
            <h3 className="text-lg sm:text-xl md:text-2xl max-w-xs sm:max-w-sm lg:max-w-md">
              Submit your innovative ideas and start your growth journey with
              NEO Ventures
            </h3>
          </div>
          <a
            href="https://forms.gle/dsoNR7Hg9HYni7m26"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="rounded-full border-[1px] border-[#0097B7] bg-[#0097B7]/[17%] px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-6 font-bold text-lg sm:text-xl md:text-2xl hover:bg-[#0097B7]/[25%] transition-colors">
              Submit Your Pitch Deck
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
