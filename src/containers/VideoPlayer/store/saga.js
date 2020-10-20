import { put, takeLatest, call } from "redux-saga/effects";
import { getVideoData } from "../../../services/apiRoutes";
import { normalizeVideoData } from "./normalize";
import {
  VIDEO_DATA_REQUESTED,
  VIDEO_DATA_SUCCESS,
  VIDEO_DATA_ERROR,
} from "./actions";
import { isVideoFormat } from "../../../utils/isVideoFormat";

export function* apiSideEffect(action) {
  try {
    const {
      data: { data },
    } = yield call(getVideoData);
    const [video] = data;
    const normalizedData = normalizeVideoData(video);

    if (
      normalizedData &&
      normalizedData.videoURL &&
      isVideoFormat(normalizedData.videoFormat)
    ) {
      // Note: Some kind of check that we really got the video from BE
      yield put({
        type: VIDEO_DATA_SUCCESS,
        payload: normalizedData,
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
