import { useState, useEffect } from 'react';
import { FaAlignJustify, FaChevronDown } from 'react-icons/fa';
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
                className={`fixed z-50 w-full p-4 transition-all duration-300 ${scrolled ? 'bg-gradient-to-br from-[#ba4907e5] to-[#f9bf2ce8] shadow-lg' : 'glass'}`}
            >
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img 
                        loading='lazy' 
                        className="w-9 filter drop-shadow-custom" 
                        src="/gk-logo-125x125-black.png" 
                        alt="gk logo"
                        />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <ul className="flex items-center gap-3">
                        {navItems.map((item) => (
                            <li key={item.id} className="hover:bg-black/20 p-2 rounded-lg transition-all">
                            <a 
                                href={`#${item.id}`} 
                                className=" px-2 py-1 hover:text-white transition-colors"
                                onClick={closeMobileMenu}
                            >
                                {item.label}
                            </a>
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
                    {navItems.map((item) => (
                    <li key={item.id} className="w-full text-center">
                        <a 
                        href={`#${item.id}`} 
                        className="block px-4 py-2 hover:bg-white/20 rounded-lg transition-colors"
                        onClick={closeMobileMenu}
                        >
                        {item.label}
                        </a>
                    </li>
                    ))}
                </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;