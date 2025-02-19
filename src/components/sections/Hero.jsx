import Section from "../Section"


export const Hero = () => {

  const stopeAnimation = (e) =>{
    e.preventDefault()
    e.target.classList.remove('motion-safe:animate-bounce')
  }
  const startAnimation = (e) =>{
    e.preventDefault()
    e.target.classList.add('motion-safe:animate-bounce')
  }
  return (
    <Section id={'hero'}>
      <div className="bg-[url('/hero-1366x1080.png')] bg-cover bg-no-repeat h-screen bg-center bg-fixed flex items-center justify-center">
        <div className="flex flex-col justify-center items-center">
          <img loading='lazy' src="/gk-logo-125x125-white.png" alt="logo" className="w-16 h-14 animate-pulse" />
          <h2 className="text-white font-extrabold text-4xl md:text-4xl">
              <span className="block">Gharieb Khalifa</span>
          </h2>
          <h2 className="text-white text-center text-lg ">
            <span>Frappe Developer</span>
            <span className="block">&</span>
            <span className=" ">Bussiness Analyst</span>
          </h2>
          <ul className=" flex gap-3 mt-2 justify-center">
            <li onMouseEnter={stopeAnimation} onMouseOut={startAnimation} className="">
              <a href="https://github.com/blacksnowsoon" rel="noreferrer" target="_blank" className="text-white">
              <img src="/github-mark-white.svg" alt="github" className="w-8 h-8 motion-safe:animate-bounce" loading="lazy"/>
              </a>
            </li>
            <li onMouseEnter={stopeAnimation} onMouseOut={startAnimation} className="">
              <a href="https://www.linkedin.com/in/gharieb-khalifa" rel="noreferrer" target="_blank" className="text-white ">
                <img src="/linkedin.svg" alt="linkedin" className="w-8 h-8 motion-safe:animate-bounce delay-1000" loading="lazy"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  )
}


export default Hero