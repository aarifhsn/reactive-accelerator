import FooterBrand from "./FooterBrand";
import FooterNav from "./FooterNav";

export default function Footer() {
  return (
    <>
      {/* Footer Section */}
      <div className="w-full pt-10 flex flex-col justify-start items-start border-t border-[rgba(55,50,47,0.12)]">
        {/* Main Footer Content */}
        <div className="self-stretch h-auto flex flex-col md:flex-row justify-between items-stretch pr-0 pb-8 pt-0">
          <FooterBrand />

          <FooterNav />
        </div>

        {/* Bottom Pattern */}
        <div className="self-stretch h-12 relative overflow-hidden border-t border-b border-[rgba(55,50,47,0.12)]">
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <div className="w-full h-full relative">
              {/* Decorative pattern lines */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
