import React from 'react'
import { Outlet } from "react-router-dom"
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'


const App = () => {
    return (
        <div className='App'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default App