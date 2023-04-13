import React from 'react'
import { Link } from 'react-router-dom'

const SubNavElement = ({name}) => {
    return (
        <div className="category-bar__element">
            <div className="category-bar__line"></div>
            <Link to={`/products/${name}`} className="text-muted">{name}</Link>
        </div>
    )
}

const SubNav = () => {
    const categories = ['Samsung', 'Apple', 'Oppo', 'Sony', 'Xiaomi', 'Vivo', 'Realmi']

    return (
        <div className='bg-white'>
            <div className="category-bar grid">
                {categories &&  categories.map((category, i) => (
                    <SubNavElement 
                        key={i}
                        name={category}
                    />
                ))}
            </div>
        </div>

    )
}

export default SubNav