import React from 'react'
import Bill from './Bill'
import CartList from './CartList'
import UserContext from '../../../Contexts/UserContext'

import './Cart.css'

const Cart = () => {
    const {login} = React.useContext(UserContext)

    return (
        <div className='content'>
            {login ?
                <div className='cart'>
                    <div className="cart-title grid mb-3">
                        <p className="text-muted fs-2">Cart</p>
                    </div>

                    <form 
                        className="cart-content grid"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <CartList />
                        <Bill />
                    </form>
                </div>
                :
                <p className='fs-4 text-muted grid text-center py-5'>
                    Please login to see your product
                </p>
            }
        </div>
    )
}

export default Cart