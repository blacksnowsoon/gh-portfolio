

function Header() {


  return (
    <header>
      <nav id='nav-bar'  className=" fixed z-50 w-screen p-4 glass shadow">
        <div className="container flex justify-around items-center flex-wrap">
          <div className="">
            <img loading='lazy' className="w-9 filter drop-shadow-custom" src="/gk-logo-125x125-white.png" alt="gk logo"/>
          </div>
          <div className="">
            <ul className="flex items-center gap-4 justify-center ">
              <li key={'projects'}><a href="#projects" className="hover:text-white ">Projects</a></li>
              <li key={'platforms'}><a href="#platforms" className=" hover:text-white">Platforms</a></li>
              <li key={'certificates'}><a href="#certificates" className="hover:text-white ">Certificates</a></li>
              <li key={'contact'}><a href="#contact" className="hover:text-white ">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav> 
    </header>
  )
}

export default Header