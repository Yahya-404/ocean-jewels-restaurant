import { useLogicProvider } from "@/context/ContextProvider";

interface NavbarLinksProps {
  customClass: string;
}

export const NavbarLinks = ({ customClass }: NavbarLinksProps) => {
  const { setIsMenuActive } = useLogicProvider();

  const links = [
    { path: "/#", label: "Home" },
    { path: "/#about", label: "About" },
    { path: "/#menu", label: "Menu" },
    { path: "/#faq", label: "FAQs" },
    { path: "/#blog", label: "Blog" },
    { path: "/#contact", label: "Contact" },
  ];

  return (
    <ul className={`flex items-center gap-2 ${customClass}`}>
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.path}
            onClick={() => setIsMenuActive(false)}
            className="relative text-primary-100 font-medium text-sm py-2 px-4 rounded-full transition-500 hover:bg-background hover:text-accent hover:shadow-inset-navbar-links"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
};
