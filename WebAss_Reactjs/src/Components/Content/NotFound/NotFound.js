import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='content'>
            <div className='not-found'>
                <div className='error-code'>404</div>
                <h1>OPP!!! PAGE NOT FOUND</h1>
                <p className='mt-2'>Sorry the page you are looking doesn't exist</p>
                <div className='btn go-home'>
                    <Link to='/'>Go home</Link>
                </div>
            </div> 
        </div>
    )
}

export default NotFound