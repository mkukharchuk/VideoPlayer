import { fork } from "redux-saga/effects";
import videoPlayerSaga from "../containers/VideoPlayer/saga";

export default function* rootSaga() {
  yield fork(videoPlayerSaga);
}
