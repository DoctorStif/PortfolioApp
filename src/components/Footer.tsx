const Footer = () => {
  return (
    <div className="mt-8 text-center text-gray-600 dark:text-gray-300">
      <p>Or reach out directly via:</p>
      <div className="mt-4 flex justify-center space-x-6">
        <a
          href="mailto:furkan4545234fy@gmail.com"
          className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/furkan-yilmaz-31b996239/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/DoctorStif"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};
export default Footer;
