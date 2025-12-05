import { useEffect } from 'react'
import AOS from 'aos'

function Section({ children, id, className }) {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // whether animation should happen only once - while scrolling down
    });
    return () => {
      AOS.refresh(); // Cleanup on component unmount
    };
  }, [])

  return (
    <section
      id={id}
      className={`min-h-[100vh] pt-16 scroll-mt-16 ${className || ''}`}
      data-aos="fade-up"
    >
      {children}
    </section>
  )
}

export default Section