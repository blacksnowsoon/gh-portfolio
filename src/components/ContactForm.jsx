// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Field, Form, Formik, useFormikContext } from 'formik';
import Section from './Section';
import InputField from './InputField';
import TextArea from './TextArea';



function ContactForm() {
  const onSubmit = (values, actions) => {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2))
      actions.setSubmitting(false)
      actions.resetForm()
    }, 1000);
  }
  return (
    <Section title="Contact Me" style={['']} id={'contact'}>
      
        <Formik 
          initialValues={{ name: '', email: '', subject: '', message: '' }} 
          onSubmit={onSubmit}
          validate={{
          }} 
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

      
    </Section>
  )
}

export default ContactForm



const SubmitBtn = () => {

  const {isSubmitting, errors, } = useFormikContext()
  
  
  return (
    <div className='flex items-center gap-1 duration-700 flex-col'>
      <button 
        type='submit' 
        className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        disabled={isSubmitting}
        >
        {
          isSubmitting ? 
          <i className='flex items-center justify-center'>
            <span className='animate-spin w-4 h-4 block border-4 rounded-full mx-4 border-dashed border-cyan-100'></span>
            <span>sending...</span>
          </i>
          : 'Submit'
        }
        
      </button>
      {
        errors? <p className='text-red-500'>Error</p> : null
      }
    </div>
  )
}