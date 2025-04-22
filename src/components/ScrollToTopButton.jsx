    import { useState, useEffect } from 'react';
    import { FaArrowUp } from 'react-icons/fa'; 

    export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when user scrolls down 300px
    useEffect(() => {
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
        setIsVisible(true);
        } else {
        setIsVisible(false);
        }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Smooth scroll to top
    const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    };

    return (
    <div className="fixed bottom-6 right-6 z-50">
        {isVisible && (
        <button
            onClick={scrollToTop}
            className="p-3 custom-bg-light  text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
            aria-label="Scroll to top"
        >
            <FaArrowUp className="w-5 h-5" />
        </button>
        )}
    </div>
    );
}