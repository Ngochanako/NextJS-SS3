'use client'
import React, { useEffect, useState } from 'react';
import { listEmployee } from '@/app/data';
import { log } from 'console';
import Link from 'next/link';
type Props={
    params:{
        id:number
    }
}
export default function page({params}:Props) {
    const [list,setList]=useState<any>([]);
    useEffect(()=>{
       
       let employee=listEmployee.find(item=>item.id==params.id);
       
       if(employee) setList(employee);
    },[])
  return (
    <div>
        <Link className='text-red-400' href={`/employees/${list.id}/projects`}>Employee's projects</Link>
      <h3>Chi tiết nhân viên</h3>
      <p>Id:{list.id}</p>
      <p>Name:{list.Name}</p>
      <p>Age:{list.Age}</p>
    </div>
  )
}
