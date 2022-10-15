import React from "react";

/*
    accepts youtube video code 
    shows youtube video
    !! if isPlaying === true, plays video on load
*/

interface YoutubeVideoScreenProps {
  videoCode: string;
  isPlaying: boolean;
}

const YoutubeVideoScreen = ({
  videoCode,
  isPlaying,
}: YoutubeVideoScreenProps) => {
  const autoPlayExtension = isPlaying ? "?autoplay=1" : "";
  const url = `https://www.youtube.com/embed/${videoCode + autoPlayExtension}`;

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default YoutubeVideoScreen;
