import React from 'react'
import { listEmployee } from '../data'
import Link from 'next/link'
export default function page() {
    
  return (
    <div>
      {listEmployee.map((item,index)=>(
        <div key={index}>
            <p>id:{item.id}</p>
            <p>Name:{item.Name}</p>
            <p>Age:{item.Age}</p>
            <Link href={`/employees/${item.id}`}><button className='p-[10px] bg-yellow-600 text-white'>Employee detail</button></Link>
            <hr />
        </div>
      ))}
    </div>
  )
}
