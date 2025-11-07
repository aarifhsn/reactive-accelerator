export default function NavLink({ label }) {
  return (
    <>
      <div className="flex justify-start items-center">
        <div className="flex flex-col justify-center text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-3.5 cursor-pointer">
          {label}
        </div>
      </div>
    </>
  );
}
