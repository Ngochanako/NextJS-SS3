import React from 'react'
type Props={
    params:{
    id:string;
    }
}
export default function page({params}:Props) {
  return (
    <div>
      <h3>id:{params.id}</h3>
    </div>
  )
}
