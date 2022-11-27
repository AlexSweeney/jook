import React from "react";

interface VideoControlsProps {
  handlePlayClick?: () => void;
  handlePauseClick?: () => void;
  handleStopClick?: () => void;
}

const VideoControls = ({
  handlePlayClick = () => {},
  handlePauseClick = () => {},
  handleStopClick = () => {},
}: VideoControlsProps) => {
  return (
    <div>
      <button onClick={handlePlayClick}>Play</button>
      <button onClick={handlePauseClick}>Pause</button>
      <button onClick={handleStopClick}>Stop</button>
    </div>
  );
};

export default VideoControls;
