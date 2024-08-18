import React from 'react'
type Props={
    params:{
        name:string;
    }
}
export default function page({params}:Props) {
  return (
    <div>
      <h3>Company Name:{params.name}</h3>
    </div>
  )
}
