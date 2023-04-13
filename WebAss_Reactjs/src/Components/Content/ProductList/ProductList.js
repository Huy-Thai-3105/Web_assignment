import React from 'react'
import ProductFilter from './ProductFilter'
import Card from '../../Card/Card'
import useFetchData from '../../../Hooks/useFetchData'
import './ProductList.css'
import { useParams } from 'react-router'
import clsx from 'clsx'

const BrandProduct = ({brand, setCurrentPage, setAllProducts, showProducts, showFilter, setShowFilter}) => {
    const {data} = useFetchData(`http://localhost/php/ass_backend/Product/readByBrand/${brand}`)
    React.useEffect(() => {
        setAllProducts(data)
        setCurrentPage(0)
    }, [data])

    return (
        <>
            <div className="list-title grid">
                <p className="text-muted fs-2">Product</p>
            </div>
            
            <div className='list-content grid'>
                <div className="list-fifter__title mb-3">
                    <p 
                        className="h6 btn button__submit"
                        onClick={() => setShowFilter(!showFilter)}
                    >Fifter</p>
                </div>

                {showProducts && showProducts.length !== 0 ?
                <div className='list-product mb-3'>
                    <div className="cardlist">
                        {Array.isArray(showProducts) && showProducts.map((product) => (
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
                    </div>
                </div>
                    :
                    <p className='grid text-muted fs-4 my-5'>No products found</p>
                }
            </div>
        </>
    )
}

const AllProduct = ({setAllProducts, showProducts, showFilter, setShowFilter}) => {
    const {data, fetchErr} = useFetchData('http://localhost/php/ass_backend/Product/read')
    React.useEffect(() => {
        setAllProducts(data)
    }, [data])

    return (
        <>
            <div className="list-title grid">
                <p className="text-muted fs-2">Product</p>
            </div>
            <div className='list-content grid'>
                <div className="list-fifter__title mb-3">
                    <p 
                        className="h6 btn button__submit"
                        onClick={() => setShowFilter(!showFilter)}
                    >Fifter</p>
                </div>

                {showProducts && showProducts.length !== 0 ?
                    <div className='list-product mb-3'>
                        <div className="cardlist">
                            {showProducts && !fetchErr && showProducts.map((product) => (
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
                        </div>
                    </div>
                    :
                    <p className='grid text-muted fs-4 my-5'>No products found</p>
                }
            </div>
            
        </>
    )
}


const ProductList = () => {
    const {brand} = useParams()
    const [showFilter, setShowFilter] = React.useState(false)
    const [allProducts, setAllProducts] = React.useState([])
    const [showProducts, setShowProducts] = React.useState([])
    const [totalPage, setTotalPage] = React.useState(0)
    const [currentPage, setCurrentPage] = React.useState(0)

    React.useEffect(() => {
        window.scrollTo(0,0)
    }, [currentPage])

    React.useEffect(()  => {
        let len = allProducts.length
        setTotalPage(Math.ceil(len / 10))
        setShowProducts(allProducts.slice(currentPage*10, currentPage*10+10))
    }, [allProducts])
    
    React.useEffect(() => {
        setShowProducts(allProducts.slice(currentPage*10, currentPage*10+10))
    }, [currentPage])

    const handleForwardPage = () => {
        setCurrentPage(currentPage <= totalPage ? currentPage+1 : totalPage)
    }

    const handleBackwardPage = () => {
        setCurrentPage(currentPage >= 0 ? currentPage-1 : 0)
    }


    return (
        <>
            <div className='content'>
                {brand !== undefined && <BrandProduct
                    brand={brand}
                    setCurrentPage={setCurrentPage}
                    setAllProducts={setAllProducts}
                    showProducts={showProducts}
                    showFilter={showFilter}
                    setShowFilter={setShowFilter}
                />}
                {brand === undefined && <AllProduct
                    setAllProducts={setAllProducts}
                    showProducts={showProducts}
                    showFilter={showFilter}
                    setShowFilter={setShowFilter}
                />}
            </div>
            {showFilter && <ProductFilter 
                showFilter={showFilter} 
                setShowFilter={setShowFilter}
                setAllProducts={setAllProducts}
            />}
            <div className="list-direction">
                <div
                    className={clsx({
                        'disappear': currentPage <= 0
                    })} 
                    onClick={handleBackwardPage} 
                    style={{cursor: 'pointer'}}>
                    {'<'}
                </div>
                <div
                    className={clsx({
                        'disappear': currentPage >= totalPage-1
                    })}  
                    onClick={handleForwardPage} 
                    style={{cursor: 'pointer'}}>
                    {'>'}
                </div>
            </div>
        </>
    )
}

export default ProductList