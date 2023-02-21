import { GET_INFO_SUCCES } from "../actions";

const initialState = {
  info: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INFO_SUCCES:
      return {
        ...state,
        info: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
