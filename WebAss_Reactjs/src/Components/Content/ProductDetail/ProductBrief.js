import clsx from 'clsx'
import React from 'react'
import useFetchData from '../../../Hooks/useFetchData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import UserContext from '../../../Contexts/UserContext'
import ToastMessage from '../../ToastMessage/ToastMessage'

const ProductBrief = ({ id }) => {
    const {handleAddToCart, addToCartMessage, setAddToCartMessage} = React.useContext(UserContext)
    const {data} = useFetchData(`http://localhost/php/ass_backend/Product/read/${id}`)
    const [selectedImg, setSeletedImg] = React.useState(0)
    const [product, setProduct] = React.useState(null)
    const [imgs, setImgs] = React.useState([])
    const [pointStar, setPointStar] = React.useState([])
    const [trimName, setTrimName] = React.useState('')
    const [quantity, setQuantity] = React.useState(1)
    const imgListRef = React.useRef(null)

    React.useEffect(() => {
        const newlist = data?.image ? data.image.split(',') : []
        if (newlist)
            setImgs(newlist)
        if (data)
            setProduct(data)
        setSeletedImg(0)
    }, [data])

    // handle preview star
    React.useEffect(() => {
        let temp = []
        if (product && product?.star_review && product?.product_name) {
            for (let i=0; i < 5; i++) {
                if (i < product.star_review)
                    temp.push(true)
                else
                    temp.push(false)
            }
            setTrimName(product.product_name.replaceAll(' ', ''))
        }
        setPointStar(temp)
    }, [product])


    // handle scrolling effect
    React.useEffect(() => {
        const horizontalScroll = () => {
            let scrollAmount = 50
            imgListRef.current.addEventListener('wheel', (e) => {
                scrollAmount += e.wheelDelta*2
                imgListRef.current.scroll({
                    top: 0,
                    left: scrollAmount,
                    behavior: 'smooth'
                })
                e.preventDefault()
            } )
        }
        horizontalScroll()
    }, [imgListRef])

    // handle remove toast message
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
            <div className="product-detail grid">
                <div className="product-img">
                    <div className="product-img__main mb-3">
                        {imgs && imgs.map((img, i) => (
                            <img 
                                key={i}
                                src={product?.brand && trimName && img ? `http://localhost/php/ass_backend/imgs/products/${product.brand}/${trimName}/${img}` : ''} 
                                alt={`${trimName}`}
                                className={clsx({
                                    'disappear': selectedImg === i ? false : true
                                })}
                            />
                        ))}
                    </div>
                    <div 
                        className="product-img__list"
                        ref={imgListRef}
                    >
                        {imgs && imgs.map((img, i) => (
                            <img 
                                key={i}
                                src={product?.brand && trimName && img ? `http://localhost/php/ass_backend/imgs/products/${product.brand}/${trimName}/${img}` : ''} 
                                alt={`${trimName}`}
                                className={clsx({
                                    'img--selected': selectedImg === i ? true : false
                                })}
                                onClick={() => {
                                    setSeletedImg(i)
                                }}
                            />
                        ))}
                    </div>
                </div>
                <div className="product-highlight">
                    <h4 className="mb-3">{product?.product_name ? product.product_name : ''}</h4>
                    <div className="product-highlight__review mb-4">
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
                    <div className="product-highlight__feature mb-4">
                        <p className="lead fw-normal">Highlight feature</p>
                        <ul>
                            <li>{product?.hf_1 ? product.hf_1 : ''}</li>
                            <li>{product?.hf_2 ? product.hf_2 : ''}</li>
                            <li>{product?.hf_3 ? product.hf_3 : ''}</li>
                            <li>{product?.hf_4 ? product.hf_4 : ''}</li>
                        </ul>
                        <p className="fs-4">
                            Price: 
                            <span className="fs-4 mt-2 ps-2 focus-text">{`\u0024 ${product?.price ? product.price : ''}`}</span>
                        </p>
                    </div>
                    <div className="product-buyform">
                        <div className="product-buyform__quantity mb-3">
                            <button 
                                className="btn btn-light fs-5"
                                onClick={() => setQuantity(quantity-1)}
                            >
                                &minus;
                            </button>
                            <input 
                                className="form-control" 
                                type="number" 
                                value={quantity}
                                readOnly
                            />
                            <button 
                                className="btn btn-light fs-5"
                                onClick={() => setQuantity(quantity+1)}
                            >
                                {'+'}
                            </button>
                        </div>
                        <div className="product-buyform__button mb-3">
                            <div className="btn button__buy me-2">Buy Now</div>
                            <div 
                                className="btn button__addcart"
                                onClick={() => handleAddToCart(id, product?.product_name, product?.brand, trimName, imgs, product?.price, quantity)}
                            >
                                Add to cart
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductBrief