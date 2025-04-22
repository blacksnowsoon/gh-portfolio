import {useEffect} from 'react'
import AOS from 'aos'

function Section({children, id, className}) {


  useEffect(()=>{
    AOS.init({
      duration: 1000,
      once: true, // whether animation should happen only once - while scrolling down
    });
    return () => {
      AOS.refresh(); // Cleanup on component unmount
    };
  },[])
// scroll-mt-16 md:scroll-mt-20 lg:scroll-mt-24
  return (
    <section id={id} className={className || '' + ' min-h-[100vh] ' } data-aos="fade-up" >
    {
      children
    }
    </section>
  )
}

export default Section