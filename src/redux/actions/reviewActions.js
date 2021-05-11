export const createOpenBrewery = (newReviewData) => {
  return (dispatch) => {
    fetch("http://localhost:3001/breweries/:id/reviews", {
      method: 'POST',
      body: JSON.stringify({brewery: newReviewData})
    })
  }
}