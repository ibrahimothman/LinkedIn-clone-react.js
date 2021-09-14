import React, {useState, useContext} from 'react'
import './Login.css'
import { UserContext } from '../store/UserContext'

function Login() {

    const userCtx = useContext(UserContext)

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [photoUrl, setPhotoUrl] = useState('')

    const loginHandler = async (e) => {
        e.preventDefault()
        try {
            await userCtx.login({
                email,
                password
            })
        } catch(error) {
            alert('something went wrong while logging in' + error.message)
        }

    }

    const registerHandler = async() => {
        if (!name) {
            alert('please enter a full name')
            return
        }

        try {
            await userCtx.signup({
                email,
                password,
                name,
                photoUrl,
            })
        } catch(error) {
            alert('something went wrong while registering' + error.message)
        }
    }

    return (
        <div className='login'>
            <img src="../login-logo.png" alt="" />

            <form onSubmit={loginHandler}>
                <input type="text" placeholder='Full Name (required if registering)' value={name} onChange={e => setName(e.target.value)} />
                <input type="url" placeholder='Profile pic URL (optional)' value={photoUrl} onChange={e => setPhotoUrl(e.target.value)} />
                <input type="email" placeholder='Email (required)' value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder='Password (required)' value={password} onChange={e => setPassword(e.target.value)} />

                <button type="submit">Sign In</button>
            </form>

            <p>
                Not a member?{" "}
                <span onClick={registerHandler}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
