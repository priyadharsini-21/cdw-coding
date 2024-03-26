export const SET_SEARCHED_WORD = "SET_SEARCHED_WORD";

export const setSearchedWord = (searchInput) => ({
  type: SET_SEARCHED_WORD,
  payload: searchInput,
});
