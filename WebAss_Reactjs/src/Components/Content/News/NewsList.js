import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'
import useFetchData from '../../../Hooks/useFetchData'

const NewElement = ({item}) => {
    const [content, setContent] = React.useState(null)
    const [postTitle, setPostTitle] = React.useState('')
    const [createTime, setCreateTime] = React.useState('')

    React.useEffect(() => {
        if (item && item?.blocks)
            setContent(item.blocks)
        if (item && item?.time)
            setCreateTime(item.time)
    }, [item])

    React.useEffect(() => {
        if (content && content.length !== 0) {
            if (content[0]?.data?.text)
                setPostTitle(content[0].data.text)
        }
    }, [content])

    return (
        <div className="news-element">
            <img src="./imgs/news.jpg" alt="new img"/>
            <div className="news-element__info">
                <h4 className="mb-2">
                    <Link to={`/news/${item.id}`}>
                        {postTitle}
                    </Link>
                </h4>
                <p className="text-muted fs-5">Ngày đăng: {createTime}</p>
            </div>
        </div>
    )
}

const NewsList = () => {
    const [news, setNews] = React.useState([])
    const [showedNews, setShowedNews] = React.useState([])
    const { data } = useFetchData('http://localhost/php/ass_backend/Post/read')

    React.useEffect(() => {
        if (data && data.length !== 0)
            setNews(data)
    }, [data])

    React.useEffect(() => {
        setShowedNews(news.slice(0, Math.min(5, news.length)))
    }, [news])

    const handleLoadMore = () => {
        let arr = [...showedNews]
        for (let i=showedNews.length; i < Math.min(showedNews.length + 5, news.length); i++)
            arr.push(news[i])
        setShowedNews(arr)
    }

    return (  
        <div className="news-hot grid my-5">
            <div className="news-hot__title new-title">
                <h2>All news</h2>
                <hr/>
            </div>
            <div className="news-hot__list newlist">
                {showedNews && showedNews.length !== 0 && showedNews.map((item, i) => (
                    <NewElement
                        key={i}
                        item={item}
                    />
                ))}
                {showedNews && showedNews.length !== 0 ?
                     <div
                        className={clsx('btn button__submit', {
                            'disabled': showedNews.length === news.length
                        })}
                        onClick={handleLoadMore}
                    >
                        Show more
                    </div>
                        :
                    <p className='text-muted fs-4 pt-2'>No news found</p>
                }
            </div>
        </div>
    )
}

export default NewsList