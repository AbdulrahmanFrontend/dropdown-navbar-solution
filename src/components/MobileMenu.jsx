import { useState } from "react";
const MobileMenu = ({ isOpen }) => {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  if (isOpen) return null;
  return (
    <div className="mobile-menu hidden max-md:block fixed right-0 top-0 w-2/3 h-screen px-10 bg-white">
      <ul className="mt-20 space-y-6">
        <li
          onMouseOver={() => setFeaturesOpen(true)}
          onMouseOut={() => setFeaturesOpen(false)}
        >
          <a href="#" className="flex items-center gap-5 w-full">
            Features
            <img
              src={`/images/icon-arrow-${featuresOpen ? "up" : "down"}.svg`}
              alt="arrow"
            />
          </a>

          {featuresOpen && (
            <ul className="mt-4 pl-6 space-y-4">
              <li>
                <a href="#" className="flex items-center gap-4">
                  <img src="/images/icon-todo.svg" alt="Todo" />
                  Todo List
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-4">
                  <img src="/images/icon-calendar.svg" alt="Calendar" />
                  Calendar
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-4">
                  <img src="/images/icon-reminders.svg" alt="Reminders" />
                  Reminders
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-4">
                  <img src="/images/icon-planning.svg" alt="Planning" />
                  Planning
                </a>
              </li>
            </ul>
          )}
        </li>
        <li
          onMouseOver={() => setCompanyOpen(true)}
          onMouseOut={() => setCompanyOpen(false)}
        >
          <a href="#" className="flex items-center gap-5 w-full">
            Company
            <img
              src={`/images/icon-arrow-${companyOpen ? "up" : "down"}.svg`}
              alt="arrow"
            />
          </a>

          {companyOpen && (
            <ul className="mt-4 pl-6 space-y-4">
              <li>
                <a href="#" className="flex items-center gap-4">
                  History
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-4">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-4">
                  Blog
                </a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
      <div className="mt-5 space-y-4">
        <a href="#" className="block w-full text-center">
          Login
        </a>
        <a
          href="#"
          className="text-center block w-full border-2 rounded-xl py-2"
        >
          Register
        </a>
      </div>
    </div>
  );
};
export default MobileMenu;
