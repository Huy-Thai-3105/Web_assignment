import clsx from 'clsx'
import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import useFetchData from '../../../Hooks/useFetchData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import ToastMessage from '../../ToastMessage/ToastMessage'

const ProductTableElement = ({id, name, images, brand, createdDate, modifiedDate, handleDelete}) => {
    const [trimName, setTrimName] = React.useState('')
    const [imgs, setImgs] = React.useState([])

    React.useEffect(() => {
        if (images && typeof images === 'string')
            setImgs(images.split(','))
        if (name)
            setTrimName(name.replaceAll(' ', ''))
    }, [name, images])

    return (
        <tr>
            <td>{id ? id : ''}</td>
            <td>{name ? name : ''}</td>
            <td>
                <img src={`http://localhost/php/ass_backend/imgs/products/${brand}/${trimName}/${imgs[0]}`} alt={trimName} style={{width: '200px'}}/>
            </td>
            <td>{createdDate}</td>
            <td>{modifiedDate}</td>
            <td>
                <form 
                    style={{marginBottom: '1rem'}}
                    onSubmit={e => e.preventDefault()}
                >
                    <div 
                        className="btn btn-danger"
                        onClick={() => handleDelete(id)}
                    >
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </div>
                </form>
                <Link 
                    to={`/products/edit/${id}`}
                    className="btn btn-primary"
                >
                    <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
                </Link>
            </td>
        </tr>
    )
}

const ProductTab = ({selectedTab}) => {
    const {data} = useFetchData('http://localhost/php/ass_backend/Product/read')
    const [products, setProducts] = React.useState([])
    const [deleteMessage, setDeleteMessage] = React.useState('')


    React.useEffect(() => {
        setProducts(data)
    }, [data])

    // handle remove toast message
    React.useEffect(() => {
        let tid = setTimeout(() => setDeleteMessage(null), 1500)

        return () => {
            clearTimeout(tid)
        }
    }, [deleteMessage])

    const handleDelete = async (id) => {
        if (id !== undefined) {
            const res = await axios.get(`http://localhost/php/ass_backend/Product/delete/${id}`)
            if (res.data.message === 'success') {
                let newList = products.filter((product) => product.id !== id)
                setProducts(newList)
            }
            setDeleteMessage(res.data.message)
        }
    }

    return (
        <>
            {deleteMessage && deleteMessage !== '' && 
                <ToastMessage 
                    header={deleteMessage === 'success' ? "Success" : "Fail"}
                    body={`Delete product ${deleteMessage}`}
                />
            }
            <div className={clsx('products', {
                'disappear': selectedTab !== 'Products'
            })}>
                <div className="add-btn">
                    <Link to="/products/add">
                        Add product
                    </Link>
                </div>

                <table className="item-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product name</th>
                            <th>Picture</th>
                            <th>Created</th>
                            <th>Modifiled</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.length !== 0 && products.map((product, i) => (
                            <ProductTableElement  
                                key={i}
                                id={product?.id ? product.id : ''}
                                name={product?.product_name ? product.product_name : ''}
                                images={product?.image ? product.image : ''}
                                brand={product?.brand ? product.brand : ''}
                                createdDate={product?.time_create ? product.time_create : ''}
                                modifiedDate={product?.time_modified ? product.time_modified : ''}
                                handleDelete={handleDelete}
                            />
                        ))}
                    </tbody>
                </table>
                {products && products.length === 0 && <p className='text-muted fs-4 pt-2'>No products found</p>}
            </div>
        </>
    )
}

export default ProductTab