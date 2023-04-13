import React from 'react'
import clsx from 'clsx'
import useFetchData from '../../Hooks/useFetchData'
import { Link } from 'react-router-dom'

const SearchElement = ({id, name, brand, images, setDisappear}) => {
    const [trimName, setTrimName] = React.useState('')
    const [imgs, setImgs] = React.useState([])

    React.useEffect(() => {
        if (images && typeof images === 'string')
            setImgs(images.split(','))
        if (name)
            setTrimName(name.replaceAll(' ', ''))
    }, [images, name])


    return (
        <div className="search-card my-2">
            <img src={`http://localhost/php/ass_backend/imgs/products/${brand}/${trimName}/${imgs[0]}`} alt=""/>
            <Link 
                to={`/products/Smartphone/${id}`}
            >
                {name}
            </Link>
        </div>
    )
}

const SeachList = ({ name, setDisappear }) => {
    const [searchedList, setSearchedList] = React.useState([])
    const { data } = useFetchData(`http://localhost/php/ass_backend/Product/searchProduct/${name}`)

    React.useEffect(() => {
        setSearchedList(data)
    }, [data])

    return (
        <div className="search-bar__result">
            {searchedList.length !== 0 && searchedList.map((item, i) =>(
                <SearchElement
                    key={i}
                    id = {item.id}
                    name={item.product_name}
                    brand={item.brand}
                    images={item.image}
                />
            ))
            }
            {searchedList.length === 0 && name && <p>No product found</p>}
        </div>
    )
}

const Search = ({disappear, setDisappear}) => {
    const [name, setName] = React.useState('')

    React.useEffect(() => {
        setName('')
    }, [disappear])

    return (
        <div 
            className={clsx("search-bar", {
                'disappear': disappear
            })}
            onClick={(e) => e.stopPropagation()}
        >
            <input 
                type="text" 
                className="form-control my-2" 
                placeholder="type to search" 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <SeachList 
                name={name}
                setDisappear={setDisappear}
            />
        </div>
    )
}

export default Search