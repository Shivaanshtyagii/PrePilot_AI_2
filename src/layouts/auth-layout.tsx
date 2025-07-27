import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthenticationLayout = () => {
  return (
    <div className='w-screen h-screen overflow-hidden flex items-center justify-center relative'>
      {/*hadler to store public data*/}
      <img src='/assets/img/bg.png' className='absolute w-full h-full object-cover opacity-20' alt='background'/>
      <Outlet/>


    </div>
  )
}

export default AuthenticationLayout
