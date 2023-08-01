import penhand from "../img/PenHand.jpg";
import { useState, useEffect } from "react";
import { Link as ScrollLink, Element, scroller } from "react-scroll";

const About: React.FC = () => {
  const [isVisibleAbout, setIsVisibleAbout] = useState<boolean>(false);

  const handleScroll = () => {
    const animatedElementabout = document.getElementById(
      "animated-content-about"
    );
    if (!animatedElementabout) return;
    const elementPosition = animatedElementabout.getBoundingClientRect().top;
    const scrollPosition = window.scrollY;
    const triggerPointInVh = window.innerHeight * -0.5; // Aparecerá cuando esté a la mitad de la ventana
    setIsVisibleAbout(scrollPosition > elementPosition - triggerPointInVh);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full pt-28">
      {/* Este es el enlace de scroll que activará la animación */}
      <ScrollLink
        to="animated-content-about"
        smooth
        duration={2000}
      ></ScrollLink>
      <Element name="animated-content-about" id="animated-content-about">
        <div
          className={`${
            isVisibleAbout
              ? "flex flex-col md:flex-row animate-fade-down animate-once animate-duration-1200 animate-delay-[300ms] opacity-100"
              : "opacity-0"
          }`}
        >
          <img className="md:w-2/5 pl-9 max-md:pl-0 w-full " src={penhand} />
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-black text-[#1B9AAA] text-4xl max-md:pt-6">
              Sobre Nosotros
            </h1>
            <p className="max-md:px-6  px-20 py-4 text-justify text-gray-600 font-medium">
              El Mandatario del Automotor es el profesional certificado por la
              Dirección Nacional de Registros de la Propiedad Automotor y
              Créditos Prendarios, que te guía al momento de llevar a cabo
              cualquier tipo de trámite relacionado con tus vehículos. Gracias a
              su conocimiento profundo de las leyes y regulaciones aplicables,
              se asegura de proteger tu patrimonio y la inversión realizada en
              tu automóvil. Nuestro objetivo es garantizar que todas tus
              transacciones sean seguras, rápidas y confiables. Estamos
              comprometidos a ofrecerte un servicio de asesoramiento
              personalizado y atendemos todas tus inquietudes de manera
              efectiva. Trabajamos incansablemente para brindarte el soporte
              adecuado en todo momento.
            </p>
          </div>
        </div>
      </Element>
    </div>
  );
};

export default About;
