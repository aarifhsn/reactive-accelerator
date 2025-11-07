import GridIcon from "../../Icons/GridIcon.jsx";
import SectionHeader from "../SectionHeader.jsx";
import SectionTitleButton from "../SectionTitleButton.jsx";
import ServiceCard from "./ServiceCard.jsx";
import { SERVICES_DATA } from "./serviceData.js";

export default function ServicesSection() {
  return (
    <>
      {/* Services Section */}
      <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
        {/* Header */}
        <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
          <div className="w-full max-w-[616px] lg:w-[616px] px-4 sm:px-6 py-4 sm:py-5 shadow-none overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4">
            {/* Badge */}
            <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
              <GridIcon />

              <SectionTitleButton label="Services" />
            </div>

            <SectionHeader
              title="Built for absolute clarity and focused work"
              content={
                <>
                  Stay focused with tools that organize, connect
                  <br />
                  and turn information into confident decisions.
                </>
              }
            />
          </div>
        </div>

        {/* Features Content */}
        <div className="self-stretch flex justify-center items-start">
          {/* Left Pattern */}
          <div className="w-12 self-stretch relative overflow-hidden hidden md:block">
            <div className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
              <div id="pattern-template-3">
                <div className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"></div>
              </div>
            </div>
          </div>

          {/* Grid Content */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
            {/* Service Cards */}

            {SERVICES_DATA.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>

          {/* Right Pattern */}
          <div className="w-12 self-stretch relative overflow-hidden hidden md:block">
            <div className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
              <div id="pattern-template-4">
                <div className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
