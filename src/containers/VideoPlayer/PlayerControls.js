import React from "react";
import VideoPlayerDuration from "./Duration";
import VideoPlayerVolume from "./Volume";
import transformTime from "../../utils/transformTime";
import {
  VideoPlayerControlsContainer,
  LeftPanelControls,
  RightPanelControls,
  VideoPlayerPanel,
} from "./styles";
import { ReactComponent as PlayIcon } from "../../assets/playIcon.svg";
import { ReactComponent as PauseIcon } from "../../assets/pauseIcon.svg";
import { ReactComponent as StopIcon } from "../../assets/stopIcon.svg";
import { ReactComponent as FullScreenIcon } from "../../assets/fullscreenIcon.svg";

function PlayerControls({
  play,
  togglePlay,
  handleOnStop,
  currentTime,
  duration,
  volume,
  handleVolumeChange,
  toggleFullScreen,
  handleCurrentTimeChange,
}) {
  const transformedCurrentTIme = transformTime(currentTime);
  const transformedDuration = transformTime(duration);
  const time = `${transformedCurrentTIme} / ${transformedDuration}`;

  return (
    <VideoPlayerPanel>
      <VideoPlayerDuration
        currentTime={currentTime}
        duration={duration}
        handleCurrentTimeChange={handleCurrentTimeChange}
      />
      <VideoPlayerControlsContainer>
        <LeftPanelControls>
          {play ? (
            <PauseIcon onClick={togglePlay} />
          ) : (
            <PlayIcon onClick={togglePlay} />
          )}
          <StopIcon onClick={handleOnStop} />
          <div>{time}</div>
        </LeftPanelControls>
        <RightPanelControls>
          <VideoPlayerVolume
            volume={volume}
            handleVolumeChange={handleVolumeChange}
          />
          <FullScreenIcon onClick={toggleFullScreen} />
        </RightPanelControls>
      </VideoPlayerControlsContainer>
    </VideoPlayerPanel>
  );
}

export default PlayerControls;
