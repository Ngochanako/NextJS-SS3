import React from 'react'
type Props={
    params:{
        id:string,
    }
}
export default function page({params}:Props) {
  return (
    <div>
      Trang chi tiết dự án có id:{params.id}
    </div>
  )
}
