import React from 'react'
import clsx from 'clsx'
import axios from 'axios'
import ToastMessage from '../../ToastMessage/ToastMessage'
import useFetchData from '../../../Hooks/useFetchData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const NewsTableElement = ({item, handleDeletePost}) => {
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
        <tr>
            <td>{item.id}</td>
            <td>{postTitle ? postTitle : ''}</td>
            <td>{createTime}</td>
            <td>
                <form 
                    style={{marginBottom: '1rem'}}
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div 
                        className="btn btn-danger"
                        onClick={() => handleDeletePost(item.id)}
                    >
                        <FontAwesomeIcon icon={faTrash}/>
                    </div>
                </form>
                <Link 
                    to={`/news/edit/${item.id}`}
                    className="btn btn-primary"
                >
                    <FontAwesomeIcon icon={faPen}/>
                </Link>
            </td>
        </tr>
    )
}

const NewsTab = ({selectedTab, user}) => {
    const { data } = useFetchData('http://localhost/php/ass_backend/Post/read')
    const [news, setNews] = React.useState([])
    const [deleteMessage, setDeleteMessage] = React.useState('')
    const [userId, setUserId] = React.useState(1)

    React.useEffect(() => {
        if (data && data.length !== 0)
            setNews(data)
    }, [data])

    React.useEffect(() => {
        if (user && user?.id)
            setUserId(user.id)
    }, [user])

    const handleDeletePost = async (id) => {
        if (id !== undefined) {
            const res = await axios.get(`http://localhost/php/ass_backend/Post/delete/${id}`)
            if (res.data.message === 'success') {
                let newList = news.filter((item) => item.id !== id)
                setNews(newList)
            }
            setDeleteMessage(res.data.message)
        }
    }

    return (
        <>
            {deleteMessage && deleteMessage !== '' && 
                <ToastMessage 
                    header={deleteMessage === 'success' ? "Success" : "Fail"}
                    body={`Delete new ${deleteMessage}`}
                />
            }
            <div 
                className={clsx("posts p-2", {
                    'disappear': selectedTab !== "Post"
                })}
            >
                <div className="add-btn">
                    <Link to={`/news/add/${userId}`}>Add news</Link>
                </div>

                <table className="item-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Post title</th>
                            <th>Created</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {news && news.length !== 0 && news.map((item, i) => (
                            <NewsTableElement
                                key={i}
                                item={item}
                                handleDeletePost={handleDeletePost}
                            />
                        ))}
                    </tbody>
                </table>
                {news && news.length === 0 && <p className='text-muted fs-4 pt-2'>No news found</p>}
            </div>
        </>
    )
}

export default NewsTab