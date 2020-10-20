import { fork } from "redux-saga/effects";
import videoPlayerSaga from "../containers/VideoPlayer/store/saga";

export default function* rootSaga() {
  yield fork(videoPlayerSaga);
}
