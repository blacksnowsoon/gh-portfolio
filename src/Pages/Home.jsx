import ContactForm from "../components/ContactForm";
import Hero from "../components/Hero";
import Platforms from "../components/Platforms";
import Projects from "../components/Projects";



export const Home = () => (
  <div className="flex w-full flex-col bg-slate-950 ">
    <Hero />
    <Projects />
    <Platforms />
    <ContactForm />
  </div>
);
