import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AdminLogin = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setMessage("")

        try {
            const response = await axios.post('http://localhost:5000/api/auth/admin', formData)

            if (response.data.token) {
                localStorage.setItem('adminToken', response.data.token)
                localStorage.setItem('adminUser', JSON.stringify(response.data.user))
                setMessage("Login successful!")
                navigate('/admin/dashboard')
            }
        } catch (error) {
            setMessage(error.response?.data?.message || "Login failed. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='h-[calc(100vh-120px)] flex justify-center items-center '>
            <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <h2 className='text-xl font-semibold mb-4'>Admin Login</h2>

                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="username">
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder='Admin Username'
                            value={formData.username}
                            onChange={handleChange}
                            className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder='Password'
                            value={formData.password}
                            onChange={handleChange}
                            className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'
                            required
                        />
                    </div>
                    {
                        message && (
                            <p className={`text-xs italic mb-3 ${message.includes('successful') ? 'text-green-500' : 'text-red-500'}`}>
                                {message}
                            </p>
                        )
                    }
                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className='bg-blue-500 hover:bg-blue-700 disabled:bg-blue-300 text-white font-bold py-2 px-8 rounded focus:outline-none'
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </div>
                </form>

                <p className='mt-5 text-center text-gray-500 text-xs'>©2025 Book Store Admin. All rights reserved.</p>
            </div>
        </div>
    )
}

export default AdminLogin
