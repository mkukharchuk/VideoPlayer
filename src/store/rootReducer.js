import { combineReducers } from "redux";

import videoPlayerReducer from "../containers/VideoPlayer/store/reducer";

const rootReducer = combineReducers({
  videoPlayer: videoPlayerReducer,
});

export default rootReducer;
