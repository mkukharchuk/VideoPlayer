/*
 * action types
 */

export const VIDEO_DATA_REQUESTED = "VIDEO_DATA_REQUESTED";
export const VIDEO_DATA_SUCCESS = "VIDEO_DATA_SUCCESS";
export const VIDEO_DATA_ERROR = "VIDEO_DATA_ERROR";

/*
 * action creators
 */

export function getVideoData() {
  return { type: VIDEO_DATA_REQUESTED };
}

export function getVideoDataSuccess(data) {
  return { type: VIDEO_DATA_SUCCESS, data };
}

export function getVideoDataError(error) {
  return { type: VIDEO_DATA_ERROR, error };
}
