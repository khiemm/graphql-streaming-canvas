import * as React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Scrubber from '../components/videoScrubber/Scrubber';
import { VideoUpload } from '../components/userVideo/VideoUpload';
import type { VideoState } from '../components/userVideo/videoSlice';
import type { RootState } from 'app/rootReducer';
import 'app/app.css';

const App: React.FC = () => {
  // conditional render <VideoUpload> or <MosaicTiles>
  const [videoReady, setVideoReady] = useState<boolean>(false);
  // set app screen width relative to video width
  const { src, duration, width, height } = useSelector<RootState, VideoState>(
    (state) => state.video as VideoState
  );
  const appScreenWidth: Partial<number> =
    width > window.innerWidth ? window.innerWidth : width;
  // callback from <VideoUpload> when user-selected video is ready
  const onVideoSelectedCallback = () => {
    setVideoReady(true);
  };
  // <VideoUpload> is a mock for user-initiated video uploads
  return (
    <div className="app-container" style={{ width: `${appScreenWidth}px` }}>
      {!videoReady ? (
        <VideoUpload onVideoSelectedCallback={onVideoSelectedCallback} />
      ) : (
        <Scrubber src={src} duration={duration} width={width} height={height} />
      )}
    </div>
  );
};

export default App;
