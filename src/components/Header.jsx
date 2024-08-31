

function Header() {


  return (
    <header>
      <nav id='nav-bar'  className="fixed z-50 w-screen p-4 glass shadow">
        <div className="container flex justify-around items-center flex-wrap">
          <div className="">
            <img loading='lazy' className="w-9 filter drop-shadow-custom" src="/gk-logo-125x125-white.png" alt="gk logo"/>
          </div>
          <div className="">
            <ul  className=" flex items-center gap-3 justify-center  ">
              <li key={'projects'} ><a href="#projects" className="hover:text-white">Projects</a></li>
              <li key={'platforms'} ><a href="#platforms" className=" hover:text-white">Platforms</a></li>
              <li key={'certificates'} ><a href="#certificates" className="hover:text-white">Certificates</a></li>
              <li key={'contact'} ><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav> 
    </header>
  )
}

export default Header
// [background:linear-gradient(45deg,theme(colors.slate.800)_50%,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box]