import React from 'react'
import clsx from 'clsx'

const BriefTab = ({ product, selectedTab }) => {
    const [briefInfo, setBriefInfo] = React.useState('')
    const [isShort, setIsShort] = React.useState(true)

    React.useEffect(() => {
        setBriefInfo('')
        if (product && product?.description)
            setBriefInfo(product.description.slice(0,300) + '...')
    }, [product])

    React.useEffect(() => {
        if (product && product?.description) {
            if (isShort === true)
                setBriefInfo(product.description.slice(0,300) + '...')
            else 
                setBriefInfo(product.description)
        }
    }, [isShort])

    return (
        <div 
            className={clsx("description", {
                'disappear': selectedTab !== 'Description'
            })}
        >
            <div className="description__show mb-3">
                <p className='text-justify'>
                    {briefInfo}
                </p>
            </div>

            <div 
                className={clsx('show-more', {
                    'show-more--toggle': !isShort
                })}
                onClick={() => setIsShort(!isShort)}    
            ></div>
        </div>
    )
}

export default BriefTab