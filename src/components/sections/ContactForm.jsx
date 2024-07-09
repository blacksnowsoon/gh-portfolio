// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';
import { Field, Form, Formik, useFormikContext } from 'formik';
import InputField from '../InputField';
import TextArea from '../TextArea';
import { contactSchema } from '../../general/Validation';
import emailjs from '@emailjs/browser';
import Section from '../Section';
import Article from '../Article';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer'
function ContactForm() {

  const onSubmit = (values, actions) => {
  
    const service_id = 'service_gh_mailer'
    const template_id = 'contact_form'
    const publicKey = 'kW68NtHPmP4o2a8mL'
    const emailTemplate = {
      user_name: values?.name,
      user_email: values?.email,
      message: values?.message,
      subject: values?.subject
    }
    
    emailjs.send(service_id, template_id,emailTemplate, publicKey)
    .then(() => {
      actions.resetForm()
      actions.setStatus('submitted')
      actions.setSubmitting(false)
    })
    .catch(err => {
      actions.setErrors(err)
      actions.setSubmitting(false)
    })
  }
  return (
    <Section id={"contact"} className={'overflow-clip'}>
      <Performance />
      <Article title="Contact Me">
        <Formik
          initialValues={{ name: "", email: "", subject: "", message: "" }}
          onSubmit={onSubmit}
          validationSchema={contactSchema}
        >
          {() => (
            <Form className="mx-auto flex max-w-lg flex-col gap-4 rounded-lg glass p-4">
              <Field name={"name"} placeholder={"Your Name"} label={"Name"} component={InputField} required={true} />
              <Field name={"email"} placeholder={"Your Email"} label={"Email"} required={true} component={InputField} />
              <Field
                name={"subject"}
                placeholder={"Subject"}
                label={"Subject"}
                required={true}
                component={InputField}
              />
              <Field
                name={"message"}
                placeholder={"Your Message"}
                label={"Message"}
                required={true}
                component={TextArea}
              />
              <SubmitBtn />
            </Form>
          )}
        </Formik>
      </Article>
    </Section>
  )
}

export default ContactForm

const Performance = ()=> {
  const {ref, inView} = useInView({threshold: 0.3})
  const [performance, setPerformance] = React.useState(0)
  const [accessibility, setAccessibility] = React.useState(0)
  const [bestPractices, setBestPractices] = React.useState(0)
  const [seo, setSeo] = React.useState(0)

  React.useEffect(()=> {
    if (inView) {
      let per = performance 
      let acc = accessibility
      let bp = bestPractices
      let se = seo
      setInterval(()=> {
        if (per < 100) {
          per += 1
          setPerformance(per)
        }
        if ( acc < 90) {
          acc += 1
          setAccessibility(acc)
        }
        if (bp < 96) {
          bp+=1
          setBestPractices(bp)
        }
        if (se < 91) {
          se +=1
          setSeo(se)
        }
      }, 100)
    } 
  }, [inView])
  

  return (
    <Article >
          <h3 className="animate-pass text-center text-green-400 block text-xl font-bold  text-nowrap -translate-x-full mb-2 ">
            Priorities:👉 Performance🚀  Accuracy🔬  Responsiveness🎭 
          </h3>
          <div ref={ref} className="stats py-4 stats-vertical md:stats-horizontal shadow-xl mx-auto  w-full ">
            <div className="stat w-full place-items-center">
              <p className="animate-color-trans stat-value text-green-400 text-center border-4 p-6 rounded-full w-28 h-28  flex items-center justify-center">{performance}</p>
              <p className="stat-title  text-center">Performance</p>
            </div>
            <div className="stat  w-full place-items-center">
              <p className="animate-color-trans stat-value text-green-400  border-4 p-6 rounded-full w-28 h-28  flex items-center justify-center">{accessibility}</p>
              <p className="stat-title  text-center">Accessibility</p>
            </div>
            <div className="stat  w-full place-items-center">
              <p className="animate-color-trans stat-value text-green-400 border-4 p-6 rounded-full w-28 h-28 border-green-500 flex items-center justify-center">{bestPractices}</p>
              <p className="stat-title  text-center">Best Practices</p>
            </div>
            <div className="stat  w-full place-items-center">
                <p className="animate-color-trans stat-value text-green-400 border-4 p-6 rounded-full w-28 h-28 border-green-500 flex items-center justify-center">{seo}</p>
                <p className="stat-title  text-center">SEO</p>
            </div>
          </div>
          <div className="divider">
            <Link target='_blank' to={'https://pagespeed.web.dev/analysis/https-gh-portfolio-liard-vercel-app/mctftwqm80?form_factor=desktop'} 
            className='text-center btn  rounded  mt-3 glass self-center'>Live Test Preview</Link>
          </div>
        </Article>
  )
}



const SubmitBtn = () => {

  const {isSubmitting, status, errors } = useFormikContext()
  
  return (
    <div className='flex items-center gap-1 duration-700 flex-col'>
      <button 
        type='submit' 
        className='glass w-full focus:ring-4 focus:outline-none  font-bold py-2 px-4 rounded'
        disabled={isSubmitting || status === 'submitted'}
        >
        {
          isSubmitting ? 
          <i className='flex items-center justify-center'>
            <span className='animate-spin w-4 h-4 block border-4 rounded-full mx-4 border-dashed border-cyan-100'></span>
            <span>sending...</span>
          </i>
          : status === 'submitted' ?
          <p className='text-green-500'>
            Thank you !! I will Replay you Soon ;-)  
          </p> 
          :
          'Submit'
        }
        
      </button>
      {
        errors ? <p className='text-red-500'></p> : null
      }
      
    </div>
  )
}