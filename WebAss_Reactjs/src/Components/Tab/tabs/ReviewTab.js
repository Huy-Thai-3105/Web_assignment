import React from 'react'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import useFetchData from '../../../Hooks/useFetchData'
import UserContext from '../../../Contexts/UserContext'
import ToastMessage from '../../ToastMessage/ToastMessage'

const Comment = ({ review }) => {
    const { data } = useFetchData(`http://localhost/php/ass_backend/User/read/${review.user_id}`)
    const [username, setUsername] = React.useState('unknown')

    React.useEffect(() => {
        if (data && data?.username)
            setUsername(data.username)
    }, [data])

    const handleStarPoint = (point) => {
        let pointStar = []
        for (let i=0; i < 5; i++) {
            if (i < point) {
                pointStar.push(true)
            }
            else {
                pointStar.push(false)
            }
        }

        return pointStar.map((item, i) => (
            <span key={i}>
                <FontAwesomeIcon 
                    icon={faStar}
                    className={clsx("text-muted", {
                        'review--select': item
                    })}
                ></FontAwesomeIcon>
            </span>
        ))
    }

    return (
        <div className="review__element">
            <h5 className="mb-2">{username}</h5>
            <div className="mb-2">
                <div>
                    {handleStarPoint(review.star_rating)}
                </div>
            </div>
            <p>{review?.data || review?.content}</p>
            <hr/>
        </div>
    )
}


const ReviewTab = ({ id,selectedTab }) => {
    const {login, token, handleAddComment} = React.useContext(UserContext)
    const { data:userData } = useFetchData(`http://localhost/php/ass_backend/User/getUser`, token)
    const { data:productData } = useFetchData(`http://localhost/php/ass_backend/Review/read/${id}`)
    const [reviews, setReviews] = React.useState([])
    const [user, setUser] = React.useState()
    const [showedReviews, setShowedReviews] = React.useState([])
    const [commentInput, setCommentInput] = React.useState('')
    const [rateInput, setRateInput] = React.useState(0)
    const [addCommentErr, setAddCommentErr] = React.useState('')

    React.useEffect(() => {
        setReviews(productData)
        setShowedReviews([])
    }, [productData])

    React.useEffect(() => {
        if (userData && userData?.success && userData.success === 1)
            setUser(userData.user)
    }, [userData])

    React.useEffect(() => {
        let temp = [...showedReviews]
        for (let i=0; i < Math.min(5, reviews.length); i++) {
            temp.push(reviews[i])
        }
        setShowedReviews(temp)
    }, [reviews])


    const handleLoadMore = () => {
        let temp = [...showedReviews]
        for (let i=showedReviews.length; i < Math.min(showedReviews.length+5, reviews.length); i++) {
            temp.push(reviews[i])
        }
        setShowedReviews(temp)
    }

    const handleLoadNewComment = (comment) => {
        let temp = [comment,...showedReviews]
        setShowedReviews(temp)
    }

    return (
        <>
            {addCommentErr && addCommentErr !== '' && 
                <ToastMessage 
                    header={addCommentErr === "success" ? "Success" : "Fail"}
                    body={`You have already commented`}
                />
            }
            <div
                className={clsx("review", {
                    'disappear': selectedTab !== 'Reviews'
                })}
            >
                {showedReviews.length !== 0 &&  showedReviews.map((review, i) => (
                    <Comment 
                        key={i}
                        review={review}
                    />
                ))}
                {showedReviews.length === 0 && <p className='fs-5 px-2 mb-3'>No reviews found</p>}

                <div className='review__add mb-3'>
                    <label>Rate</label>
                    <input
                        type='number'
                        max={5}
                        min={0}
                        className = 'form-control'
                        value={rateInput}
                        onChange={(e) => setRateInput(e.target.value)}
                    />
                    <input 
                        type='text'
                        placeholder={login ? 'Leave a comment' : 'Please login to leave a comment'}
                        className='form-control'
                        disabled={login ? false : true}
                        value={commentInput}
                        onChange={(e) => setCommentInput(e.target.value)}
                    />
                    <div 
                        className={clsx('btn button__submit', {
                            'disabled': !login
                        })}
                        onClick={() => {
                            const newComment = {
                                product_id: id,
                                user_id: user.id,
                                star_rating: rateInput,
                                content: commentInput
                            }
                            handleAddComment(id, user.id, commentInput, rateInput)
                                .then(res => {
                                    if (res)
                                        handleLoadNewComment(newComment)
                                    else
                                        setAddCommentErr('error')
                                })
                        }}
                    >
                        <FontAwesomeIcon 
                            icon={faPaperPlane}
                        />
                    </div>
                </div>

                {showedReviews.length !== reviews.length &&
                    <div 
                        className="load-more"
                        onClick={handleLoadMore}
                    ></div>
                }
            </div> 
        </>
    )
}

export default ReviewTab