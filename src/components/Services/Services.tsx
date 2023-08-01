import { RiSuitcaseFill } from "react-icons/ri";
import { PiNotePencilThin } from "react-icons/pi";
import { LiaCommentDollarSolid } from "react-icons/lia";
import { SlDocs } from "react-icons/sl";
import { FaCarCrash } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link as ScrollLink, Element } from "react-scroll";

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScroll = () => {
    const animatedElement = document.getElementById("animated-content");
    if (!animatedElement) return;
    const elementPosition = animatedElement.getBoundingClientRect().top;
    const scrollPosition = window.scrollY;
    const triggerPointInVh = window.innerHeight * 0.75; // Aparecerá cuando esté a la mitad de la ventana
    setIsVisible(scrollPosition > elementPosition - triggerPointInVh);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col content justify-start mt-10 mx-20">
      {/* Este es el enlace de scroll que activará la animación */}
      <ScrollLink to="animated-content" smooth duration={1000}></ScrollLink>
      <Element name="animated-content" id="animated-content">
        <div
          className={`${
            isVisible
              ? "animate-fade-right animate-duration-1000 animate-ease-in-out"
              : "opacity-0"
          }`}
        >
          <ul className="flex flex-row justify-between mt-5 max-md:flex-col max-md:items-center">
            <li className="flex flex-col items-start text-justify w-80 p-8">
              <div className="flex flex-col items-center w-full mb-5">
                <RiSuitcaseFill className=" text-[#1B9AAA] text-5xl mb-4" />
                <h3 className="text-center text-2xl font-extrabold">
                  Trámites de Rentas
                </h3>
              </div>
              <p className="text-gray-600">
                - Altas y Bajas por cambio de radicación.
              </p>
              <p className="text-gray-600">
                - Baja de patentes por Siniestro, Robo, Hurto o Destrucción.
              </p>
              <p className="text-gray-600">- Alta de patentes por Recupero.</p>
              <p className="text-gray-600">
                - Estado de Deudas, Impresión de Boletas para el pago y pedido
                de Plan de Facilidades.
              </p>
              <p className="text-gray-600">- Cambio de titularidad.</p>
              <p className="text-gray-600">
                - Presentación de la Denuncia de Venta ante Rentas y ante el
                Tribunal de Faltas.
              </p>
            </li>
            <li className="flex flex-col items-start text-justify w-80 p-8">
              <div className="flex flex-col items-center w-full mb-5">
                <PiNotePencilThin className=" text-[#1B9AAA] text-5xl mb-4" />
                <h3 className="text-center text-2xl font-extrabold">
                  Trámites de Usados
                </h3>
              </div>
              <p className="text-gray-600">
                - Solicitud, renovación, revocación y pedido de duplicados de
                cédulas de identificación (verde) y autorizados a conducir (azul
                o rosa).
              </p>
              <p className="text-gray-600">- Duplicado de títulos.</p>
              <p className="text-gray-600">- Duplicado de chapas metálicas.</p>
              <p className="text-gray-600">
                - Transferencia por compraventa, sucesión, remate y otras
                operaciones.
              </p>
              <p className="text-gray-600">- Denuncia de compra.</p>
            </li>
            <li className="flex flex-col items-start text-justify w-80 p-8">
              <div className="flex flex-col items-center w-full mb-5">
                <LiaCommentDollarSolid className=" text-[#1B9AAA] text-5xl mb-4" />
                <h3 className="text-center text-2xl font-extrabold">
                  Venta de Vehículos
                </h3>
              </div>
              <p className="text-gray-600">- Denuncia de venta.</p>
              <p className="text-gray-600">
                - Llenado de la Verificación Policial (formulario 12).
              </p>
              <p className="text-gray-600">
                - Informes y certificados de dominio actuales e históricos para
                identificar a los titulares y si pesa algún tipo de prenda sobre
                el vehículo o inhibición..
              </p>
              <p className="text-gray-600">
                - Consulta de infracciones de tránsito en la totalidad de las
                juridicciones adheridas (formulario 13 i).
              </p>
            </li>
          </ul>

          <ul className="flex flex-row justify-between mt-5 max-md:flex-col max-md:items-center">
            <li className="flex flex-col items-start text-justify w-80 p-8">
              <div className="flex flex-col items-center w-full mb-5">
                <SlDocs className=" text-[#1B9AAA] text-5xl mb-4" />
                <h3 className="text-center text-2xl font-extrabold">
                  Otros trámites
                </h3>
              </div>
              <p className="text-gray-600">
                - Confección de contratos de prendas, inscripción y cancelación
                de las mismas.
              </p>
              <p className="text-gray-600">- Emisión de CETA </p>
              <p className="text-gray-600">
                - Emisión y pago de sellados para verificar su vehículo{" "}
              </p>
              <p className="text-gray-600">
                - R.U.T.A (emisión, renovación, y revocación) para Empresas y
                Particulares.{" "}
              </p>
              <p className="text-gray-600">- Altas y Bajas de motor</p>
              <p className="text-gray-600">
                - Levantamiento de Embargos, Inhibición
              </p>
            </li>
            <li className="flex flex-col items-start text-justify w-80 p-8">
              <div className="flex flex-col items-center w-full mb-5">
                <FaCarCrash className=" text-[#1B9AAA] text-5xl mb-4" />
                <h3 className="text-center text-2xl font-extrabold">
                  Trámites ante el Seguro
                </h3>
              </div>
              <p className="text-gray-600">
                - Bajas por Siniestro, Robo, Hurto, Destrucción y Altas por
                Recupero.
              </p>
              <p className="text-gray-600">
                - Baja del vehículo ante la delegación tributaria
                correspondiente
              </p>
              <p className="text-gray-600">
                - Consulta de infracciones en todo el país
              </p>
            </li>
            <li className="flex flex-col items-start text-justify w-80 p-8">
              <div className="flex flex-col items-center w-full mb-5">
                <FaCar className=" text-[#1B9AAA] text-5xl mb-4" />
                <h3 className="text-center text-2xl font-extrabold">
                  Trámites de 0km
                </h3>
              </div>
              <p className="text-gray-600">
                - Inscripción inicial (patentamientos) de su Automóvil,
                Motovehículo o Maquinaria agrícola
              </p>
              <p className="text-gray-600">
                - Asesoramiento integral sobre la documentación vinculada a su
                Automotor
              </p>
            </li>
          </ul>
        </div>
      </Element>
    </div>
  );
};

export default Services;
