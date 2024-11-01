import { Logo } from "./shared/routes";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { MdAccessTime } from "react-icons/md";

export const Footer = () => {
  const links = [
    { path: "#", label: "Home" },
    { path: "#about", label: "About" },
    { path: "#menu", label: "Menu" },
    { path: "#contact", label: "Contact" },
  ];
  const socials = [
    { icon: <FaFacebookF /> },
    { icon: <FaInstagram /> },
    { icon: <FaYoutube /> },
    { icon: <FiGithub /> },
  ];

  return (
    <footer className="relative border-t border-solid border-[#cccccc66]">
      <div className="container flex-start max-lg:flex-col gap-16 py-16">
        {/* Col-01 */}
        <div className="basis-1/4">
          <Logo />
          <p className="text-primary-200 my-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia,
            tenetur.
          </p>
          <ul id="social-icons" className="flex items-center gap-3">
            {socials.map((social, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="bg-social-icons inline-block text-accent p-4 text-xl shadow-social rounded-full hover:bg-none hover:bg-accent hover:text-white"
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Col-02 */}
        <div className="basis-1/4">
          <h3 className="text-2xl mb-6">Open Hours</h3>
          <ul>
            <li className="flex items-center gap-2 text-accent mb-2">
              <MdAccessTime fontSize={22} />
              <span className="text-primary-200">
                Mon-Thurs
                <br />9 AM - 22 PM
              </span>
            </li>
            <li className="flex items-center gap-2 text-accent">
              <MdAccessTime fontSize={22} />
              <span className="text-primary-200">
                Fri-Sun
                <br />
                11 AM - 22 PM
              </span>
            </li>
          </ul>
        </div>
        {/* Col-03 */}
        <div className="basis-1/4">
          <h3 className="text-2xl mb-6">Links</h3>
          <ul className="flex flex-col gap-2">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.path}
                  className="text-primary-100 transition-500 hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Col-04 */}
        <div className="basis-1/4">
          <h3 className="text-2xl mb-6">Company</h3>
          <ul>
            <li className="text-primary-200">Terms & Conditions</li>
            <li className="text-primary-200 my-2">Privacy Policy</li>
            <li className="text-primary-200">Cookie Policy</li>
          </ul>
        </div>
      </div>
      {/* Copyright-text */}
      <div className="border-t border-solid border-[#cccccc66] text-center py-4">
        <p className="text-primary-100">
          Made with ❤️ by{" "}
          <a
            href="https://github.com/Yahya-404"
            className="text-accent font-bold cursor-pointer"
          >
            Yahya-HM{" "}
          </a>
          &bull; All rights reserved.
        </p>
      </div>
    </footer>
  );
};
