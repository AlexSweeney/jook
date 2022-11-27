import React, { useRef } from "react";
// import VideoControls from "../components/VideoControls";
import VideoScreen from "../components/VideoScreen/VideoScreen";

const Home = () => {
  const videoId = "r1LlOBPhC_c";

  // const onClickPlay = () => {
  //   console.log("play");
  // };

  // const onClickPause = () => {
  //   console.log("pause");
  // };

  // const onClickStop = () => {
  //   console.log("stop");
  // };

  return (
    <section>
      <VideoScreen videoId={videoId} />
      {/* <VideoControls
        handlePlayClick={onClickPlay}
        handlePauseClick={onClickPause}
        handleStopClick={onClickStop}
      /> */}
    </section>
  );
};

export default Home;
