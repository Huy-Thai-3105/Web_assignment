import clsx from 'clsx'
import React from 'react'
import useFetchData from '../../../Hooks/useFetchData'

const OrderCardElement = ({product}) => {
    const [trimName, setTrimName] = React.useState('')
    const [imgs, setImgs] = React.useState()
    const [brand, setBrand] = React.useState()

    React.useEffect(() => {
        if (product && product?.image && typeof product?.image === 'string')
            setImgs(product.image.split(','))
        if (product && product?.product_name)
            setTrimName(product.product_name.replaceAll(' ', ''))
        if (product && product?.brand)
            setBrand(product.brand)
    }, [product])

    return (
        <div className="order-card__product">
            <div className="d-flex align-items-center gap-3">
                <img 
                    src={imgs && brand && trimName ? `http://localhost/php/ass_backend/imgs/products/${brand}/${trimName}/${imgs[0]}` : ''} 
                    alt="productImg"
                    style={{
                        width: '150px'
                    }}
                />
                <div>
                    <p><b>{product ? product.product_name : 'Unknowned'}</b></p>
                    <p><b>Quantity:</b> {product.quantity ? product.quantity : '1'}</p>
                </div>
            </div>
            <p>Price: {product ? product.price * product.quantity : ''}</p>
        </div>
    )
}

const OrderCard = ({products}) => {
    return (
        <div className="order-card">
            {products && products.map((product, i) => (
                <OrderCardElement 
                    key={i}
                    product={product}
                />
            ))}
        </div>
    )
}


const OrderTab = ({id, selectedTab}) => {
    const {data} = useFetchData(`http://localhost/php/ass_backend/Order/read/${id}`)
    const [orders, setOrders] = React.useState()
    const [accumulatedPoint, setAcculatedPoint] = React.useState();


    React.useEffect(() => {
        setOrders(data)
    }, [data])


    React.useEffect(() => {
        // abort controller
        const controller = new AbortController();
        const signal = controller.signal;
    
        const getAccumulatedPoint = async () => {
          const resp = await fetch(
            `http://localhost/php/ass_backend/Order/total?user_id=${id}`,
            { signal }
          );
    
          if (!resp.ok) {
            alert("Something wrong");
          }
    
          const json = await resp.json();
          console.log(json);
          setAcculatedPoint(json);
        };
        getAccumulatedPoint();
      }, [id]);
    return (
        <div 
            className={clsx("orders", {
                "disappear": selectedTab !== "Orders"
            })}
        >
            <h4>Accumulated point: { accumulatedPoint ? accumulatedPoint.point : 0} </h4>
            {orders && orders.length !== 0 && orders.map((order, i) => (
                <OrderCard 
                    key={i}
                    products={order.product_list}
                />
            ))}
            {orders && orders.length === 0 && <p className='fs-5 text-center text-muted'>No order found</p>}
        </div>
    )
}

export default OrderTab