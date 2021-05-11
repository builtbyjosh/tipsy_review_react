export const getOpenBreweries = (query = "dog") => {
  return (dispatch) => {
    fetch(`https://api.openbrewerydb.org/breweries/search?query=${query}`)
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: "FETCH_API_BREWERIES", payload: data })
      );
  };
};