'use client'
import { useState } from "react"
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from "next/navigation";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [remember, setRememeber] = useState(false);

    const [recaptchaToken, setRecaptchaToken] = useState('')
    const router = useRouter()

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!recaptchaToken) {
            setError([{ message: 'Please complete the recaptcha' }])
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, remember, recaptchaToken })
            })

            const data = await response.json();


            if (response.ok) {

                if (typeof window !== 'undefined') {
                    localStorage.setItem('token', data.token);
                    // window.location.href = '/dashboard';
                    router.push('/dashboard')
                }

            } else {
                setError(data)
                console.log(data)
            }

        } catch (err) {
            console.log('errorrr :', err)
            setError([{ message: 'مشکلی در اتصال با سرور وجود دارد' }])
        }
    }

    const handleCheckbox = (e) => {
        const checked = e.target.checked;
        setRememeber(checked)
    }



    return (
        <div className="w-full h-full" style={{ paddingTop: '100px' }}>

            <div style={{ backgroundColor: '#1E1E1E' }} className=' p-6 space-y-2 md:space-y-6 sm:p-8  max-w-lg mx-auto mt-20 mb-24 rounded-lg '>

                <div className='login-page-title'>
                    <h1 className='text-white mb-6 text-2xl font-semibold text-center'>ورود به فاوو ایونت</h1>
                </div>
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


                <form onSubmit={handleLogin} className='space-y-4 md:space-y-4'>
                    <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-100 dark:text-white'>
                        ایمیل
                    </label>
                    <input
                        type='email'
                        placeholder='مثال : test@gmail.com'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className='focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    />
                    <label htmlFor='password' className='block  text-sm font-medium text-gray-100 dark:text-white'>
                        رمز عبور
                    </label>
                    <input
                        type='password'
                        placeholder='رمز عبور'
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className='focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    />

                    <label className=' flex mb-2 text-sm font-medium text-gray-100 dark:text-white'>
                        <input
                            type="checkbox"
                            name="remember"
                            checked={remember}
                            onChange={handleCheckbox}
                            className="ml-2 flex "

                        />
                        منو بخاطر بسپار
                    </label>

                    <ReCAPTCHA
                        sitekey="6LenkoEqAAAAAAMnrqlyhNyetbgdh6XKnEyvzR_3"
                        onChange={(token) => setRecaptchaToken(token)}
                    />

                    <button type="submit" className="w-full text-white bg-secondary hover:bg-gray-500 focus:bg-gray-600 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">ورود</button>
                </form>
            </div>
        </div>
    )
}

export default Login