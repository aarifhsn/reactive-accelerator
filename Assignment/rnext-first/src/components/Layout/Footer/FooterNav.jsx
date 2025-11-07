import FooterNavColumn from "./FooterNavColumn";
import { FOOTER_NAV_DATA } from "./footerNavData";

export default function FooterNav() {
  return (
    <div className="self-stretch p-4 md:p-8 flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start gap-6 md:gap-8">
      {FOOTER_NAV_DATA.map((column) => (
        <FooterNavColumn
          key={column.id}
          title={column.title}
          links={column.links}
        />
      ))}
    </div>
  );
}
