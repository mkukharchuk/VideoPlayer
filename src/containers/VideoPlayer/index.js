import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { getVideoData } from "./store/actions";
import { VideoPlayer, VideoPlayerContainer } from "./styles";
import PlayerControls from "./PlayerControls";
import Spinner from "../../components/Spinner";

function VideoPLayer({ getVideoData, data }) {
  const videoPl = useRef(null);
  const videoPlCon = useRef(null);
  const [play, togglePlay] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [fullscreen, setFullscreen] = useState(false);
  const [currentTime, updateCurrentTime] = useState(0);

  const duration = videoPl.current ? videoPl.current.duration : 0;

  const handleOnClick = () => {
    play ? videoPl.current.pause() : videoPl.current.play();
    togglePlay(!play);
  };

  const handleOnStop = () => {
    videoPl.current.pause();
    togglePlay(false);
    videoPl.current.currentTime = 0;
  };

  const handleVolumeChange = (e) => {
    let currVolume;
    if (e.type === "click") {
      currVolume = volume ? 0 : 0.5;
      videoPl.current.volume = currVolume;
    } else if (e.type === "change") {
      currVolume = e.target.value / 10;
      videoPl.current.volume = currVolume;
    }

    setVolume(currVolume);
  };

  const toggleFullScreen = () => {
    if (!fullscreen && videoPlCon.current.mozRequestFullScreen) {
      videoPlCon.current.mozRequestFullScreen();
    } else if (!fullscreen && videoPlCon.current.webkitRequestFullScreen) {
      videoPlCon.current.webkitRequestFullScreen();
    }

    fullscreen && document.exitFullscreen();

    setFullscreen(!fullscreen); //refactor
  };

  const handleCurrentTimeChange = (updatedTime) => {
    videoPl.current.currentTime = updatedTime;
  };

  useEffect(() => {
    !data && getVideoData();

    videoPl.current &&
      videoPl.current.addEventListener("loadedmetadata", () => {
        videoPl.current.volume = volume;
        setInterval(() => {
          videoPl.current && updateCurrentTime(videoPl.current.currentTime);
        }, 10);
      });
  });

  return data ? (
    <VideoPlayerContainer ref={videoPlCon}>
      <VideoPlayer ref={videoPl} controls={false} onClick={handleOnClick}>
        <source src={data.videoURL} type={data.videoFormat} />
      </VideoPlayer>
      <PlayerControls
        play={play}
        togglePlay={handleOnClick}
        handleOnStop={handleOnStop}
        currentTime={currentTime}
        duration={duration}
        volume={volume}
        handleVolumeChange={handleVolumeChange}
        handleCurrentTimeChange={handleCurrentTimeChange}
        toggleFullScreen={toggleFullScreen}
      />
    </VideoPlayerContainer>
  ) : (
    <Spinner />
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
