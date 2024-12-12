'use client'

import { useEffect, useState } from 'react';
import './dashboard.css'
import Link from 'next/link';
import useAuthStore from '@/store/authStore';
import { tokenVerifier } from '@/utils/tokenVerifier';
import { getUser } from '@/utils/getUser';


export default function DashLayout({ children }) {
    const [error, setError] = useState(null);

    // const logout = useAuthStore((state) => state.logout)
    // const loading = useAuthStore((state) => state.loading)
    // const setLoading = useAuthStore((state) => state.setLoading)

    const { setUser, user, logout, loading, setLoading } = useAuthStore()

    
    useEffect(() => {
        const tokenChecker = async () => {
            
            const token = localStorage.getItem('token');

            if (!token) {
                window.location.href = '/'
                setLoading(false);
                return
            }

            const recievedToken = await tokenVerifier(token);

            if (!recievedToken.valid) {
                setError([{ message: 'توکن معتبر نیست' }]);
                console.log('invalid token')
                logout()
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

    if (loading) {
        return <p>در حال بارگزاری</p>;
    }


    return (
        <div style={{paddingTop:'100px'}}>
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