'use client'

import { FaInstagram } from 'react-icons/fa'
import Link from 'next/link'
import { useState } from 'react'

import './FixedSticker.css'



const FixedSticker = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = ()=> {
        setIsOpen(prev => !prev)
        
    }

    return (
        <div className="fixed-sticker">
            <button onClick={handleToggle} className={`${isOpen ? 'fixed-sticker-active-btn' : ''} hover:bg-slate-700`}>
                <span> مشاوره تخصصی &#8595;</span>
            </button>

            <div className={`fixed-sticker-numbers ${isOpen ? 'fixed-sticker-active fixed-sticker-active-btn2' : ''}`} >
                <Link href="tel:09125348339">09125348339</Link>
                <Link href="tel:09191001007">09191001007</Link>
                <Link href="tel:09129008011">09129008011</Link>
                <Link href="https://www.instagram.com/favo.event/?img_index=1" title="instagram" className='flex gap-1 items-center' > <span>favoevent</span> <FaInstagram /></Link>
            </div>

        </div>
    )
}

export default FixedSticker