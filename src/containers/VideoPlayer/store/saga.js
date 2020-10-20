import { put, takeLatest, call } from "redux-saga/effects";
import { getVideoData } from "../../../services/apiRoutes";
import { normalizedVideoData } from "./normalize";
import {
  VIDEO_DATA_REQUESTED,
  VIDEO_DATA_SUCCESS,
  VIDEO_DATA_ERROR,
} from "./actions";

export function* apiSideEffect(action) {
  try {
    const {
      data: { data },
    } = yield call(getVideoData);

    if (data.length && data[0].url && data[0].format === "mp4") {
      // Note: Some kind of check that we really got the video from BE
      yield put({
        type: VIDEO_DATA_SUCCESS,
        payload: normalizedVideoData(data[0]),
      });
    } else put({ type: VIDEO_DATA_ERROR, payload: "Video was not provided" });
  } catch (e) {
    yield put({ type: VIDEO_DATA_ERROR, payload: e.message });
  }
}

// the 'watcher' - on every 'API_BUTTON_CLICK' action, run our side effect
export function* videoPlayerSaga() {
  yield takeLatest(VIDEO_DATA_REQUESTED, apiSideEffect);
}

export default videoPlayerSaga;
