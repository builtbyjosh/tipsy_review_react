export const getOpenBreweries = (query = "dog") => {
  return (dispatch) => {
    fetch(`https://api.openbrewerydb.org/breweries/search?query=${query}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
};
