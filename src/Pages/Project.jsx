import React, {} from 'react'
import { useParams } from 'react-router-dom'

function Project() {
  const params = useParams()
  console.log('params: ', params)
  return (
    <div>Project</div>
  )
}

export default Project