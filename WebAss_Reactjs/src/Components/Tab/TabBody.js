import React from 'react'
import useFetchData from '../../Hooks/useFetchData'
import TechTab from './tabs/TechTab'
import ReviewTab from './tabs/ReviewTab'
import ProfileTab from './tabs/ProfileTab'
import OrderTab from './tabs/OrderTab'
import ProductTab from './tabs/ProductTab'
import BriefTab from './tabs/BriefTab'
import UserContext from '../../Contexts/UserContext'
import { useNavigate } from 'react-router'
import UsersTab from './tabs/UsersTab'
import NewsTab from './tabs/NewsTab'

const ProductTabBody = ({id, selectedTab}) => {
    const { data } = useFetchData(`http://localhost/php/ass_backend/Product/read/${id}`)
    const [product, setProduct] = React.useState(null)

    React.useEffect(() => {
        setProduct(data)
    }, [data])

    return (
        <>
            <BriefTab
                product={product}
                selectedTab={selectedTab}
            />

            <TechTab
                product={product}
                selectedTab={selectedTab}
            />

            <ReviewTab
                id={id}
                selectedTab={selectedTab}
            />
        </>
    )
}

const CustomerView = ({ id, selectedTab}) => {
    const { token } = React.useContext(UserContext)
    const navigate = useNavigate()
    const { data, fetchErr } = useFetchData(`http://localhost/php/ass_backend/User/getUser`, token)
    const [user, setUser] = React.useState(null)

    React.useEffect(() => {
        if (data.success === 0)
            navigate('/')
        else
            setUser(data.user)
    }, [data])

    return (
        <>
            <ProfileTab
                id={id}
                user={user}
                selectedTab={selectedTab}
            />
            <OrderTab
                id={id}
                selectedTab={selectedTab}
            />
        </>
    )
}

const AdminView = ({ id, selectedTab }) => {
    const { token } = React.useContext(UserContext)
    const navigate = useNavigate()
    const { data, fetchErr } = useFetchData(`http://localhost/php/ass_backend/User/getUser`, token)
    const [user, setUser] = React.useState(null)

    React.useEffect(() => {
        if (data.success === 0)
            navigate('/')
        else
            setUser(data.user)
    }, [data])

    return (
        <>
            <ProfileTab
                id={id}
                user={user}
                selectedTab={selectedTab}
            />
            <ProductTab
                selectedTab={selectedTab}
            />
            <NewsTab 
                selectedTab={selectedTab}
                user={user}
            />
            <UsersTab
                selectedTab={selectedTab}
            />
        </>
    )
}

const TabBody = ({ id, isProduct, admin, selectedTab, setSelectedTab}) => {
    return (
        <div className="tab-option-detail">
            {isProduct && 
                <ProductTabBody
                    id={id}
                    selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}
                />
            }
            {!isProduct && !admin &&
                <CustomerView
                    id={id}
                    selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}
                />
            }
            {!isProduct && admin &&
                <AdminView
                    id={id}
                    selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}
                />
            }
        </div>
    )
}

export default TabBody