

export const Hero = () => {

  return (
    <div className="bg-[url('./bg1.jpg')] bg-cover bg-no-repeat h-screen bg-center bg-fixed flex items-center justify-center">
      <div className="flex flex-col justify-center items-center">
        <img src="/logo-1-250x250.png" alt="logo" className="w-16 h-14 animate-pulse" />
        <h2 className="text-white font-extrabold text-4xl md:text-4xl">
            <span className="block">Gharieb Khalifa</span>
        </h2>
        <h2 className="text-white text-center text-lg ">
          <span>Systems Analyst</span>
          <span className="block">&</span>
          <span>Web Developer</span>
        </h2>
        <ul className=" flex gap-3 mt-2 justify-center">
          <li className="motion-safe:animate-bounce">
            <a href="#" className="text-white">
            <img src="./github-mark-white.svg" alt="github" className="w-8 h-8" loading="lazy"/>
            </a>
          </li>
          <li className="motion-safe:animate-bounce delay-1000">
            <a href="#" className="text-white ">
              <img src="./linkedin.svg" alt="linkedin" className="w-8 h-8" loading="lazy"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}


export default Hero