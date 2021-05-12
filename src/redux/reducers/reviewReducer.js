export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_REVIEWS":
      return action.payload
    case "CREATE_REVIEWS":
      return [...state, action.payload]
    default:
      return state;
  }
};
