import React from 'react'

const Meeting = ({params} : {params : {id: string}}) => {
  return (
    <div>Meeting No {params.id}</div>
  )
}

export default Meeting