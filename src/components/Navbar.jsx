import React, { useState } from 'react';
import MenuArr from '../data/MenuArr';
import Icon from '../utilities/Icon';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <div className={`  z-auto flex items-center justify-between p-4 bg-white shadow-fixed w-full`}>
            <div className='flex items-center'>
                <span className='text-xl font-bold'>Logo</span>
                {open ? <span className='ml-4'>Task</span> : null}
            </div>

            <div className='flex items-center'>
                {MenuArr.map((menu) => (
                    <div key={menu.id} className='flex items-center ml-4'>
                        <span>{menu.icon}</span>
                        {open && <span className='text-ml-2'>{menu.nombre}</span>}
                    </div>
                ))}

                <span className='ml-4 cursor-pointer' onClick={() => setOpen(!open)}>
                    {open ? <Icon.ArrowLeft /> : <Icon.ArrowRight />}
                </span>
            </div>
        </div>
    );
}
