import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserContext from '../../Contexts/UserContext'
import clsx from 'clsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Sign.css'

const SignIn = () => {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [usernameErr, setUsernameErr] = React.useState('')
    const [passwordErr, setPasswordErr] = React.useState('')
    const { token, loginErr, setLoginErr, handleLogin } = React.useContext(UserContext)
    const navigate = useNavigate()

    React.useEffect(() => {
        document.title = 'Sign In'
    }, [])

    React.useEffect(() => {
        if (token)
            navigate('/')
    }, [navigate, token])

    React.useEffect(() => {
        if (loginErr === 'Invalid username')
            setUsernameErr(loginErr)
        else if (loginErr === 'Please enter username')
            setUsernameErr(loginErr)
        else 
            setPasswordErr(loginErr)
    }, [loginErr])

    return (
        <div className="login-bg">
            <div className="login">
                
                <form 
                    className="login__form"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="mb-3">
                        <h5 className="mb-2 fs-3 fw-bold">Sign in to Bard</h5>
                        <label className="form-label">
                            Don't have account ? &nbsp;
                            <Link to='/signup'>Create now</Link>
                        </label>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input 
                            type="text" 
                            className={clsx("form-control mb-2", {
                                'login-err--red': usernameErr !== ''
                            })}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <p className='login-err login-err--red'>{usernameErr}</p>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input 
                            type="password" 
                            className={clsx("form-control mb-2", {
                                'login-err--red': passwordErr !== ''
                            })}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <p className='login-err login-err--red'>{passwordErr}</p>
                    </div>
                    <div className="mb-3 text-center">
                        <label className="form-label">
                            Forget you password ? 
                            <a href="#">Click here</a> 
                        </label>
                    </div>
                    <input 
                        type="submit" 
                        className="btn button__submit" 
                        style={{color: 'white'}} 
                        value="Login now"
                        onClick={() => {
                            setUsernameErr('')
                            setPasswordErr('')
                            setLoginErr('') 
                            handleLogin(username, password)
                        }}
                    />
                </form>

                {/* <div className="login__other">
                    <a href="">
                        <img src="/imgs/svg/google_icon.svg" alt="" style={{width: '48px'}}/>
                    </a>
                    <a href="">
                        <img src="/imgs/svg/face_icon.svg" alt="" style={{width: '50px'}}/>
                    </a>
                </div> */}
            </div>
        </div>
    )
}

export default SignIn