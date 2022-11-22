import * as React from 'react';
import ScrubberFrames from './ScrubberFrames';
import ScrubberSlider from './ScrubberSlider';
import './scrubberStyles.css';

interface ScrubberProps {
  src: string;
  duration: number;
  width: number;
  height: number;
}

const Scrubber: React.FC<ScrubberProps> = ({
  src,
  duration,
  width,
  height,
}) => {
  const canvasWidth: number =
    width > window.innerWidth ? window.innerWidth : width;

  return (
    <div className="scrubber-container">
      <div>
        <ScrubberFrames
          videoSrc={src}
          width={width}
          height={height}
          duration={duration}
          canvasWidth={canvasWidth}
        />
        <ScrubberSlider />
      </div>
    </div>
  );
};

export default Scrubber;
