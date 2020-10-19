import styled from "styled-components";

export const VideoPlayer = styled.video`
  width: 100%;
  height: auto;
`;

export const VideoPlayerContainer = styled.div`
  width: 60%;
  height: auto;
  min-width: 300px;
`;
export const VideoPlayerControlsContainer = styled.div`
  height: 35px;
  margin-top: -3px;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #262626;
  color: white;
`;

export const VideoPlayerDurationComponent = styled.div`
  height: 10px;
`;

export const TrackComponent = styled.div`
  width: 100%;
  background-color: black;
  height: 100%;
`;
export const TrackTime = styled.div`
  height: 100%;
  background-color: red;
  width: ${(props) => props.width};
`;
