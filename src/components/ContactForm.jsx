// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Field, Form, Formik, useFormikContext } from 'formik';
import Article from './Article';
import InputField from './InputField';
import TextArea from './TextArea';
import { contactSchema } from '../general/Validation';
import emailjs from '@emailjs/browser'

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
    <Article title="Contact Me" id={'contact'}>
      <Formik 
        initialValues={{ name: '', email: '', subject: '', message: '' }} 
        onSubmit={onSubmit}
        validationSchema={contactSchema} 
      >
        {
          () => (
          <Form className='bg-slate-200 flex gap-4 p-4 max-w-lg mx-auto flex-col rounded-lg'>
            <Field
              name={'name'}
              placeholder={'Your Name'}
              label={'Name'}
              component={InputField}
              required={true}
            />
            <Field 
              name={'email'}
              placeholder={'Your Email'}
              label={'Email'}
              required={true}
              component={InputField} 
            />
            <Field 
              name={'subject'}
              placeholder={'Subject'}
              label={'Subject'}
              required={true}
              component={InputField} 
            />
            <Field 
              name={'message'}
              placeholder={'Your Message'}
              label={'Message'}
              required={true}
              component={TextArea} 
            />
            <SubmitBtn />
          </Form>
          )
        }
      
      </Formik>
    </Article>
  )
}

export default ContactForm



const SubmitBtn = () => {

  const {isSubmitting, status, errors } = useFormikContext()
  
  return (
    <div className='flex items-center gap-1 duration-700 flex-col'>
      <button 
        type='submit' 
        className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
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