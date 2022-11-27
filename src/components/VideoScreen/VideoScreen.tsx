import React, { useEffect, useRef } from "react";
import YouTube from "react-youtube";

/*
    accepts youtube video code 
    shows youtube video
    if autoPlay === true, plays video on load
*/

interface VideoScreenProps {
  videoId: string;
  autoPlay?: boolean;
}

const VideoScreen = ({ videoId, autoPlay = false }: VideoScreenProps) => {
  const onPlayerReady = (event: any) => {
    // access to player in all event handlers via event.target
    console.log("ON Ready");
    if (autoPlay) {
      event.target.playVideo();
    }
  };

  return <YouTube videoId={videoId} onReady={onPlayerReady}></YouTube>;
  // return <YouTube videoId="2g811Eo7K8U" onReady={onPlayerReady}></YouTube>;
};

// const YoutubeVideoScreen = ({
//   videoCode,
//   autoPlay = false,
// }: YoutubeVideoScreenProps) => {
//   const autoPlayExtension = autoPlay ? "?autoplay=1" : "";
//   const url = `https://www.youtube.com/embed/${videoCode + autoPlayExtension}`;

//   return (
//     <iframe
//       width="560"
//       height="315"
//       src={url}
//       title="YouTube video player"
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//     ></iframe>
//   );
// };

export default VideoScreen;
