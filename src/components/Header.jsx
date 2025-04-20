import Navbar from './Navbar'


function Header() {


  return (
    <header>
      {/* <nav id='nav-bar'  className="fixed z-50 w-screen p-4 glass shadow">
        <div className="container flex justify-around items-center flex-wrap">
          <div className="">
            <img loading='lazy' className="w-9 filter drop-shadow-custom" src="/gk-logo-125x125-black.png" alt="gk logo"/>
          </div>
          <div className="">
            <ul  className=" flex items-center gap-3 justify-center  ">
              <li key={'about-me'} className="hover:bg-accent p-2 rounded-lg cursor-pointer transition-all" ><a href="/#about-me" className="">About Me</a></li>
              <li key={'services'} className="hover:bg-accent p-2 rounded-lg cursor-pointer transition-all" ><a href="/#services" className="">Services</a></li>
              <li key={'projects'} className="hover:bg-accent p-2 rounded-lg cursor-pointer transition-all"><a href="/#projects" className="">Projects</a></li>
              <li key={'certificates'} className="hover:bg-accent p-2 rounded-lg cursor-pointer transition-all"><a href="/#certificates" className="">Certificates</a></li>
              <li key={'contact'} className="hover:bg-accent p-2 rounded-lg cursor-pointer transition-all"><a href="/#contact" className="">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>  */}
      <Navbar />
    </header>
  )
}

export default Header