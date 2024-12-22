"use client"


import { useState } from 'react';
import { ChevronLeftIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';


const Dropdown = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className='relative pb-3 pt-3 '
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}

        >
            <button className='flex justify-center items-center' >
                <li className='text-white'>{title}</li>
                {
                    isOpen ? <ChevronDownIcon className='transition w-4 h-4 md:h-5 md:w-5 stroke-white text-white font-bold ' /> :
                    <ChevronLeftIcon className='w-4 h-4 md:h-5 md:w-5 stroke-white text-white font-bold' />
                }
            </button>
            {
                isOpen && (
                    <ul className='absolute right-0 mt-2 bg-headerSubmenu p-4 shadow-lg rounded-md w-max'>
                        {items.map(item => (
                            <Link href={item.href} key={item.label}>
                                <li key={item.label} className='text-white mb-3'>{item.label}</li>
                            </Link>
                        ))}
                    </ul>
                )
            }
        </div>
    )
}

export default Dropdown