import React from 'react';

const ReviewDetails = ({review}) => {
  return (
    <div>
      <p>{review.name}</p>
      <p>{review.comment}</p>
      <p>{review.rating}</p>
    </div>
  );
}

export default ReviewDetails;
