import React from 'react'
import useFetchData from '../../../Hooks/useFetchData'
import Card from '../../Card/Card'

const RelatedProduct = ({ brand,id }) => {
    const { data, fetchErr } = useFetchData(`http://localhost/php/ass_backend/Product/readByBrand/${brand}`)
    const [relatedList, setRelatedList] = React.useState([])
    const cardListRef = React.useRef(null)
    const relatedProductRef = React.useRef(null)

    React.useEffect(() => {
        setRelatedList([])
    }, [])

    React.useEffect(() => {
        const newList = data.filter(p => p.id != id)
        if (newList.length < 4)
            setRelatedList(newList)
        else 
            setRelatedList(newList.slice(Math.floor(Math.random() * (newList.length - 0 + 1) + 0)))
    }, [data, id])

    React.useEffect(() => {
        const horizontalScroll = () => {
            let scrollAmount = 50
            relatedProductRef.current.addEventListener('wheel', (e) => {
                scrollAmount += e.wheelDelta*5
                cardListRef.current.scroll({
                    top: 0,
                    left: scrollAmount,
                    behavior: 'smooth'
                })
                e.preventDefault()
            } )
        }
        horizontalScroll()
    }, [cardListRef, relatedProductRef])

    return (
        <div className="related-product grid" ref={relatedProductRef}>
            <div className="related-product__title mb-3">
                <h5>Related products</h5>
            </div>
    
            <div className="related-product__list cardlist" ref={cardListRef}>
                {relatedList.length != 0 && !fetchErr && relatedList.map((product) => (
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
                 ) )}
                {relatedList.length == 0 && <p>No related product found</p>}
            </div>
        </div>
    )
}

export default RelatedProduct