import React from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import UserContext from '../../Contexts/UserContext'
import ToastMessage from '../ToastMessage/ToastMessage'
import './Card.css'

const ProductCard = ({ id, name, price, reviewPoint, images, brand }) => {
    const {handleAddToCart, addToCartMessage, setAddToCartMessage} = React.useContext(UserContext)
    const [trimName, setTrimName] = React.useState('')
    const [imgs, setImgs] = React.useState([])
    let pointStar = []

    for (let i=0; i < 5; i++) {
        if (i < reviewPoint) {
            pointStar.push(true)
        }
        else {
            pointStar.push(false)
        }
    }

    React.useEffect(() => {
        if (images && typeof images === 'string')
            setImgs(images.split(','))
        if (name)
            setTrimName(name.replaceAll(' ', ''))
    }, [name, images])

    React.useEffect(() => {
        let tid = setTimeout(() => setAddToCartMessage(null), 1500)

        return () => {
            clearTimeout(tid)
        }
    }, [addToCartMessage])

    return (
        <>
            {addToCartMessage && addToCartMessage !== '' &&
                <ToastMessage 
                    header={addToCartMessage === 'Product has been add to your cart' ? 'Success' : 'Fail'}
                    body={addToCartMessage}
                />
            }
            <div className="card-element border border-1">
                <div 
                    className="card-element__img" 
                    style={{
                        backgroundImage: brand && trimName && imgs ? `url(http://localhost/php/ass_backend/imgs/products/${brand}/${trimName}/${imgs[0]})` : ''
                    }}
                >
                    <div
                        className="card-element__buybtn"
                        onClick={() => handleAddToCart(id, name, brand, trimName, imgs, price, 1)}
                    >
                        Add to cart
                    </div>         
                </div>
                <div className="card-element__detail p-3">
                    <p className="text-muted">Smartphone</p>
                    <Link to={`/products/${brand}/${id}`}>{name}</Link>
                    <p className="fs-4 mt-2 focus-text">{`\u0024 ${price}`}</p>
                </div>
                <div className="card-element__review">
                    <div>
                        {pointStar.map((item, i) => (
                            <span key={i}>
                                <FontAwesomeIcon 
                                    icon={faStar}
                                    className={clsx("text-muted", {
                                        'review--select': item
                                    })}
                                ></FontAwesomeIcon>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard