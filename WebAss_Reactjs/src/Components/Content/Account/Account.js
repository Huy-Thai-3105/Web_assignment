import React from 'react'
import { useNavigate, useParams } from 'react-router'
import UserContext from '../../../Contexts/UserContext'
import useFetchData from '../../../Hooks/useFetchData'
import Tab from '../../Tab/Tab'
import "./Account.css"

const Account = () => {
    const { id } = useParams()
    const { login, token } = React.useContext(UserContext)
    const [admin, setAdmin] = React.useState(false)
    const { data } = useFetchData(`http://localhost/php/ass_backend/User/getUser`, token)
    let navigate = useNavigate()

    React.useEffect(() => {
        if (data && data?.user) {
            setAdmin(data.user.role === '1')
        }
    }, [data])

    React.useEffect(() => {
        if (!login)
            navigate('/')
    }, [login])

    React.useEffect(() => {
        window.scrollTo(0,0)
    })

    return (
        <div className='content'>
            <Tab
                id={id}
                tabNames={admin  ? ['Profile', 'Products', 'Post', 'Users'] : ['Profile', 'Orders']}
                admin={admin}
            />
        </div>
    )
}

export default Account