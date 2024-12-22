'use client'

import { useEffect, useState } from 'react';
import './dashboard.css'
import Link from 'next/link';
import useAuthStore from '@/store/authStore';
import { tokenVerifier } from '@/utils/tokenVerifier';
import { getUser } from '@/utils/getUser';

import { useRouter } from 'next/navigation';

export default function DashLayout({ children }) {
    const [error, setError] = useState(null);

    const { setUser, user, logout, loading, setLoading } = useAuthStore()

    const router = useRouter()
    
    useEffect(() => {
        const tokenChecker = async () => {
            
            const token = localStorage.getItem('token');

            if (!token) {
                // window.location.href = '/'
                // redirect('/')
                router.push('/')
                setLoading(false);
                return
            }

            const recievedToken = await tokenVerifier(token);

            if (!recievedToken.valid) {
                setError([{ message: 'توکن معتبر نیست' }]);
                console.log('invalid token')
                logout()
                router.push('/')
                setLoading(false);
            } else {
                try {
                    const user = await getUser(token);
                    setUser(user)
                    
                } catch (err) {
                    setError([{ message: 'خطا در دریافت کاربر' }])
                } finally {
                    setLoading(false);
                }
            }

        }
        tokenChecker()
    }, [setUser, setLoading , logout]);

    if (loading || !user) {
        return <p className='text-white'>در حال بارگزاری</p>;
    }


    return (
        <div >
            <div className='flex'>
                <aside className="right-bar">
                    <div className="right-bar-title">
                        <h1> خوش اومدی  {user.fullname}</h1>
                        <Link href="/" style={{color:'rgb(171 237 251)'}}> مشاهده وب سایت  </Link><br />
                        <button onClick={logout}>خروج از پنل مدیریت</button>
                    </div>
                    <hr />
                    <div className="right-bar-menu">
                        <ul>

                            <li className="fa fa-tachometer"  ><Link href="/dashboard"> داشبورد</Link></li>
                            <li className="fa fa-tachometer"  ><Link href="/dashboard/add-post"> نوشتن وبلاگ</Link></li>
                            
                        </ul>
                    </div>
                </aside>
                <main className='main-dash'>
                    {children}
                </main>
            </div>

            {error && <p>{error[0].message}</p>}
        </div>
    )
}