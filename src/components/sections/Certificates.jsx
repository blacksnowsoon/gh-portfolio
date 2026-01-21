import { useMemo, useRef } from 'react'
import { CERTIFICATS } from '../../Data'
import Section from '../Section'
import SectionTilte from '../SectionTilte'
import InnerSec from '../InnerSec'
import Slider from "react-slick";
function Certificates() {
  let sliderRef = useRef(null);
  const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
    };

 
  return (
    <Section id={'certificates'} className={''}>
      <SectionTilte title={"Achieved Certificates"} />
        <InnerSec>
        <div>

          <Slider ref={sliderRef} {...settings} className='p-6 md:p-10 xl:p-20'>
            {CERTIFICATS.map((cert) => (
              <div 
                key={cert.id} 
                className="w-full snap-start flex-shrink-0  border border-white border-opacity-40 shadow-xl  backdrop-blur-sm space-x-4 px-10"
                data-aos="zoom-in">
                  <div className=' flex justify-center items-center'>
                    <img 
                        loading='lazy'
                        src={`${cert.pdf}`} 
                        alt={cert.name} 
                        className="" 
                    />
                  </div>
              </div>
            ))}
          </Slider>
        </div>
        </InnerSec>
    </Section>
  )
}

const LiCertificate = ({ data, delay }) => {

  const { name, pdf } = data

  const li = useMemo(() => {
    return (
      <li className='snap-center min-w-56 rounded-lg hover:skew-y-0 hover:scale-150 hover:z-10 transition-all drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] shadow-sm shadow-black' key={name} data-aos="fade-up-right" data-aos-duration="1500" data-aos-delay={delay * 100} data-aos-easing="ease-in-out">
        <figure className=' p-2 rounded-lg'>
          <img
            loading='lazy'
            src={pdf}
            alt={name}
            className=' rounded-t-lg'
          />
          <figcaption className='text-center rounded-b-lg text-white bg-zinc-700 border border-gray-600'>
            {name}
          </figcaption>
        </figure>
      </li>
    )
  }, [delay, name, pdf])
  return (
    li
  )
}
export default Certificates

