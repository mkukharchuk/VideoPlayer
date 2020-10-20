import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const VideoPlayer = styled.video`
  width: 100%;
  height: auto;
  margin-bottom: -2px;
`;

export const VideoPlayerPanel = styled.div`
  position: relative;
  width: 100%;
`;

export const VideoPlayerControlsContainer = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #262626;
  color: white;

  & svg {
    cursor: pointer;
  }
`;

export const VideoPlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  height: auto;
  min-width: 300px;

  box-shadow: 0 0 15px black;

  &:fullscreen {
    ${VideoPlayerPanel} {
      position: absolute;
      bottom: 0;
    }
  }
`;

export const RightPanelControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-right: 10px;

  & svg {
    margin-left: 10px;
  }
`;

export const LeftPanelControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-left: 10px;

  & svg {
    margin-right: 10px;
  }
`;

export const VideoPlayerDurationComponent = styled.div`
  height: 6px;
`;

export const TrackComponent = styled.div`
  width: 100%;
  background-color: grey;
  height: 100%;
`;

export const TrackTime = styled.div.attrs((props) => ({
  style: { width: props.width },
}))`
  height: 100%;
  background-color: red;
`;

export const VolumeRange = styled.input`
  display: none;
  -webkit-appearance: none;
  vertical-align:middle;
  outline: none;
  border: none;
  padding: 0;
  background: none;
  width: 85px;
  margin-left: 5px;
  cursor: pointer;
  animation: 1s ${fadeIn} ease-out;

  &::-webkit-slider-runnable-track {
    background-color: #d7dbdd;
    height: 6px;
    border-radius: 3px;
    border: 1px solid transparent;
  }

  &::-moz-range-track {
    background-color: #d7dbdd;
    height: 6px;
    border-radius: 3px;
    border: none;
  }
  &::-ms-track {
    background-color: #d7dbdd;
    color: transparent;
    border: none;
    background: none;
    height: 6px;
  }
  &::-ms-fill-lower {
    background-color: #d7dbdd;
    border-radius: 3px;
  }

  &::-ms-fill-upper {
    background-color: #d7dbdd;
    border-radius: 3px;
  }

  &::-ms-tooltip { display: none; /* display and visibility only */ }

  &::-moz-range-thumb {
    border-radius: 20px;
    height: 18px;
    width: 18px;
    border: none;
    background: none;
    background-color: #606670;
  }

  &:active::-moz-range-thumb {
    outline: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    border-radius: 100%;
    background-color: #606670;
    height: 18px;
    width: 18px;
    margin-top: -7px;
  }
  &:active::-webkit-slider-thumb {
    outline: none;
  }

  &::-ms-thumb {
    border-radius: 100%;
    background-color: #606670;
    height: 18px;
    width: 18px;
    border: none;
  }

  &:active::-ms-thumb {
    border: none;
  }
}
`;

export const VolumeControlsContainer = styled.div`
  display: flex;
  flex-direction: row;

  &:hover {
    ${VolumeRange} {
      display: inline-block;
    }
  }
`;
