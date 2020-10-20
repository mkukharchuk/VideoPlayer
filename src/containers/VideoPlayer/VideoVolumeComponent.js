import React from "react";
import { VolumeControlsContainer, VolumeRange } from "./styles";
import { ReactComponent as VolumeIcon } from "../../assets/volumeIcon.svg";
import { ReactComponent as VolumeOffIcon } from "../../assets/volumeOffIcon.svg";

function PlayerControls({ volume, handleVolumeChange }) {
  return (
    <>
      <VolumeControlsContainer>
        {volume !== 0 ? (
          <VolumeIcon onClick={handleVolumeChange} />
        ) : (
          <VolumeOffIcon onClick={handleVolumeChange} />
        )}
        <VolumeRange
          type="range"
          orient="vertical"
          onChange={handleVolumeChange}
          value={volume * 10}
          min="0"
          max="10"
        />
      </VolumeControlsContainer>
    </>
  );
}

export default PlayerControls;
