import { put, takeLatest, call } from "redux-saga/effects";
import { getVideoData } from "../../../services/apiRoutes";

import {
  VIDEO_DATA_REQUESTED,
  VIDEO_DATA_SUCCESS,
  VIDEO_DATA_ERROR,
} from "./actions";
import { normilizedVideoData } from "./normalize";

export function* apiSideEffect(action) {
  try {
    const {
      data: { data },
    } = yield call(getVideoData);
    yield put({
      type: VIDEO_DATA_SUCCESS,
      payload: normilizedVideoData(data[0]),
    });
  } catch (e) {
    yield put({ type: VIDEO_DATA_ERROR, payload: e.message });
  }
}

// the 'watcher' - on every 'API_BUTTON_CLICK' action, run our side effect
export function* videoPlayerSaga() {
  yield takeLatest(VIDEO_DATA_REQUESTED, apiSideEffect);
}

export default videoPlayerSaga;
