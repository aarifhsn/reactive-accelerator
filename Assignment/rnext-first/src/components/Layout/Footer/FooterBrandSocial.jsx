import { GithubIcon, LinkedInIcon, XIcon } from "../../Icons";

export default function FooterBrandSocial() {
  return (
    <>
      {/* Social Icons */}
      <div className="flex justify-start items-start gap-4">
        {/* Twitter */}
        <div className="w-6 h-6 relative overflow-hidden">
          <XIcon />
        </div>
        {/* LinkedIn */}
        <div className="w-6 h-6 relative overflow-hidden">
          <LinkedInIcon />
        </div>
        {/* GitHub */}
        <div className="w-6 h-6 relative overflow-hidden">
          <GithubIcon />
        </div>
      </div>
    </>
  );
}
