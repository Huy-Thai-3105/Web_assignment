import axios from 'axios'
import React from 'react'
import { CookiesProvider, useCookies } from 'react-cookie'

const UserContext = React.createContext({})

export const UserProvider = ({ children }) => {
    const [userCookies, setUserCookies, removeUserCookies] = useCookies(['user'])
    const [login, setLogin] = React.useState(userCookies && userCookies?.login ? userCookies.login : false)
    const [token, setToken] = React.useState(userCookies && userCookies?.token ? userCookies.token : '')
    const [cart, setCart] = React.useState(userCookies && userCookies.cart ? userCookies.cart : [])
    const [loginErr, setLoginErr] = React.useState('')
    const [signupErr, setSignupErr] = React.useState(undefined)
    const [updateMessage, setUpdateMessage] = React.useState()
    const [addToCartMessage, setAddToCartMessage] = React.useState()
    const [orderMessage, setOrderMessage] = React.useState()
 
    React.useEffect(() => {
        if (token !== '') {
            let time = 3 * 3600
            setUserCookies('token', token, {path: '/', maxAge: time})
            setUserCookies('login', login, {path: '/', maxAge: time})
        }
        else {
            removeUserCookies('token')
            removeUserCookies('login')
        }
    }, [token, login])

    React.useEffect(() => {
        if (cart.length !== 0) {
            let time = 3 * 3600
            setUserCookies('cart', cart, {path: '/', maxAge: time})
        }
        else 
            removeUserCookies('cart')
    }, [cart])

    const handleLogin = async (username, password) => {
        if (username === '')
            setLoginErr("Please enter username")
        else if (password === '')
            setLoginErr('Please enter password')
        else {
            const data = JSON.stringify({
                username: username,
                password: password
            })
            const config = {
                method: 'post',
                url: 'http://localhost/php/ass_backend/User/login',
                headers: { 
                  'Content-Type': 'application/json'
                },
                data : data
            }
            const respone = await axios(config)
            if (respone.data?.token) {
                setToken(respone.data.token)
                setLogin(true)
            }
            else
                setLoginErr(respone.data.message)
        }
    }

    const handleLogout = () => {
        setLogin(false)
        setToken('')
        setLoginErr('')
        setCart([])
    }

    const handleCreate = async (email, password, username) => {
        const data = JSON.stringify({
            username,   
            email,
            password
        })
        const config = {
            method: 'post',
            url : 'http://localhost/php/ass_backend/User/create',
            headers :{
                'Content-Type': 'application/json'
            },
            data : data
        }
        const respone = await axios(config)
        console.log(respone.data)
        setSignupErr(respone.data.message)
    }

    const handleUpdate = async (id, firstName, lastName, email, contactNumber, address, city, district) => {
        const data = JSON.stringify({
            id,
            first_name: firstName,
            last_name: lastName,
            contact_number: contactNumber,
            email,
            address,
            city,
            district
        })
        const config = {
            method: 'post',
            url: 'http://localhost/php/ass_backend/User/update',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
        };
        const respone = await axios(config)
        setUpdateMessage(respone.data.message)
    }

    const handleUpdateRole = async (id, role) => {
        const data = JSON.stringify({
            id,
            role
        })
        const config = {
            method: 'post',
            url: 'http://localhost/php/ass_backend/User/update',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
        }
        const respone = await axios(config)
    }

    const handleAddToCart = (id, name, brand, trimName, imgs, price, quantity) => {
        const newItem = {
            id, 
            name,
            brand,
            trimName, 
            imgs, 
            price,
            quantity
        }
        if (cart.filter(item => item.id === newItem.id).length === 0) {
            setCart([...cart, newItem])
            setAddToCartMessage('Product has been add to your cart')
        }
        else {
            setAddToCartMessage('Product has already in your cart')
        }
    }

    const handleRemoveFromCart = (id) => {
        const newList = cart.filter(item => item.id !== id)
        setCart(newList)
    }

    const handleUpdateCardElementQuantity = (id, quantity) => {
        const newList = [...cart]
        newList.forEach((item) => {
            if (item.id === id)
                item.quantity = quantity
        })
        setCart(newList)
    }

    const handleOrder = async (userId, cartList) => {
        const data = {
            user_id: userId,
            product_list: []
        }
        cartList.forEach(product => {
            data.product_list.push({
                product_id: product.id,
                quantity: product.quantity
            })
        })
        console.log(data)
        const config = {
            method: 'post',
            url: 'http://localhost/php/ass_backend/Order/create',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : JSON.stringify(data)
        }
        const respone = await axios(config)
        setOrderMessage(respone.data.message)
    }

    const handleAddComment = async (productId, userId, comment, rate) => {
        const data = JSON.stringify({
            product_id: productId,
            user_id: userId,
            star_rating: rate,
            content: comment
        })
        const config = {
            method: 'post',
            url: 'http://localhost/php/ass_backend/Review/create',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
        }
        const respone = await axios(config)
        if (respone.data.message === 'error')
            return false
        return true
    }

    return (
        <CookiesProvider>
            <UserContext.Provider
                value={{
                    login,
                    setLogin,
                    token,
                    setToken,
                    loginErr,
                    setLoginErr,
                    signupErr,
                    setSignupErr,
                    updateMessage,
                    setUpdateMessage,
                    cart,
                    setCart,
                    addToCartMessage,
                    setAddToCartMessage,
                    orderMessage,
                    setOrderMessage,
                    handleLogin,
                    handleLogout,
                    handleCreate,
                    handleUpdate,
                    handleUpdateRole,
                    handleAddToCart,
                    handleRemoveFromCart,
                    handleUpdateCardElementQuantity,
                    handleOrder,
                    handleAddComment
                }}
            >
                {children}
            </UserContext.Provider>
        </CookiesProvider>
    )

}

export default UserContext