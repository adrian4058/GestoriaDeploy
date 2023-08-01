import SlickSlider from "react-slick";
import { SliderSettings } from "../../types";
// import "./Slider.css"
import img1 from "../img/audia4.jpg";
import img2 from "../img/audia4-2.jpg";
import img3 from "../img/audia4-3.jpg";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Slider: React.FC = () => {
  const settings: SliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    style: { margin: "0px", padding: "0px", left: "0px", right: "0px" },
  };

  return (
    <div>
      <SlickSlider
        className="animate-fade-right animate-once animate-duration-1000 animate-delay-[450ms]"
        {...settings}
      >
        <img
          className="w-[90%] h-screen object-cover md:w-2/3 lg:w-1/2"
          src={img1}
        />
        <img
          className="w-[90%] h-screen object-cover md:w-2/3 lg:w-1/2"
          src={img2}
        />
        <img
          className="w-[90%] h-screen object-cover md:w-2/3 lg:w-1/2"
          src={img3}
        />
      </SlickSlider>
      <h1 className="bg-[#05050596] absolute bottom-24 left-16 z-30 font-bold md:text-3xl p-2 rounded-lg text-white ">
        GESTIÓN Y ASESORAMIENTO DE DOCUMENTACIÓN AUTOMOTRIZ.
      </h1>
    </div>
  );
};

export default Slider;
