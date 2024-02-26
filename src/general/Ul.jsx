
function Ul({data, title}) { 
  if (data?.length === 0 || !data) return null
  return (
    <div className='flex-1'>
      <h3 className='font-semibold text-lg underline'>{title}</h3>
      <ul className=''>
        {
          data.map((it,id) => <li key={id} className='block'> - {it}</li>)
        }
      </ul>
    </div>
    
  )
}

export default Ul