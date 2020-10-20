import React, { useRef } from "react";

import {
  VideoPlayerDurationComponent,
  TrackComponent,
  TrackTime,
} from "./styles";

function VideoPlayerDuration({
  duration,
  currentTime,
  handleCurrentTimeChange,
}) {
  const timeTrackRef = useRef(null);
  const width = (currentTime * 100) / duration;

  const handleOnClick = ({ clientX }) => {
    const trackFirstPoint = timeTrackRef.current.getBoundingClientRect().left;
    const trackLength = timeTrackRef.current.getBoundingClientRect().width;
    const mousePosition = clientX - trackFirstPoint;
    const newCurrentTime = (duration * mousePosition) / trackLength;
    handleCurrentTimeChange(newCurrentTime);
  };

  return (
    <VideoPlayerDurationComponent>
      <TrackComponent ref={timeTrackRef} onClick={handleOnClick}>
        <TrackTime width={`${width}%`} />
      </TrackComponent>
    </VideoPlayerDurationComponent>
  );
}

export default VideoPlayerDuration;
