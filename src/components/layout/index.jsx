import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'

function MainLayout() {
  return (
    <div className='lg:flex lg:flex-row flex flex-col relative bg-cyan-50'>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default MainLayout