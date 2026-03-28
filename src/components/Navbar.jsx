import { useState, useEffect } from 'react';
import { FaAlignJustify, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    // Handle scroll effect and active section detection
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);

            // Detect which section is in view
            const sections = navItems.map(item => item.id);
            const scrollPosition = window.scrollY + 100; // Offset for navbar height

            // Check if we're in the hero section (before the first nav item)
            const firstSection = document.getElementById(sections[0]);
            if (firstSection && scrollPosition < firstSection.offsetTop) {
                setActiveSection(''); // No active section in hero
                return;
            }

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call once on mount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'about-me', label: 'About Me' },
        { id: 'services', label: 'Services' },
        { id: 'case-studies', label: 'Case Studies' },
        { id: 'certificates', label: 'Certificates' },
        { id: 'contact', label: 'Contact' }
    ];

    const handleNavClick = (e, itemId) => {
        e.preventDefault();
        document.getElementById(itemId)?.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(itemId);
    };

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
                            {navItems.map((item) => (
                                <li key={item.id} className="transition-all">
                                    <a
                                        href={`#${item.id}`}
                                        onClick={(e) => handleNavClick(e, item.id)}
                                        className={`nav-link relative px-4 py-2 transition-all duration-300 block ${activeSection === item.id
                                            ? 'nav-link-active font-semibold'
                                            : ''
                                            }`}
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
                                <FaAlignJustify className="w-6 h-6 text-gray-900" />
                            ) : (
                                <FaChevronDown className="w-6 h-6 text-gray-900" />
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
                                    onClick={(e) => {
                                        handleNavClick(e, item.id);
                                        closeMobileMenu();
                                    }}
                                    className={`nav-link-mobile relative p-2 block rounded-lg transition-all duration-300 ${activeSection === item.id
                                        ? 'nav-link-active font-semibold'
                                        : ''
                                        }`}
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