

export const Hero = () => {

  return (
    <div className="bg-[url('/hero-1366x1080.png')] bg-cover bg-no-repeat h-screen bg-center bg-fixed flex items-center justify-center">
      <div className="flex flex-col justify-center items-center">
        <img src="/gk-logo-125x125-white.png" alt="logo" className="w-16 h-14 animate-pulse" />
        <h2 className="text-white font-extrabold text-4xl md:text-4xl">
            <span className="block">gharieb khalifa</span>
        </h2>
        <h2 className="text-white text-center text-lg ">
          <span>Web Developer</span>
          <span className="block">&</span>
          <span className=" ">Bussiness Analyst</span>
        </h2>
        <ul className=" flex gap-3 mt-2 justify-center">
          <li className="motion-safe:animate-bounce">
            <a href="#" className="text-white">
            <img src="/github-mark-white.svg" alt="github" className="w-8 h-8  " loading="lazy"/>
            </a>
          </li>
          <li className="motion-safe:animate-bounce delay-1000">
            <a href="#" className="text-white ">
              <img src="/linkedin.svg" alt="linkedin" className="w-8 h-8" loading="lazy"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}


export default Hero