export const getReviews = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/reviews")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "FETCH_REVIEWS", payload: data }));
  };
};

export const createOpenBrewery = (newReviewData) => {
  return (dispatch) => {
    fetch("http://localhost:3001/breweries/:id/reviews", {
      method: 'POST',
      body: JSON.stringify({brewery: newReviewData})
    })
  }
}