import { configureStore } from '@reduxjs/toolkit';
import PlayersReducer from './features/PlayersReducer';
import TeamsReducer from './features/TeamsReducer';

export default configureStore({
  reducer: {
    players : PlayersReducer,
    teams : TeamsReducer,
  }
})