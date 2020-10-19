import React from "react";
import VideoPlayerDuration from "./Duration";
import { VideoPlayerControlsContainer } from "./styles";
import { ReactComponent as PlayIcon } from "../../assets/playIcon.svg";
import { ReactComponent as PauseIcon } from "../../assets/pauseIcon.svg";
import { ReactComponent as StopIcon } from "../../assets/stopIcon.svg";

function PlayerControls({
  play,
  togglePlay,
  handleOnStop,
  currentTime,
  duration,
}) {
  return (
    <>
      <VideoPlayerDuration currentTime={currentTime} duration={duration} />
      <VideoPlayerControlsContainer>
        {play ? (
          <PauseIcon onClick={togglePlay} />
        ) : (
          <PlayIcon onClick={togglePlay} />
        )}
        <StopIcon onClick={handleOnStop} />
        <div>{currentTime}</div>
      </VideoPlayerControlsContainer>
    </>
  );
}

export default PlayerControls;
