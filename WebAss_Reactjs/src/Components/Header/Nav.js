import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faUser, faFileAlt, faTags, faCommentDots, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Search from './Search'
import UserContext from '../../Contexts/UserContext'
import useFetchData from '../../Hooks/useFetchData'

const SideBar = ({ login, user }) => {
    const [username, setUsername] = React.useState()
    const [userId, setUserId] = React.useState()
    const [role, setRole] = React.useState('false')

    React.useEffect(() => {
        if (user) {
            if (user?.role && user.role === "1")
                setRole('true')
            if (user?.id)
                setUserId(user.id)
            if (user?.username)
                setUsername(user.username)
        }
    }, [user])

    return (
        <Navbar expand={false} className='nav-bar'>
            <Navbar.Toggle 
                aria-controls="offcanvasNavbar"
                style={{
                    border: 'none',
                    backgroundColor: 'transparent'
                }}
            >
                <FontAwesomeIcon 
                    icon={faBars}
                    className='button__nav'
                ></FontAwesomeIcon>
            </Navbar.Toggle>
            <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="start"
            >
                <Offcanvas.Header closeButton>
                    <div className="offcanvas-title" id="offcanvasNavbarLabel"></div>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="offcanvas-body__info mb-4">
                        {login ? 
                            <>
                                <Link to={`/account/${userId}/${role}`}>
                                    <p className="h5">{username}</p>
                                    <FontAwesomeIcon icon={faUser} ></FontAwesomeIcon>
                                </Link>
                            </>
                            :
                            <>
                                <Link to='/signin'>
                                    <p className="h5">Log In</p>
                                    <FontAwesomeIcon icon={faUser} ></FontAwesomeIcon>
                                </Link>
                            </>
                        }
                        <Link to='/about'>
                            <p className="h5">About Us</p>
                            <FontAwesomeIcon icon={faFileAlt}></FontAwesomeIcon>
                        </Link>
                        <Link to='/'>
                            <p className="h5">Gift Sets</p>
                            <FontAwesomeIcon icon={faTags}></FontAwesomeIcon>
                        </Link>
                        <Link to='/'>
                            <p className="h5">Contact Us</p>
                            <FontAwesomeIcon icon={faCommentDots}></FontAwesomeIcon>
                        </Link>
                    </div>
                    <div className="offcanvas-body__product">
                        <Link to='/products' className="btn">
                            <p className="h5">Products</p>
                        </Link>
                        <Link to='/news' className="btn">
                            <p className="h5">News</p>
                        </Link>
                    </div>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar>
    )
}

const Logo = () => {
    return (
        <div className="logo">
            <Link to='/'>
                <div className="logo__box"></div>
            </Link>
        </div> 
    )
}

const User = ({ login, user, disappear, setDisappear, handleLogout }) => {
    const [username, setUsername] = React.useState()
    const [userId, setUserId] = React.useState()
    const navigate = useNavigate()

    React.useEffect(() => {
        if (user) {
            if (user?.id)
                setUserId(user.id)
            if (user?.username)
                setUsername(user.username)
        }
    }, [user])

    return (
        <div className="user">
            {login ?
                <>
                    <div 
                        className="user__search" 
                        onClick={() => {
                            setDisappear(!disappear)
                        }}
                    >
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="btn button__nav"
                        ></FontAwesomeIcon>
                        <Search
                            disappear={disappear}
                            setDisappear={setDisappear}
                        />
                    </div>
                    <Link to='/cart' className="user__cart">
                        <FontAwesomeIcon 
                            icon={faShoppingCart}
                            className="btn button__nav"
                        ></FontAwesomeIcon>
                    </Link>
                    <NavDropdown
                        id='dropdown-basic'
                        title={
                            <img src={`https://avatars.dicebear.com/api/bottts/${username}.svg`} alt="" className="user__ava" />
                        }
                        className='user__icon'
                    >
                        <Link to={`/account/${userId}`} className='dropdown-item'>Profile</Link>
                        <hr/>
                        <Link 
                            to='/'
                            className='dropdown-item'
                            onClick={(e) => {
                                e.preventDefault()
                                handleLogout()
                                navigate('/')
                            }}    
                        >Sign Out</Link>
                    </NavDropdown>
                </>
                :
                <>
                    <div className="user__sign">
                        <span><Link to='/signin'>Sign in</Link></span>
                        <span><Link to='/signup'>Sign up</Link> </span>
                    </div>
                    <div className="user__search">
                        <i className="fas fa-search btn button__nav"></i>
                    </div>
                    <a href="./cart.html" className="user__cart">
                        <i className="fas fa-shopping-cart btn button__nav"></i>
                    </a>
                </>
            }
        </div>
    )
}

const Nav = ({ disappear, setDisappear }) => {
    const {login, token, handleLogout} = React.useContext(UserContext)
    const { data } = useFetchData(`http://localhost/php/ass_backend/User/getUser`, token)
    const [user, setUser] = React.useState()

    React.useEffect(() => {
        if (data.user)
            setUser(data.user)
    }, [data])

    return (
        <div className="header-container grid">
            <SideBar 
                login={login}
                user={user}
            />
            <Logo />
            <User
                login={login}
                user={user}
                disappear={disappear}
                setDisappear={setDisappear} 
                handleLogout={handleLogout}
            />
        </div>
    )
}

export default Nav