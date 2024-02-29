import React, { useState } from 'react'
import MenuArr from '../data/MenuArr'
import Icon from '../utilities/Icon';

export default function SideBar() {
    const [open, setOpen] = useState(false);
    return (
        <div className={`hidden lg:block lg:min-h-screen ${open ? 'lg:w-56' : 'lg:w-20'} lg:text-black lg:bg-white shadow-xl shadow-[#0000004f]`}>
            <div className={`${open ? 'lg:justify-between' : 'lg:justify-center'} lg:lex p-2 lg:text-xl lg:font-bold`}>
                <span></span>
                {open ? (<span>Task</span>) : null}
                <span className='lg:pt-1 cursor-pointer' onClick={() => setOpen(!open)}> {open ? <Icon.ArrowLeft /> : <Icon.ArrowRight />} </span>
            </div>
            {
                MenuArr.map((menu) => (
                    <div key={menu.id} className='lg:flex lg:px-5 lg:pt-[10%]'>
                        <span>
                            {menu.icon}
                        </span>
                        {open ? (<span className='lg:text-2xl lg:px-[25%] '>
                            {menu.nombre}
                        </span>) : null}

                    </div>
                ))
            }
            <div>

            </div>
        </div>
    )
}
