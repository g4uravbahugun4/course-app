import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTES } from '../router/routes'

function Sidebar() {
    const navigate=useNavigate()
    const location=useLocation()
    const sideItems = [
        { name: "Dashboard",route:ROUTES.HOME },
        { name: "Courses",route:ROUTES.COURSES },
      
    ]
    return (
        <>
        {/* desktop sidebar */}
        <main className="lg:flex lg:flex-col hidden w-52 bg-slate-300 ">
            <div className="flex flex-col   py-12   ">
                {sideItems.map((item, index) => (

                    <div onClick={()=>{navigate(item.route)}} key={index} 
                   className={`flex  cursor-pointer gap-2 justify-between items-center p-2 py-3 text-lg font-semibold text-center text-zinc-900 ${location.pathname === item.route ? 'bg-cyan-50' : ''}`}>
                       
                        <div className="flex-auto self-start mt-1.5">{item.name}</div>
                    </div>

                ))}
            </div>
        </main>

        {/* mobile navbar */}
            <main className="lg:hidden flex  sticky top-0 w-full py-4 bg-slate-300 ">
            <div className="flex   ">
                {sideItems.map((item, index) => (

                    <div onClick={()=>{navigate(item.route)}} key={index} 
                   className={`flex  cursor-pointer gap-2 justify-between items-center rounded-md ml-3  px-3 pb-1 text-sm font-semibold text-center text-zinc-900 ${location.pathname === item.route ? 'bg-cyan-50' : ''}`}>
                       
                        <div className="flex-auto self-start mt-1.5 ">{item.name}</div>
                    </div>

                ))}
            </div>
        </main>

        </>
    )
}

export default Sidebar