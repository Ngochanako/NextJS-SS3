'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { listEmployee } from '@/app/data'
type Props={
    params:{
        id:number
    }
}
export default function page({params}:Props) {
    const [list,setList]=useState<string[]>([]);
    useEffect(()=>{
       
       let employee=listEmployee.find(item=>item.id==params.id);
       
       if(employee) setList(employee.projects);
    },[])
  return (
    <div>
      <Link className='text-red-400' href={`/employees/${params.id}`}>Employee detail</Link>
      <h3>The employee project list has id={params.id}</h3>
      {list.map((btn,index)=>(
        <li key={index}>{btn}</li>
      ))}
    </div>
  )
}
