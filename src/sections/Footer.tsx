import Logo from "@/assets/logo.svg";
import SocialInsta from "@/assets/social-instagram.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import SocialX from "@/assets/social-x.svg";

const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="flex gap-2 items-center lg:flex-1">
            <Logo className="size-6" />
            <div className="text-sm font-medium">AI Startup Landing Page</div>
          </div>

          <div className="flex flex-col gap-5 lg:gap-7 text-sm text-white/70 justify-center lg:flex-row lg:items-center lg:flex-1">
            <a href="#" className="hover:text-white transition">
              Features
            </a>
            <a href="#" className="hover:text-white transition">
              Developers
            </a>
            <a href="#" className="hover:text-white transition">
              Company
            </a>
            <a href="#" className="hover:text-white transition">
              Blog
            </a>
            <a href="#" className="hover:text-white transition">
              Changelog
            </a>
          </div>

          <div className="flex gap-5 text-white/40 lg:flex-1 lg:justify-end">
            <SocialX className="size-6 hover:text-white transition" />
            <SocialInsta className="size-6 hover:text-white transition" />
            <SocialYoutube className="size-6 hover:text-white transition" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
