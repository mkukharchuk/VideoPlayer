import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { getVideoData } from "./store/actions";
import { VideoPlayer, VideoPlayerWrapper } from "./styles";
import VideoControlsComponent from "./VideoControlsComponent";
import Spinner from "../../components/Spinner";

function VideoPlayerContainer({ getVideoData, data }) {
  const videoEl = useRef(null);
  const videoContainerEl = useRef(null);
  const [play, togglePlay] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [fullscreen, setFullscreen] = useState(false);
  const [currentTime, updateCurrentTime] = useState(0);

  const duration = videoEl.current ? videoEl.current.duration : 0;

  const handleOnClick = () => {
    play ? videoEl.current.pause() : videoEl.current.play();
    togglePlay(!play);
  };

  const handleStop = () => {
    videoEl.current.pause();
    togglePlay(false);
    videoEl.current.currentTime = 0;
  };

  const handleVolumeChange = (e) => {
    let currVolume;
    if (e.type === "click") {
      currVolume = volume ? 0 : 0.5;
      videoEl.current.volume = currVolume;
    } else if (e.type === "change") {
      currVolume = e.target.value / 10;
      videoEl.current.volume = currVolume;
    }

    setVolume(currVolume);
  };

  const toggleFullScreen = () => {
    if (!fullscreen) {
      if (videoContainerEl.current.requestFullscreen) {
        videoContainerEl.current.requestFullscreen();
      } else if (videoContainerEl.current.mozRequestFullScreen) {
        videoContainerEl.current.mozRequestFullScreen();
      } else if (videoContainerEl.current.webkitRequestFullscreen) {
        videoContainerEl.current.webkitRequestFullscreen();
      } else if (videoContainerEl.current.msRequestFullscreen) {
        videoContainerEl.current.msRequestFullscreen();
      }
    }
    if (document.fullscreenElement !== null) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  const handleCurrentTimeChange = (updatedTime) => {
    videoEl.current.currentTime = updatedTime;
  };

  useEffect(() => {
    !data && getVideoData();

    if (videoEl.current) {
      videoEl.current.addEventListener("loadedmetadata", () => {
        videoEl.current.volume = volume;
        setInterval(() => {
          videoEl.current && updateCurrentTime(videoEl.current.currentTime);
        }, 10);
      });
    }

    if (videoContainerEl.current) {
      videoContainerEl.current.addEventListener("fullscreenchange", () => {
        setFullscreen(!fullscreen);
      });
    }
  }, [data, fullscreen, getVideoData, volume]);

  return data ? (
    <VideoPlayerWrapper ref={videoContainerEl}>
      <VideoPlayer ref={videoEl} controls={false} onClick={handleOnClick}>
        <source src={data.videoURL} type={data.videoFormat} />
      </VideoPlayer>
      <VideoControlsComponent
        play={play}
        togglePlay={handleOnClick}
        handleStop={handleStop}
        currentTime={currentTime}
        duration={duration}
        volume={volume}
        handleVolumeChange={handleVolumeChange}
        handleCurrentTimeChange={handleCurrentTimeChange}
        toggleFullScreen={toggleFullScreen}
      />
    </VideoPlayerWrapper>
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

export default connect(mapState, mapDispatch)(VideoPlayerContainer);
