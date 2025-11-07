import AuthButton from "./AuthButton";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

export default function HeaderContainer() {
  return (
    <>
      {/* Header Container */}
      <div className="w-full max-w-[calc(100%-32px)] sm:max-w-[calc(100%-48px)] md:max-w-[calc(100%-64px)] lg:max-w-[700px] lg:w-[700px] h-10 sm:h-11 md:h-12 py-1.5 sm:py-2 px-3 sm:px-4 md:px-4 pr-2 sm:pr-3 bg-[#F7F5F3] backdrop-blur-sm shadow-[0px_0px_0px_2px_white] overflow-hidden rounded-[50px] flex justify-between items-center relative z-30">
        <div className="flex justify-center items-center">
          <Logo />

          <NavLinks />
        </div>
        <div className="h-6 sm:h-7 md:h-8 flex justify-start items-start gap-2 sm:gap-3">
          <div className="px-2 sm:px-3 md:px-[14px] py-1 sm:py-[6px] bg-white shadow-[0px_1px_2px_rgba(55,50,47,0.12)] overflow-hidden rounded-full flex justify-center items-center cursor-pointer">
            <AuthButton />
          </div>
        </div>
      </div>
    </>
  );
}
