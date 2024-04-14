
function Header() {

  return (
    <nav className=" fixed z-50 w-screen p-4 bg-slate-950">
      <div className="container flex justify-around items-center flex-wrap">
        <div className="">
          <img className="w-9 filter drop-shadow-custom" src="/gk-logo-125x125-white.png" alt="gh logo"/>
        </div>
        <div className="">
          <ul className="flex items-center gap-4 justify-center ">
            <li key={'projects'}><a href="/#projects" className="text-white hover:text-gray-300 ">Projects</a></li>
            <li key={'platforms'}><a href="/#platforms" className="text-white hover:text-gray-300 ">Platforms</a></li>
            <li key={'certificates'}><a href="/#certificates" className="text-white hover:text-gray-300">Certificates</a></li>
            <li key={'contact'}><a href="/#contact" className="text-white hover:text-gray-300">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header