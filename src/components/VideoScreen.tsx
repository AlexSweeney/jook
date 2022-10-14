import React from "react";

/*
    accepts youtube url 
    shows youtube video
    if isPlaying === true, plays video
*/

interface VideoScreenProps {
  url: string;
  isPlaying: boolean;
}

const VideoScreen = ({
  url = "https://www.youtube.com/embed/r1LlOBPhC_c",
  isPlaying = true,
}: VideoScreenProps) => {
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={url}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoScreen;
