import React, { useState ,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import ReviewComments from './ReviewComments'
import { API_URL } from '../API'
import { addAsync ,updateAsync } from '../../redux/features/reviewSlice';

export default function Review({id}) {
const dispatch = useDispatch();
const [comment , setComments] = useState("");
const [rating , setRatings] = useState(0);
const [noOfReviews , setNoOfReviews] = useState();
const [RatingsAverage , setRatingsAverage] = useState();
const [newReview , setNewReview] = useState(true)
function setreview(no){
  setNoOfReviews(no)
}
function setrating(no){
  setRatingsAverage(no)
}

function newReviewTogler(){
  setNewReview((prev)=>!prev)
}

const commentBody = JSON.stringify({
  review : comment,
  rating : rating
})
const token = localStorage.getItem('token')
function submitReview(e){
    e.preventDefault()
    dispatch(addAsync({id,commentBody}))
    setNewReview((prev)=>!prev)
}

  return (
   <div className="review">
    <h2>What boatheads are saying:</h2>
    <div className="review__main">
    <div className="totalavegragestar">
        <p>{RatingsAverage}☆</p>
        <p>Based on {noOfReviews} reviews</p>
    </div>

    <div className="ratingsbystar">
        <div>
        </div>

    </div>
      {/* <form  > */}
        <input type="text"  placeholder='Enter Your Review ' onChange={(e)=>setComments(e.target.value)} />
        <input type="Number" placeholder='Give Rating 0 to 5 ' onChange={(e)=>setRatings(e.target.value)} />
        <button className='writearevuew' onClick={submitReview} >Write a Review</button>
      {/* </form> */}
    </div>
    
    {/* {
      
    //  reviews.length > 0 && reviews?.map((review)=>{
    //   return(
    //     <ReviewComments 
    //     key={review._id}
    //     createdAt={10/11/2022} 
    //     rating = {review?.rating} 
    //     username={review?.user?.username}
    //     review={review?.review}
    //     image ={"https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295431_640.png"}  
    //      />
    //   )
    // })
   
  // } */}
  <ReviewComments id={id} setreview={setreview} setrating={setrating}   />
   
   </div>
  )
}




