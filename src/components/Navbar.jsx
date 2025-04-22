import { useState, useEffect } from 'react';
import { FaAlignJustify, FaChevronDown } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Close mobile menu when clicking on nav items
    const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    };

// Handle scroll effect
    useEffect(() => {
    const handleScroll = () => {
        setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'about-me', label: 'About Me' },
        { id: 'services', label: 'Services' },
        { id: 'projects', label: 'Projects' },
        { id: 'certificates', label: 'Certificates' },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <header>
            <nav 
                id='nav-bar' 
                className={`fixed z-50 w-full p-4 transition-all duration-300 ${scrolled ? 'custom-bg-light text-white ' : 'glass'}`}
            >
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img 
                        loading='lazy' 
                        className="w-9 filter drop-shadow-custom" 
                        src={`${scrolled ? '/gk-logo-125x125-white.png' : '/gk-logo-125x125-black.png'}`} 
                        alt="gk logo"
                        />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <ul className="flex items-center gap-3">
                                    {/* className=" px-2 py-1 hover:text-white transition-colors" */}
                        {navItems.map((item) => (
                            <li key={item.id} className="hover:bg-black/20 p-2 rounded-lg transition-all">
                                <NavLink 
                                    to={`#${item.id}`} 
                                    className={ ({ isActive }) => isActive ? 'p-2' : '' }
                                    onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                                    }} 
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                        </ul>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="focus:outline-none"
                        aria-label="Toggle menu"
                        >
                        {isMobileMenuOpen ? (
                            <FaAlignJustify  className="w-6 h-6 text-gray-900"  />
                        ) : (
                            <FaChevronDown className="w-6 h-6 text-gray-900"  />
                        )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div 
                className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}  mt-2 py-2 transition-all duration-300 ease-in-out`}
                >
                <ul className="flex flex-col items-center gap-2">
                        {/* onClick={closeMobileMenu} */}
                    {navItems.map((item) => (
                    <li key={item.id} className="w-full text-center">
                        <NavLink 
                            to={`#${item.id}`} 
                            className={ ({ isActive }) => isActive ? 'p-2' : '' }
                            onClick={(e) => {
                            e.preventDefault();
                            closeMobileMenu();
                            document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                            }} 
                        >
                        {item.label}
                        </NavLink>
                    </li>
                    ))}
                </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;