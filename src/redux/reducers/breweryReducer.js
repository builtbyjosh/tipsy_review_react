export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_API_BREWERIES":
      return action.payload;
    default:
      return state;
  }
};
