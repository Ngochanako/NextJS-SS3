import React from 'react'
type Props={
    params:{
        id:string
    }
}
export default function page({params}:Props) {
  return (
    <div>
      Danh sách nhiệm vụ của dự án có id: {params.id}
    </div>
  )
}
