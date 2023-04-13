import React from 'react'
import UserContext from '../../../Contexts/UserContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const CartElement = ({ product, handleRemoveFromCart }) => {
    const {handleUpdateCardElementQuantity} = React.useContext(UserContext)
    const [totalPrice, setTotalPrice] = React.useState(0)
    const [quantity, setQuantity] = React.useState(product.quantity)

    React.useEffect(() => {
        setTotalPrice(0)
    }, [product])

    React.useEffect(() => {
        setTotalPrice(product.price * quantity)
        handleUpdateCardElementQuantity(product.id, quantity)
    }, [quantity])

    return (
        <>
            <div className="cart-element mb-3">
                <img 
                    src={`http://localhost/php/ass_backend/imgs/products/${product.brand}/${product.trimName}/${product.imgs[0]}`} 
                    alt={product.name}
                />
                <h5>{product?.name ? product.name : ''}</h5>
                <div>
                    <input 
                        className="form-control" 
                        type="number"
                        min={1}
                        value={quantity} 
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                </div>
                <p>
                    <span className="fs-5 mt-2 minus-text">{`\u0024` + totalPrice}</span>
                </p>
                <FontAwesomeIcon 
                    icon={faTrashCan} 
                    className="button__delete"
                    onClick={() => handleRemoveFromCart(product.id)}
                >
                </FontAwesomeIcon>
            </div>
            <hr/>
        </>
    )
}

const CartList = () => {
    const {cart, handleRemoveFromCart} = React.useContext(UserContext)

    return (
        <div className='cart-content__list'>
            {cart && cart.map((product, i) => (
                <CartElement 
                    key={i}
                    product={product}
                    handleRemoveFromCart={handleRemoveFromCart}
                />
            ))}
            {
                cart.length === 0 && <p className='text-center fs-5 py-2 text-muted'>Your card is empty</p>
            }   
        </div>
    )
}

export default CartList