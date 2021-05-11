export const getBreweries = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/breweries")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "FETCH_API_BREWERIES", payload: data }));
  };
};
