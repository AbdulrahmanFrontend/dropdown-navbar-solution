import { useState } from "react";
import MobileMenu from "./MobileMenu";
const Navbar = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  return (
    <nav className="container mx-auto pt-4 flex justify-between items-center px-5">
      <img src="/images/logo.svg" alt="Snap logo" />
      <div className="md:flex hidden links w-5/6 justify-between">
        <ul className="anchors flex items-center gap-6">
          <li
            onMouseOver={() => setFeaturesOpen(true)}
            onMouseOut={() => setFeaturesOpen(false)}
            className="md:flex relative h-full"
          >
            <a href="#" className="flex items-center gap-2">
              Features
              <img
                src={`/images/icon-arrow-${featuresOpen ? "up" : "down"}.svg`}
                alt="arrow"
              />
            </a>
            <ul
              className={`${
                featuresOpen ? "block" : "hidden"
              } absolute top-9 right-0 bg-white shadow-lg rounded-lg p-6 w-48 space-y-3`}
            >
              <li className="flex items-center gap-3">
                <a href="#" className="flex items-center gap-3">
                  <img src="/images/icon-todo.svg" alt="Todo" />
                  Todo List
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a href="#" className="flex items-center gap-3">
                  <img src="/images/icon-calendar.svg" alt="Calendar" />
                  Calendar
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a href="#" className="flex items-center gap-3">
                  <img src="/images/icon-reminders.svg" alt="Reminders" />
                  Reminders
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a href="#" className="flex items-center gap-3">
                  <img src="/images/icon-planning.svg" alt="Planning" />
                  Planning
                </a>
              </li>
            </ul>
          </li>
          <li
            onMouseOver={() => setCompanyOpen(true)}
            onMouseOut={() => setCompanyOpen(false)}
            className="md:flex relative h-full"
          >
            <a href="#" className="flex items-center gap-2">
              Company
              <img
                src={`/images/icon-arrow-${companyOpen ? "up" : "down"}.svg`}
                alt="arrow"
              />
            </a>
            <ul
              className={`${
                companyOpen ? "block" : "hidden"
              } absolute left-0 top-9 bg-white shadow-lg rounded-lg p-6 w-48 space-y-3 z-10`}
            >
              <li className="flex items-center gap-3">
                <a href="#" className="flex items-center gap-3">
                  History
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a href="#" className="flex items-center gap-3">
                  Our Team
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a href="#" className="flex items-center gap-3">
                  Blog
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
        <div className="buttons">
          <div className="flex items-center space-x-6">
            <a href="#">Login</a>
            <a href="#" className="border-2 border-black px-4 py-2 rounded-xl">
              Register
            </a>
          </div>
        </div>
      </div>
      <button
        className="hidden max-md:block z-10"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <img
          src={
            mobileMenuOpen
              ? "/images/icon-menu.svg"
              : "/images/icon-close-menu.svg"
          }
          alt="Menu"
        />
      </button>
      <MobileMenu
        isOpen={mobileMenuOpen}
      />
    </nav>
  );
};
export default Navbar;
