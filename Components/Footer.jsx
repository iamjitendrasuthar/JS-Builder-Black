const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="bg-[#141414] border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <span className="text-white text-3xl font-bold tracking-tight mb-4 block">
              Buildio*
            </span>
            <p className="text-neutral-400 max-w-sm mb-8 text-lg">
              Thoughtful design for everyday living, crafted with comfort and
              style in mind.
            </p>
            <button
              onClick={() => setCurrentPage("contact")}
              className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors inline-flex items-center cursor-pointer"
            >
              Get in touch
            </button>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 text-lg">Links</h4>
            <ul className="space-y-4">
              {["About", "Services", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() =>
                      link === "Contact"
                        ? setCurrentPage("contact")
                        : setCurrentPage("home")
                    }
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 text-lg">Socials</h4>
            <ul className="space-y-4">
              {["X / Twitter", "LinkedIn", "Instagram", "Facebook"].map(
                (social) => (
                  <li key={social}>
                    <a
                      href="#"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      {social}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        <div
          className="pt-3 pb-1 border-t border-white/10 
  w-screen relative left-1/2 -translate-x-1/2"
        >
          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
  flex flex-col md:flex-row justify-between items-center
  text-sm text-neutral-500"
          >
            <p>Copyright © 2026 - All Right Reserved</p>
            <p className="mt-1 md:mt-0">Designed & Developed by Jitendra</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
