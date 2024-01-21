// eslint-disable-next-line no-unused-vars
import React from 'react'

function TextArea({field, form, ...props}) {
  const { containerStyle, inputStyle, label } = props

  const parentStyle =  (containerStyle && typeof(containerStyle) !== 'string') ? [...containerStyle].join(' ') : containerStyle
  const childStyle =  (inputStyle && typeof(inputStyle) !== 'string') ? [...inputStyle].join(' ') : inputStyle
  
  const { touched, errors } = form
  
  return (
    <div className={parentStyle}>
      <label className='block'>
        {
          label
        }
      <textarea {...field} className={childStyle}/>
      </label>
      {
        touched[field.name] && errors[field.name] ?
        <p className='text-red-500'>{errors[field.name]}</p>
        :
        null
      }
    </div>
  )
}

export default TextArea