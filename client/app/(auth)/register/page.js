'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SignUp = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState(null);
    const router = useRouter();

    const base_url = process.env.NEXT_PUBLIC_BASE_URL_FRONT

    const handleSignUp = async (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            setError('Password do not match')
            return;
        }

        try {
            const res = await fetch(`${base_url}/api/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ fullname, email, password, confirmPassword })
            })

            if (res.ok) {
                router.push('/')
            } else {
                const data = await res.json();
                console.log(data.errorMessage);
                setError(data.errorMessage || 'Registeration failed')
            }
        } catch (err) {
            setError([{ message: 'مشکلی در اتصال به سرور رخ داده است.' }])
        }

    }



    return (
        <div className="w-full h-full" style={{ paddingTop: '100px' }}>
            <div style={{ backgroundColor: '#1E1E1E' }} className='p-6 space-y-2 md:space-y-6 sm:p-8  max-w-lg mx-auto mt-20 mb-24 rounded-lg '>

                <div className='login-page-title'>
                    <h1 className='text-white mb-6 text-2xl font-semibold text-center '>ثبت نام در فاوو ایونت</h1>
                </div>
                <div>
                    <div>
                        {Array.isArray(error) &&
                            error.map((err, index) => (
                                <p key={index} style={{ color: 'red' }}>{err.message}</p>
                            ))
                        }
                        {!Array.isArray(error) && error && (
                            <p style={{ color: 'red' }}>{error}</p>
                        )}
                    </div>

                </div>


                <form onSubmit={handleSignUp} className='space-y-4 md:space-y-6'>
                    <label htmlFor='fullname' className='block mb-2 text-sm font-medium text-gray-100 dark:text-white'>
                        نام و نام خانوادگی
                    </label>
                    <input
                        type='text'
                        placeholder='مثال : امیررضا نوری'
                        name='fullname'
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        required
                        id='fullname'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    />
                    <label htmlFor='fullname' className='block mb-2 text-sm font-medium text-gray-100 dark:text-white'>
                        ایمیل
                    </label>
                    <input
                        type='email'
                        placeholder='مثال : test@gmail.com'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    />
                    <label htmlFor='fullname' className='block mb-2 text-sm font-medium text-gray-100 dark:text-white'>
                        رمز عبور
                    </label>
                    <input
                        type='password'
                        placeholder='حداقل 8 کاراکتر'
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    />
                    <label htmlFor='fullname' className='block mb-2 text-sm font-medium text-gray-100 dark:text-white'>
                        تکرار رمز عبور
                    </label>
                    <input
                        type='password'
                        placeholder='تکرار رمز عبور'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    />

                    <button type="submit" className="w-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">ساخت حساب</button>
                </form>
            </div>
        </div>
    )


}

export default SignUp;
