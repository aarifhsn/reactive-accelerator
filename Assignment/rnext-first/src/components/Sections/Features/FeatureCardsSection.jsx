import FeatureCard from "./FeatureCard";

export default function FeatureCardsSection() {
  return (
    <>
      {/* Background Pattern */}
      <div className="absolute top-[232px] sm:top-[248px] md:top-[264px] lg:top-[320px] left-1/2 transform -translate-x-1/2 z-0 pointer-events-none">
        <svg
          className="w-[936px] sm:w-[1404px] md:w-[2106px] lg:w-[2808px] h-auto opacity-30 sm:opacity-40 md:opacity-50 mix-blend-multiply"
          style={{
            filter: "hue-rotate(15deg) saturate(0.7) brightness(1.2)",
          }}
          viewBox="0 0 2808 1200"
          preserveAspectRatio="xMidYMid slice"
        >
          <rect width="100%" height="100%" fill="none" />
        </svg>
      </div>

      <div className="self-stretch border-t border-[#E0DEDB] border-b border-[#E0DEDB] flex justify-center items-start mt-60">
        {/* Left Pattern */}
        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
          <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            <div id="pattern-template">
              <div className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"></div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <FeatureCard />

        {/* Right Pattern */}
        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
          <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            <div id="pattern-template-2">
              <div className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
