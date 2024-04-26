import { useMemo } from 'react'
import { CERTIFICATS } from '../../Data'
import Section from '../Section'
import Article from '../Article'

function Certificates() {


  const certificatesList = ()=> {
    return (
      <ul className='px-14 scroll-px-14 select-none snap-mandatory snap-x flex gap-4 items-center overflow-x-auto overflow-y-hidden min-h-72 focus:touch-pan-x'>
      {
        CERTIFICATS.map((certificate, index) => {
          return <LiCertificate data={certificate} key={index}/>
        })
      }
    </ul>
    )
  }
  return (
    <Section id={'certificates'}>
      <Article title={"Wall Of Certificates"} style=''>
        {
          certificatesList()
        }
      </Article>
    </Section>
  )
}

const LiCertificate = ({data}) => {

const {name, pdf} = data

  const li = useMemo(() => {
    return (
      <li className='snap-center min-w-56 rounded-lg skew-y-6  hover:skew-y-0 hover:scale-150 hover:z-10 transition-all'>
        <figure className='bg-slate-200  p-2 rounded-lg'>
          <img
            src={pdf}  
            alt={name}
            className=' rounded-t-lg'
          />
          <figcaption className='text-center rounded-b-lg text-white bg-zinc-700'>
          {name}
          </figcaption>
        </figure>
      </li>
    )
  },[name, pdf])
  return (
    li
  )
}
export default Certificates

