import React from "react";
import { API_URL } from "../API";
import { useState,useEffect } from "react";
import { fetchAsync } from "../../redux/features/reviewSlice";
import { useSelector,useDispatch } from "react-redux";
// eslint-disable-next-line react/prop-types
function ReviewComments({id,setreview,setrating}) { 
  // const [ reviews, setReviews ] =useState([]);
  const reviews = useSelector((state)=>state.reducer.reviews.items)
  console.log(reviews)
  const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(fetchAsync({id:"645f230c75a1340fb12e7f8c"}))
    },[dispatch])
  
  return (
    <>
    {reviews?.map((review)=>{
      return(
<div className="commentsByUSer__main" key={review._id}>
        <div className="commentsByUSer">
        <div className="user__and__ratings">
            <img
              src={"https://cdn.dribbble.com/users/1223630/screenshots/8115260/char_still_2x.gif?resize=400x0"}
              width={75}
              alt={'userImage'}
            />
            <p>{review.rating}★</p>
        </div>

        <div className="details">
            <div className="review__details ">
        <div className="date">{new Date(review.createdAt).getFullYear() + "-" + new Date(review.createdAt).getMonth() + "-" + new Date(review.createdAt).getDate() } </div>
      </div>
      <div className="user__details">
        <p>{review.user?.username}</p>
      </div>
    </div>
  </div>
  <p>
   {review.review}
  </p>
</div>
      )
    })}
    </>
)

} 

export default ReviewComments;
