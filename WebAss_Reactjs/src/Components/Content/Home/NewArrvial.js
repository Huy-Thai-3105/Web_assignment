import React from 'react'
import ProductCard from '../../Card/Card'
import useFetchData from '../../../Hooks/useFetchData'

const NewArrvial = () => {
    const [newArrivalProducts, setNewArrivalProducts] = React.useState([])
    const {data} = useFetchData('http://localhost/php/ass_backend/Product/read')

    React.useEffect(() => {
        if (data.length !== 0) {
            setNewArrivalProducts(data.slice(0, Math.min(8, data.length)))
        }
    }, [data])

    return (
        <div className="new-arrival grid mb-3 py-5">
            <div className="new-arrival__header h3 mb-3">
                New arrival
                <hr/>
            </div>
            <div className="cardlist">
                {newArrivalProducts && newArrivalProducts.length !== 0 && newArrivalProducts.map((product) => (
                    <ProductCard 
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
                {newArrivalProducts && newArrivalProducts.length === 0 && <p>No product found</p>}
            </div>
        </div>
    )
}

export default NewArrvial