import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { getVideoData } from "./actions";
import { VideoPlayer, VideoPlayerContainer } from "./styles";
import PlayerControls from "./PlayerControls";

function VideoPLayer({ getVideoData, data }) {
  const videoPl = useRef(null);
  const [play, togglePlay] = useState(false);
  const [stop, setStop] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [fullscreen, setFullscreen] = useState(false);
  const [currentTime, updateCurrentTime] = useState(0);

  const duration = videoPl.current && videoPl.current.duration;

  const handleOnClick = () => {
    play ? videoPl.current.pause() : videoPl.current.play();
    togglePlay(!play);
  };

  const handleOnStop = () => {
    videoPl.current.pause();
    togglePlay(false);
    videoPl.current.currentTime = 0;
  };

  useEffect(() => {
    !data && getVideoData();

    videoPl.current &&
      videoPl.current.addEventListener("loadedmetadata", () => {
        console.log("here");
        setInterval(() => {
          videoPl.current && updateCurrentTime(videoPl.current.currentTime);
        }, 10);
      });
  });

  return data ? (
    <VideoPlayerContainer>
      <VideoPlayer ref={videoPl}>
        <source src={data[0].url} type={`video/${data[0].format}`} />
      </VideoPlayer>
      <PlayerControls
        play={play}
        togglePlay={handleOnClick}
        handleOnStop={handleOnStop}
        currentTime={currentTime}
        duration={duration}
      />
    </VideoPlayerContainer>
  ) : (
    <p>Loading</p>
  );
}

const mapState = (state) => ({
  data: state.videoPlayer.data,
});
const mapDispatch = (dispatch) => {
  return {
    getVideoData: () => dispatch(getVideoData()),
  };
};
export default connect(mapState, mapDispatch)(VideoPLayer);
