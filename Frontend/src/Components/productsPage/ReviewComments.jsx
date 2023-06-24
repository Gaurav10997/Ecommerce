function ReviewComments({createdAt , username , image ,review ,rating}) { return (
<div className="commentsByUSer__main">
  <div className="commentsByUSer">
    <div className="user__and__ratings">
      <img
        src={image}
        width={29}
        alt=""
      />
      <p>{rating}★</p>
    </div>

    <div className="details">
      <div className="review__details ">
        <div className="date">{createdAt}</div>
      </div>
      <div className="user__details">
        <p>{username}</p>
      </div>
    </div>
  </div>
  <p>
   {review}
  </p>
</div>
); } export default ReviewComments
