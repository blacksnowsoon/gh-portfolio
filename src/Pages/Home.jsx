import ContactForm from "../components/ContactForm";
import Hero from "../components/Hero";
import Platforms from "../components/Platforms";
import Projects from "../components/Projects";
import PageContent from "./PageContent";
import Certificates from "../components/sections/Certificates";

export const Home = () => (
  <PageContent>
    <Hero />
    <Projects />
    <Platforms />
    <Certificates />
    <ContactForm />
  </PageContent>
);
