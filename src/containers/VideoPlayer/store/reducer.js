import {
  VIDEO_DATA_REQUESTED,
  VIDEO_DATA_SUCCESS,
  VIDEO_DATA_ERROR,
} from "./actions";

const initialState = {
  data: null,
  isLoading: false,
};

export default function videoPlayerReducer(state = initialState, action) {
  switch (action.type) {
    case VIDEO_DATA_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case VIDEO_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case VIDEO_DATA_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
