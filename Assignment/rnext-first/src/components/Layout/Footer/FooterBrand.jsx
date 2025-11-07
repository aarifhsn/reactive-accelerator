import FooterBrandSocial from "./FooterBrandSocial";

export default function FooterBrand() {
  return (
    <>
      {/* Brand Section */}
      <div className="h-auto p-4 md:p-8 flex flex-col justify-start items-start gap-8">
        <div className="self-stretch flex justify-start items-center gap-3">
          <div className="text-center text-[#49423D] text-xl font-semibold leading-4">
            Brillance
          </div>
        </div>
        <div className="text-[rgba(73,66,61,0.90)] text-sm font-medium leading-[18px]">
          Coding made effortless
        </div>

        <FooterBrandSocial />
      </div>
    </>
  );
}
