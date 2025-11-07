import NavLink from "./NavLink";

export default function NavLinks() {
  return (
    <>
      {/* Nav Links  */}
      <div className="pl-3 sm:pl-4 md:pl-5 lg:pl-5 flex justify-start items-start hidden sm:flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-4">
        <NavLink label="Products" />
        <NavLink label="Pricing" />
        <NavLink label="Docs" />
      </div>
    </>
  );
}
