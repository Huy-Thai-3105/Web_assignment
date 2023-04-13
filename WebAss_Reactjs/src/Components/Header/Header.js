import React from 'react'
import Nav from "./Nav"
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css'
import SubNav from './SubNav'

const Header = () => {
    const [disappear, setDisappear] = React.useState(true)

    return (
        <header id='header'>
            <Nav
                disappear={disappear}
                setDisappear={setDisappear} 
            />
            <SubNav />
        </header>
    )
}

export default Header