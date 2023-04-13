import React from 'react'
import './News.css'
import NewsList from './NewsList'

const News = () => {
    React.useEffect(() => {
        document.title = 'News'
        window.scrollTo(0,0)
    }, [])

    return (
        <div className='content'>
            <NewsList/>
        </div>
    )
}

export default News