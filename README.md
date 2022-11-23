typescript

- npm i typescript
- tsconfig.json
  ~~react-scripts~~
  webpack
- resolve
- webpack-dev-server: use instead of `webpack --mode development --watch`
  babel

pre-canvas

- XMLHttpRequest
- blob
- document.createElement('video')
- Promise.race

canvas

- frames
- sliders
- events of html video
- Create an array of canvas elements, each holding a frame of video
- when use slider, draw canvas by each canvas above

HTMLMediaElement

- audio, video
- customization media source
- example: htmlmediaelement from https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play#examples

MediaStream

- example: mediastream from https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/getVideoTracks
- Media Capture and Streams: https://developer.mozilla.org/en-US/docs/Web/API/Media_Capture_and_Streams_API
  - source https://developer.mozilla.org/en-US/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos, capturing a frame from the stream, draw it into canvas
- MediaRecorder: https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API
  - source: 2, canvas used for drawing slider

WebRTC

- MediaStream, RTCPeerConnection (RTCIceCandidate first, see systango), RTCDataChannel
- step https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Perfect_negotiation, tham khảo lấy theo ý hiểu
  (only client, not host (camera) assumption)
  - create RTCIceCandidate and RTCPeerConnection: STUN
  - handle incoming tracks: ontrack | addEventListener("track")
- compare with WebSocket
