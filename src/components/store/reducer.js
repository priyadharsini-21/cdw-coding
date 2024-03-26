import { SET_SEARCHED_WORD } from "./action";

const initialState = {
  searchedWord: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCHED_WORD:
      return {
        ...state,
        searchedWord: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
