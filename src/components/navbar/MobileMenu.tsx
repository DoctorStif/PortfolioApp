import NavLinks from "./NavLinks";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  handleNavigation: (sectionId: string) => void;
  getLinkClasses: (section: string) => string;
}

export default function MobileMenu({
  isOpen,
  onClose,
  activeSection,
  handleNavigation,
  getLinkClasses,
}: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900">
        <NavLinks
          activeSection={activeSection}
          handleNavigation={handleNavigation}
          getLinkClasses={getLinkClasses}
          isMobile={true}
          onMobileClick={onClose}
        />
      </div>
    </div>
  );
}

export function MobileMenuButton({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="rounded-md p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
      aria-label="Toggle mobile menu"
    >
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {isOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        )}
      </svg>
    </button>
  );
}
