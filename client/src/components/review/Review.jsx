import React from 'react'
import "./Review.scss"
import { useQuery } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'

const Review = ({review}) => {

  const { isLoading, error, data } = useQuery(
    {
      queryKey: [review.userId],
      queryFn: () =>
        newRequest
        .get(
          `/users/${review.userId}`
        )
        .then((res)=>{
          return res.data
        })
    }
  )

  console.log(review)

  return (
    <div className="review">  
        {isLoading ? (
          "loading"
        ) : error ? (
          "error"
        ) : (
          <div className="user">
            <img className="pp" src={data.img || "/img/noavatar.jpg"} alt="" />
            <div className="info">
              <span>{data.username}</span>
              <div className="country">
                <span>{data.country}</span>
              </div>
            </div>
          </div>
        )}
          <div className="stars">
          {Array(review.star)
            .fill()
            .map((item, i) => (
              <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg?w=2000" alt="" key={i} />
            ))}
          <span>{review.star}</span>
        </div>
          <p>
            {review.desc}
          </p>
          <div className="helpful">
            <span>Helpful?</span>
            <img className='like' src="https://logowik.com/content/uploads/images/940_like_icon.jpg" alt="" />
            <span>Yes</span>
            <img className='dislike' src="https://cdn-icons-png.flaticon.com/512/126/126504.png" alt="" />
            <span>No</span>
          </div>
    </div>
  )
}

export default Review