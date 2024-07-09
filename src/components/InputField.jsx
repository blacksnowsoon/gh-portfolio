// eslint-disable-next-line no-unused-vars
import React from 'react'

function InputField ({ field, form, ...props }) {
  
  const { label } = props
  const { touched, errors } = form

  return (
    <div>
      <label className='block'>
        {
          label
        }
      <input 
        {...field} 
        {...props}
        className={'input w-full p-2 rounded-lg mt-1'} 
        />
      </label>
      {
        touched[field.name] && errors[field.name] ?
        <p className='text-red-600'>{errors[field.name]}</p>
        :
        null
      }

    </div>
  )
}

export default InputField