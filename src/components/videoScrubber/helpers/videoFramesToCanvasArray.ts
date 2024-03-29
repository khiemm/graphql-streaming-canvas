const { detect } = require('detect-browser');
const browser = detect();

interface VideoFramesToCanvasArray {
  (
    videoSrc: string,
    currentTimes: Array<number>,
    videoWidth: number,
    canvasWidth: number
  ): Promise<Array<HTMLCanvasElement>>;
}

// todo: add timeout error waitLimit
const videoFramesToCanvasArray: VideoFramesToCanvasArray = (
  videoSrc,
  currentTimes,
  videoWidth,
  canvasWidth
) => {
  const canvasArray: Array<Promise<HTMLCanvasElement>> = currentTimes.map(
    (currentTime) => {
      return new Promise<HTMLCanvasElement>((resolve, _reject) => {
        const video: HTMLVideoElement = document.createElement('video');
        video.src = videoSrc;
        video.autoplay = true;
        video.muted = true;
        video.setAttribute('webkit-playsinline', 'webkit-playsinline');
        video.setAttribute('playsinline', 'playsinline');

        if (browser.name === 'safari') {
          // for webkit, wait for onloadedmeta date before setting currentTime.
          video.addEventListener(
            'loadedmetadata',
            () => {
              video.currentTime = currentTime;
            },
            { once: true }
          );
        } else {
          video.currentTime = currentTime;
        }

        video.addEventListener(
          'seeked',
          () => {
            const canvas = document.createElement('canvas');
            canvas.width = canvasWidth;
            canvas.height = canvasWidth;
            const ctx = canvas.getContext('2d');
            ctx?.drawImage(
              video,
              0,
              0,
              videoWidth,
              videoWidth,
              0,
              0,
              canvasWidth,
              canvasWidth
            );
            resolve(canvas);
          },
          { once: true }
        );
      });
    }
  );

  return Promise.all(canvasArray);
};

export default videoFramesToCanvasArray;
