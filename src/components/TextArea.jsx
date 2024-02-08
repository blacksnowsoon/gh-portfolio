
function TextArea({field, form, ...props}) {
  const { containerStyle, inputStyle, label } = props

  const parentStyle =  (containerStyle && typeof(containerStyle) !== 'string') ? [...containerStyle].join(' ') : containerStyle
  const childStyle =  (inputStyle && typeof(inputStyle) !== 'string') ? [...inputStyle].join(' ') : inputStyle
  
  const { touched, errors } = form
  
  return (
    <div>
      <label className='block'>
        {
          label
        }
      <textarea {...field} className={'block w-full p-2 rounded-lg'}/>
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