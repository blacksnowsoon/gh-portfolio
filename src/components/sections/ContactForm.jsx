// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';
import { Field, Form, Formik, useFormikContext } from 'formik';
import InputField from '../InputField';
import TextArea from '../TextArea';
import { contactSchema } from '../../general/Validation';
import emailjs from '@emailjs/browser';
import Section from '../Section';
import Article from '../Article';

import { FaMobileAlt,  FaMailBulk, FaWhatsapp, FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';


function ContactForm() {

  const onSubmit = (values, actions) => {
  
    const service_id = 'service_x9pkra8'
    const template_id = 'contact_form'
    const publicKey = '1Uggwk846OdMrpDz2'
    const emailTemplate = {
      user_name: values?.name,
      user_email: values?.email,
      time: new Date().toLocaleString(),
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
    <Section id={"contact"} className={''}>
      
      <Article title="Contact Me" style="">
        <div className='flex flex-wrap justify-start items-start gap-2 '>
        {/* contact info */}
          <div className='md:flex-1'>
            <h4 className='text-xl font-bold p-3'>Feel free to contact me</h4>
            <ul className='flex flex-col gap-4 p-4'>
              <li className=''>
                <FaMobileAlt  title='Mobile' className='text-xl inline mx-2' />
                <span>(+02) 015 553 737 01</span>
              </li>
              <li>
                <FaWhatsapp title='whatsapp' className='text-green-400 text-xl inline mx-2' />
                <span>(+02) 015 553 737 01</span>
              </li>
              <li>
                <FaMailBulk title='Email' className=' text-xl inline mx-2' />
                <span>blacksnow.soon@gmail.com</span>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/gharieb-khalifa" rel="noreferrer" target="_blank" className="" title="LinkedIn"><FaLinkedin title='Linkedin' className=' text-2xl inline mx-2 ' /></a>
                <a href="https://github.com/blacksnowsoon" rel="noreferrer" target="_blank" className="" title="GitHub"><FaGithub title='Github' className=' text-2xl inline mx-2' /></a>
                <a href="https://mostaql.com/u/Gharieb_Khalefa/portfolio" rel="noreferrer" target="_blank" className="" title="Mostaql">
                    <img src="/mostaql-icon.png" alt="Mostaql" className="w-6 h-6 inline mx-2" />
                  </a>
              </li>
            </ul>
          </div>
        {/* send email */}
          <div className='md:flex-1'>
            <p className='text-xl font-bold text-center p-3'>You can also contact me by email</p>
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
          </div>
        </div>
      </Article>
      
    </Section>
  )
}

export default ContactForm





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
            Thank you !! I will Replay you 📧 as soon as possible  
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