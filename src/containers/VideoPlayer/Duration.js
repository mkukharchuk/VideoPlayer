import React from "react";

import {
  VideoPlayerDurationComponent,
  TrackComponent,
  TrackTime,
} from "./styles";

function VideoPlayerDuration({ duration, currentTime }) {
  const width = (currentTime * 100) / duration;

  return (
    <VideoPlayerDurationComponent>
      <TrackComponent>
        <TrackTime width={`${width}%`} />
      </TrackComponent>
    </VideoPlayerDurationComponent>
  );
}

export default VideoPlayerDuration;
