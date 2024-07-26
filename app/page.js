"use client"
import { MyContext } from '@/Helper/Context'
import React, { useContext } from 'react'

const page = () => {
 const user =  useContext(MyContext)
 console.log(user)
  return (
    <div>My Name is : {user}</div>
  )
}

export default page