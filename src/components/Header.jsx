
function Header() {

  return (
    <nav className="px-2 sm:px-4 py-2.5 
                    shadow-lg flex w-full 
                    flex-col items-center justify-between 
                    gap-6 text-center fixed z-50
                    lg:flex-row lg:text-left bg-slate-950">

      <div className="flex items-center pl-4 gap-2 flex-1 ">
          <img className="w-9 " src="/gh-logo-600x600.png" alt="gh logo"/>
          <h2 className=" tracking-tight">
            <span className="block text-white">Js Developer</span>
          </h2>
        </div>
      <div className="flex-1">
        <ul className="flex items-center gap-4 justify-center ">
          <li key={'projects'}><a href="/#projects" className="text-white hover:text-gray-300">Projects</a></li>
          <li key={'platforms'}><a href="/#platforms" className="text-white hover:text-gray-300 ">Platforms</a></li>
          <li key={'certificates'}><a href="/#certificates" className="text-white hover:text-gray-300">Certificates</a></li>
          <li key={'contact'}><a href="/#contact" className="text-white hover:text-gray-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header