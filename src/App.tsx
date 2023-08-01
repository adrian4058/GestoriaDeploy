import Slider from "./components/Slider/Slider";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import About from "./components/About Us/About";
import Budgets from "./components/Budgets/Budgets";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { FaWhatsappSquare } from "react-icons/fa";


function App() {
  return (
    <div className="">
      <section>
        <Navbar/>
        <Slider/>
      </section>
      <section className="py-8" id="services">
        <Services/>
      </section>
      <section className="py-6 mb-6" id="about">
        <About/>
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
}

export default App;
