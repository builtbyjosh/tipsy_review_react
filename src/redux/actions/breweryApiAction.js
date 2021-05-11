export const getOpenBreweries = (query = "dog") => {
  return (dispatch) => {
    fetch(`https://api.openbrewerydb.org/breweries/search?query=${query}`)
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: "FETCH_API_BREWERIES", payload: data })
      );
  };
};

export const createOpenBrewery = (newBreweryData) => {
  return (dispatch) => {
    fetch("http://localhost:3001/breweries", {
      method: 'POST',
      body: JSON.stringify({brewery: newBreweryData})
    })
  }
}