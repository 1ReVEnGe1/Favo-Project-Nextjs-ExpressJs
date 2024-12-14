'use client'

import './Navbar.css';
import logo from '../public/images/لوگو فاوو ایونت.webp';
import Dropdown from './Dropdown';
import { NAVBAR_SERVICES } from '@/database/db';
import { MOBILE_MENU_ITEMS } from '@/database/db';

import { Bars3Icon, ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import useAuthStore from '@/store/authStore';




const Navbar = () => {
    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
    const [isOpenSubmenu, setIsOpenSubmenu] = useState(false)
    const menuRef = useRef(null)
    const headerRef = useRef(null)

    const { logout , isLoggedIn } = useAuthStore()


    const handleMobileMenu = () => {
        setIsOpenMobileMenu(prev => !isOpenMobileMenu)
    }

    const handleCloseMobileMenu = () => {
        setIsOpenMobileMenu(prev => false)
        setIsOpenSubmenu(prev => false)
    }

    const handleClickOutside = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
            setIsOpenMobileMenu(prev => false)
            setIsOpenSubmenu(prev => false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true)
        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [])



    //----------------------------------------
    let lastScroll = 0
    useEffect(() => {

        const updateScrollDirection = () => {

            let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

            if (currentScroll > 30) {
                headerRef.current.classList.add('stickyHeader')
            }
            if (currentScroll < 30 && currentScroll > 0) {
                headerRef.current.classList.remove('stickyHeader');
                headerRef.current.classList.remove('disappearHeader');
            }

            if (currentScroll > 0 && lastScroll <= currentScroll) {
                lastScroll = currentScroll;

                if (headerRef.current.classList.contains('appearHeader') && currentScroll > 30) {
                    headerRef.current.classList.replace('appearHeader', 'disappearHeader')
                } else if (currentScroll > 30) {
                    headerRef.current.classList.add('disappearHeader')
                }

            } else {
                lastScroll = currentScroll;

                if (headerRef.current.classList.contains('disappearHeader') && currentScroll > 30) {
                    headerRef.current.classList.replace('disappearHeader', 'appearHeader')
                } else if (currentScroll > 30) {
                    headerRef.current.classList.add('appearHeader')
                }
            }

        }

        document.addEventListener('scroll', updateScrollDirection)

        return () => {
            document.removeEventListener('scroll', updateScrollDirection)
        }
    }, [lastScroll])


    const renderMenu = (items) => {
        return (
            <ul className={`w-full flex flex-col items-center`} >
                {
                    items.map((item, index) => (
                        <li key={index} in={index} className={` cursor-pointer w-full bg-transparent flex flex-col items-center justify-center`}   >
                            {
                                item.link ? (
                                    <Link href={item.link} className='text-xl w-full text-center hover:bg-secondary'  >{item.title}</Link>
                                ) : (
                                    <div onClick={() => setIsOpenSubmenu(prev => !isOpenSubmenu)} className='hover:bg-slate-700 relative w-full flex justify-center ' >
                                        <div className='menuu-item-align absolute right-0 w-10 h-full flex justify-center text-secondary ' >
                                            {
                                                isOpenSubmenu ? <ChevronDownIcon className={`w-8`} /> : <ChevronRightIcon className={`w-8`} />
                                            }

                                        </div>
                                        <button className='text-xl' >{item.title}</button>
                                    </div>
                                )
                            }
                            {isOpenSubmenu && (item.subMenu && renderMenu(item.subMenu))}
                        </li>
                    ))
                }
            </ul>
        )

    }


    return (
        <>

            <header style={{ 'zIndex': '101' }} className="header bg-headerGray headerFavo" ref={headerRef}>
                <div className="header-container">
                    <div className="header-right-part">
                        <Bars3Icon onClick={handleMobileMenu} className="h-10 w-10 font-extrabold text-gray-400 fa-bars" />
                    </div>

                    <nav className="main">
                        <ul className='main-nav'>
                            <Link href={'/'}><li className='text-white'>خانه</li></Link>
                            <Dropdown title="خدمات" items={NAVBAR_SERVICES} />
                            <Link href={'/gallery'}><li className='text-white  '>گالری</li></Link>
                            <Link href={'/menu'}><li className='text-white  '>منو ها</li></Link>
                            <Link href={'/'}><li className='text-white  '>تماس با ما</li></Link>
                            <Link href={'/weblogs'}><li className='text-white  '>وبلاگ</li></Link>
                            {/* <Link href={'/register'}><li className='text-white  '>ثبت نام</li></Link>
                            <Link href={'/login'}><li className='text-white  '>ورود</li></Link> */}
                            {
                                isLoggedIn && <button onClick={logout} ><li className='text-white  '>خروج</li></button>
                            }  

                        </ul>
                    </nav>
                    <div className='logo'>
                        <Link href={`/`}>
                            <Image
                                src={logo}
                                width={200}
                                height={100}
                                style={{ 'width': 'auto', 'height': '70px' }}

                                alt='لوگو فاوو ایونت'
                                placeholder='blur'
                            />
                        </Link>
                    </div>
                </div>
            </header>
            {
                isOpenMobileMenu && (
                    <div className='mobile-menuu-back'>
                        <div ref={menuRef} className="bg-primary text-white text-4xl absolute z-20 top-0 left-0 mobile-menuu">
                            <div className='mobile-menuu-top w-full relative flex justify-center'>
                                <Link href={'/'}>
                                    <Image
                                        src={logo}
                                        alt='تشریفات عروسی فاوو ایونت'
                                        width={150}
                                        style={{ 'objectFit': 'contain' }}

                                    />
                                    <span className=' absolute top-0 right-1 text-6xl w-max h-max ' onClick={handleCloseMobileMenu}>×</span>
                                </Link>
                            </div>
                            {
                                <nav className='mobile-menuu-items '>{renderMenu(MOBILE_MENU_ITEMS)}</nav>
                            }
                        </div>
                    </div>

                )
            }
        </>


    )


}

export default Navbar