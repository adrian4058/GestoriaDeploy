import car from "../img/Car_Front.png";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import { IoMdMail } from "react-icons/io";

const Footer: React.FC = () => {
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
    <div className="w-full flex flex-col justify-between  py-6 bg-[#e5e6e4] border-t border-gray-400">
      <div className="md:flex h-3/4 justify-between items-center">
        <div className="flex flex-col space-y-2 justify-evenly items-center">
          <a href="#home" className="flex md:ml-32 w-fit items-center">
            <img className="w-20 h-20 " src={car} />
            <div className="flex flex-col items-center justify-center">
              <h1 className="absolute mb-5 text-1xl font-semibold ">
                Gestoría
              </h1>
              <h1 className="ml-6 mt-5 text-2xl font-extrabold text-[#eb5e28]">
                Adriana
              </h1>
            </div>
          </a>
          <ul className="flex md:space-x-7 space-x-3 md:ml-32 w-fit">
            <a className="flex items-center justify-center" href="">
              <li className="flex justify-center items-center w-[45px] h-[45px] bg-gray-300 rounded-[50%]">
                <AiFillInstagram className="text-[#E4405F] text-3xl hover:text-[#e4405fbb] " />
              </li>
            </a>
            <a href="">
              <li className="flex justify-center items-center w-[45px] h-[45px] bg-gray-300 rounded-[50%]">
                <AiFillFacebook className="text-[#1877F2] text-3xl hover:text-[#1877f2bb]" />
              </li>
            </a>
            <a href="mailto:gestoria.adriana81@gmail.com">
              <li className="flex justify-center items-center w-[45px] h-[45px] bg-gray-300 rounded-[50%] ">
                <IoMdMail className="text-[#0078D4] text-3xl hover:text-[#0078d4bb]" />
              </li>
            </a>
          </ul>
        </div>
        <ul className="flex flex-col md:mr-36 md:items-start items-center py-8 justify-center content-center space-y-1  ">
          {Links.map((link) => (
            <li className="text-sm font-medium text-gray-600 hover:text-[#ef8354]">
              <a href={`${link.link}`}>{`${link.name.toUpperCase()}`}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:flex md:py-6 max-md:space-y-5 justify-between items-center border-t max-md:pb-2 max-md:px-2 border-gray-600 pt-6">
        <h1 className="md:ml-32 ml-2 text-gray-600">
          ©2023 Gestoría Adriana. Todos los derechos reservados
        </h1>
        <a
          href="https://www.linkedin.com/in/adrian4058"
          className="flex text-base hover:text-cyan-500 items-center"
        >
          <h1 className="text-cyan-600 md:mr-32 underline flex items-center">
            Realizado por
            <AiFillLinkedin className="text-[#0A66C2] hover:text-cyan-500 text-lg ml-2" />
          </h1>
        </a>
      </div>
    </div>
  );
};

export default Footer;
