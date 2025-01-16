interface NavLinksProps {
  activeSection: string;
  handleNavigation: (sectionId: string) => void;
  getLinkClasses: (section: string) => string;
  isMobile?: boolean;
  onMobileClick?: () => void;
}

export default function NavLinks({
  handleNavigation,
  getLinkClasses,
  isMobile,
  onMobileClick,
}: NavLinksProps) {
  const links = [
    { id: "/", text: "Home" },
    { id: "#about", text: "About" },
    { id: "#projects", text: "Projects" },
    { id: "#contact", text: "Contact" },
  ];

  const handleClick = (id: string) => {
    handleNavigation(id);
    if (isMobile && onMobileClick) {
      onMobileClick();
    }
  };

  return (
    <>
      {links.map(({ id, text }) => (
        <button
          key={id}
          onClick={() => handleClick(id)}
          className={`${getLinkClasses(id)} ${
            isMobile ? "block w-full text-left px-3 py-2" : ""
          }`}
        >
          {text}
        </button>
      ))}
    </>
  );
}
