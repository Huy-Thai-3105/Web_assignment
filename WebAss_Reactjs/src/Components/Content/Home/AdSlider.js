import React from 'react'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const banners = [
    {
        id: 0,
        url: "/imgs/banner/banner2.png"
    },
    {
        id: 1,
        url: "/imgs/banner/banner3.webp"
    },
    {
        id: 2,
        url: "/imgs/banner/g112.png"
    }
]

const AdSlider = () => {
    const [bannerId, setBannerId] = React.useState(0)
    const timeOutRef = React.useRef(null)

    const resetTimeOut = () => {
        if (timeOutRef.current)
            clearTimeout(timeOutRef.current)
    }

    React.useEffect(() => {
        resetTimeOut()
        timeOutRef.current = setTimeout(() => {
            setBannerId((bannerId + 1) % banners.length)
        }, 2000)

        return () => {
            resetTimeOut()
        }
    }, [bannerId])

    return (
        <div 
            className="slider grid mb-4"
            style={{
                backgroundImage: `url(${banners[bannerId].url})`
            }}
        >
            <div className="slider__dots">
                {banners.map((banner, index) => (
                    <FontAwesomeIcon
                        key={banner.id}
                        icon={faCircle} 
                        className={clsx('me-3', {
                            'dot--select': bannerId === index
                        })}
                    ></FontAwesomeIcon>
                ))}
            </div>
        </div>
    )
}

export default AdSlider