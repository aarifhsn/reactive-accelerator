export default function FooterNavColumn({ title, links }) {
  return (
    <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
      <h3 className="text-[rgba(73,66,61,0.50)] text-sm font-medium leading-5">
        {title}
      </h3>
      <div className="flex flex-col justify-start items-start gap-2">
        {links.map((link) => (
          <div
            key={link.label}
            onClick={() => (window.location.href = link.href)}
            className="text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors"
          >
            {link.label}
          </div>
        ))}
      </div>
    </div>
  );
}
