import { useMemo } from 'react'
import { CERTIFICATS } from '../../Data.cjs'
import Section from '../Section'
import Article from '../Article'

function Certificates() {


  const certificatesList = ()=> {
    return (
      <ul className='flex flex-wrap justify-center gap-4 items-center '>
      {
        CERTIFICATS.map((certificate, index) => {
          return <LiCertificate data={certificate} key={index} delay={index}/>
        })
      }
    </ul>
    )
  }
  return (
    <Section id={'certificates'} className={''}>
      <Article title={"Achieved Certificates"} style=''>
        {
          certificatesList()
        }
      </Article>
    </Section>
  )
}

const LiCertificate = ({data, delay}) => {

const {name, pdf} = data

  const li = useMemo(() => {
    return (
      <li className='snap-center min-w-56 rounded-lg   hover:skew-y-0 hover:scale-150 hover:z-10 transition-all drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] shadow-sm shadow-black' key={name} data-aos="fade-up-right" data-aos-duration="1500" data-aos-delay={delay*100} data-aos-easing="ease-in-out">
        <figure className='  p-2 rounded-lg'>
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
  },[delay, name, pdf])
  return (
    li
  )
}
export default Certificates

