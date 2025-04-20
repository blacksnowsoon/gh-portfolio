import Section from "../Section"
import {FaGithub, FaLinkedin} from "react-icons/fa"

export const Hero = () => {

  return (
    <Section id={'hero'}>
      <div className="bg-[url('/laptop-glasses.jpg')] bg-cover bg-no-repeat h-screen bg-center bg-fixed flex items-center justify-center">
        <div className="flex justify-between items-center container">
          
          <div>
            <h2 className=" font-extrabold text-4xl md:text-4xl">
              Crafting Digital <br></br> Experiences with <br></br> Passion
                
            </h2>
            <br></br>
            <h2 className="text-lg ">
            Transforming ideas into elegant solutions through creative <br></br> design and innovative development
            </h2>
            <ul className=" flex gap-3 mt-2">
                <li data-aos="fade-right"  className="">
                  <a href="https://github.com/blacksnowsoon" rel="noreferrer" target="_blank" className="" title="GitHub">
                  <FaGithub className="text-3xl motion-safe:animate-bounce" />
                  </a>
                </li>
                <li data-aos="fade-left" className="">
                  <a href="https://www.linkedin.com/in/gharieb-khalifa" rel="noreferrer" target="_blank" className="" title="LinkedIn">
                    <FaLinkedin className="text-3xl motion-safe:animate-bounce delay-1000" />
                  </a>
                </li>
                <li data-aos="fade-left" className="">
                  <a href="https://mostaql.com/u/Gharieb_Khalefa/portfolio" rel="noreferrer" target="_blank" className="" title="Mostaql">
                    <img src="/mostaql-icon.png" alt="CV" className="w-7 h-7 motion-safe:animate-bounce delay-2000" />
                  </a>
                </li>
            </ul>
          </div>
          <div>
            

          </div>
        </div>
      </div>
    </Section>
  )
}


export default Hero