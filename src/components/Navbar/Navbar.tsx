import { useState } from "react";
import car from "../img/Car_Front.png";
import { Link } from "../../types";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [open, setOpen] = useState<boolean>(false);
  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  const Links: Link[] = [
    {
      name: "Inicio",
      link: "#home",
    },
    {
      name: "Servicios",
      link: "#services",
    },
    {
      name: "Nosotros",
      link: "#about",
    },
    {
      name: "Presupuestos",
      link: "#budget",
    },
    {
      name: "Contacto",
      link: "#contact",
    },
  ];

  return (
    <header className="bg-[#e5e6e4] fixed top-0 left-0 z-50 w-full items-center lg:pl-16 lg:pr-16 lg:flex ">
      <nav className="md:flex w-full justify-between items-center mx-5">
        <a href="#home" className="flex items-center z-50">
          <img className="w-24 h-24 mr-2" src={car} />
          <div className="">
            <h1 className="text-2xl text-gray-600 font-semibold ">Gestoría</h1>
            <h1 className="text-3xl font-extrabold text-[#eb5e28]">Adriana</h1>
          </div>
        </a>
        <div
          onClick={() => setOpen(!open)}
          className="lg:hidden cursor-pointer z-50 absolute right-8 top-8"
        >
          {open ? (
            <AiOutlineClose className="text-2xl hover:text-gray-500 duration-500" />
          ) : (
            <GiHamburgerMenu className="text-2xl hover:text-gray-500 duration-200" />
          )}
        </div>

        <ul
          className={`lg:flex lg:items-center lg:pb-0 max-lg:py-6 absolute lg:static bg-[#e5e6e4] lg:z-auto z-[-1] left-0 w-full lg:w-auto transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li className="lg:px-0 rounded p-3 ">
              <a
                onClick={() => handleSectionClick(`${link.name}`)}
                className={`${
                  activeSection === `${link.name}`
                    ? "px-3 text-xl text-[#eb5e28] font-black rounded"
                    : "px-3 text-xl block font-semibold text-gray-600 rounded hover:text-[#ef8354]  hover:max-lg:bg-white hover:max-lg:no-underline duration-300"
                }`}
                href={`${link.link}`}
              >
                {link.name}
              </a>
            </li>
          ))}
          
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
