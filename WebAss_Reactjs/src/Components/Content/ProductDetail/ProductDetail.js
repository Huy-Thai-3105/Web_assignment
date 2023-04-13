import React from 'react'
import { useParams } from 'react-router-dom'
import Tab from '../../Tab/Tab'
import ProductBrief from './ProductBrief'
import './ProductDetail.css'
import RelatedProduct from './RelatedProduct'


const ProductDetail = () => {
    const { id, brand } = useParams()
    React.useEffect(() => {
        window.scrollTo(0,0)
    }, [id])

    return (
        <div className='content'>
            <ProductBrief 
                id={id}
            />
            <Tab
                tabNames={['Description', 'Tech', 'Reviews']}
                id={id}
            />
            <RelatedProduct
                id={id}
                brand={brand}
            />
        </div>
    )
}

export default ProductDetail