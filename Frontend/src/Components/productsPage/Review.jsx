import React, { useState ,useEffect} from 'react'
import ReviewComments from './ReviewComments'
import { API_URL } from '../API'
export default function Review({id}) {
  const [reviews , setReviews] = useState([])
  useEffect(()=>{
   
    fetch(`${API_URL}/api/v1/products/645f206840d3c69260815742/reviews`)
    
    .then((res)=>res.json())
    .then((data)=>setReviews(data))
  },[])
   
  return (
   <div className="review">
    <h2>What boatheads are saying:</h2>
    <div className="review__main">
    <div className="totalavegragestar">
        <p>4.4☆</p>
        <p>Based on 20 reviews</p>
    </div>

    <div className="ratingsbystar">
        {/* <div className="five__star star">
        <p>★★★★★</p>
        <p>80%</p>
        <p>(16)</p>
        </div> */}
        <div>
        </div>

    </div>
    <div className="btn">
    <button className='writearevuew'>Write a Review</button>
    </div>
   
    </div>
    
    {
     reviews.length > 0 && reviews?.map((review)=>{
      return(
        <ReviewComments 
        key={review._id}
        createdAt={10/11/2022} 
        rating = {review?.rating} 
        username={review?.user?.username}
        review={review?.review}
        image ={"https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295431_640.png"}  
         />
      )
    })
   
  }
  <ReviewComments/>
   
   </div>
  )
}




