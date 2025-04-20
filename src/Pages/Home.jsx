import Hero from "../components/sections/Hero";
import AboutMe from "../components/sections/AboutMe";
import Projects from "../components/sections/Projects";
import Platforms from "../components/sections/Platforms";
import Certificates from "../components/sections/Certificates";
import ContactForm from "../components/sections/ContactForm";
import Services from './../components/sections/Services';



export const Home = () => (
  <>
    <Hero />
    <AboutMe />
    <Services />
    <Projects />
    <Certificates />
    <Platforms />
    <ContactForm />
  </>
);
