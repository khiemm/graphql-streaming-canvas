import { combineReducers } from '@reduxjs/toolkit';
import scrubberReducer from '../components/videoScrubber/scrubberSlice';
import videoReducer from '../components/userVideo/videoSlice';

const rootReducer = combineReducers({
  scrubber: scrubberReducer,
  video: videoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
