import Slider from "../Slider/Slider";
import Navbar from "../Navbar/Navbar";
import Services from "../Services/Services";
import About from "../About Us/About";
import { FaWhatsappSquare } from "react-icons/fa";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Budgets from "../Budgets/Budgets";

const Home: React.FC = () => {
  return (
    <div className="">
      <section className="" id="home">
        <Navbar />
        <Slider />
      </section>
      <section className="py-8" id="services">
        <Services />
      </section>
      <section className="py-6 mb-6" id="about">
        <About />
      </section>
      <section id="budget" className=" pt-28">
        <Budgets/>
      </section>
      <section id="contact" className="pt-8 ">
        <Contact />
      </section>
      <Footer/>
      <a href="https://wa.me/5493493416819/?text=Hola%20Adriana%20tengo%20una%20consulta%20sobre%20">
        <FaWhatsappSquare className="text-[#25D366] text-5xl fixed bottom-6 right-6 z-50" />
      </a>
    </div>
  );
};

export default Home;
