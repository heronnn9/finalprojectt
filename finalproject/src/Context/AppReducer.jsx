export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_FAVORITELIST":
      return {
        ...state,
        favoritelist: [action.payload, ...state.favoritelist],
      };
    case "REMOVE_MOVIE_FROM_FAVORITELIST":
      return {
        ...state,
        favoritelist: state.favoritelist.filter(
          (movie) => movie.Id !== action.payload
        ),
      };
    default:
      return state;
  }
};
