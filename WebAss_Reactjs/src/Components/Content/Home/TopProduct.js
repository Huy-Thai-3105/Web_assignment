import React from 'react'
import Card from '../../Card/Card'
import useFetchData from '../../../Hooks/useFetchData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'

const TopProduct = () => {
    const [moveAmount, setMoveAmount] = React.useState(0)
    const [hotProducts, setHotProducts] = React.useState([])
    const cardListRef = React.useRef(null)
    const hotTabRef = React.useRef(null)
    const {data} = useFetchData('http://localhost/php/ass_backend/Product/read')

    React.useEffect(() => {
        if (data.length !== 0) {
            let random = Math.floor((Math.random() * 1000) % data.length)
            setHotProducts(data.slice(random, random + 6))
        }
    }, [data])

    const handleMoveLeft = () => {
        setMoveAmount(Math.min(Math.abs(moveAmount - 240), 0))
    }

    const handleMoveRight = () => {
        setMoveAmount(moveAmount + 240)
    }

    React.useEffect(() => {
        if (moveAmount >= 0) {
            cardListRef.current.scroll({
                top: 0,
                left: moveAmount,
                behavior: 'smooth'
            })
        }
    }, [moveAmount])

    return (  
        <div className="second-background py-5">
            <div
                ref={hotTabRef}
                className="trending grid"
            >
                <div className='arrow'>
                    <div>
                        <FontAwesomeIcon 
                            icon={faCircleChevronLeft}
                            onClick={handleMoveLeft}
                        />
                    </div>
                    <div>
                        <FontAwesomeIcon 
                            icon={faCircleChevronRight}
                            onClick={handleMoveRight}
                        />
                    </div>
                </div>
                <div className="trending__header mb-3">
                    <h2>Trending</h2>
                </div>
                <div
                    ref={cardListRef} 
                    className="cardlist"
                >
                    {hotProducts && hotProducts.length !== 0 && hotProducts.map((product) => (
                        <Card 
                            key={product.id}
                            id={product.id}
                            name={product.product_name}
                            price={product.price}
                            reviewPoint={product.star_review}
                            images={product.image}
                            type={product.type}
                            brand={product.brand}
                        />
                    ))}
                    {hotProducts && hotProducts.length === 0 && <p>No product found</p>}
                </div>
            </div>
        </div>
    ) 
}

export default TopProduct   