import { combineReducers } from "redux";

import videoPlayerReducer from "../containers/VideoPlayer/reducer";

const rootReducer = combineReducers({
  videoPlayer: videoPlayerReducer,
});

export default rootReducer;
