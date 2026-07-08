import React, { useState, useContext } from 'react'
import { authContext } from '../context/AuthContext'

const Login = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)


    const { token, setToken, login, register, navigate, backendUrl } = useContext(authContext)
    const [currentState, setCurrentState] = useState('Login')


    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            if (currentState === 'Login') {
                await login(email, password)
            } else {
                await register(name, email, password)
            }
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <form onSubmit={handleSubmit}
            className='flex flex-col w-[50%] border-2 border-[#7AAACE] rounded-lg mx-auto m-6 p-5 gap-3'        >
            <div>
                <h1 className='text-4xl mb-2'>{currentState}</h1>
            </div>
            {currentState === 'Login' ? '' :
                <p>Username</p>
            }
            {currentState === 'Login' ? '' :
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='mb-3 border border-gray-300 rounded-sm p-2'

                    required
                />
            }
            <p>Email</p>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='mb-3 border border-gray-300 rounded-sm p-2'

                required
            />
            <p>Password</p>
            <input type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='mb-3 border border-gray-300 rounded-sm p-2'
                required

            />
            <div className="w-full flex justify-between text-sm -mt-2">
                <p className='cursor-pointer'>Forget your password?</p>
                {
                    currentState === 'Login'
                        ? <p className='cursor-pointer' onClick={() => setCurrentState('Sign Up')}>Create Account</p>
                        : <p className='cursor-pointer' onClick={() => setCurrentState('Login')}>Login Here</p>
                }
            </div>
            <button disabled={isLoading} className={`${isLoading ? "bg-[#7AAACE]" : "bg-[#355872]"} text-[#F7F8F0] rounded-lg px-8 py-2 mt-4`}>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>


        </form>
    )
}

export default Login
