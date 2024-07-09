
function TextArea({field, form, ...props}) {
  const { label } = props

  
  const { touched, errors } = form
  
  return (
    <div>
      <label className='block '>
        {
          label
        }
      <textarea {...field} className={'textarea textarea-bordered w-full p-2 rounded-lg mt-1'}/>
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