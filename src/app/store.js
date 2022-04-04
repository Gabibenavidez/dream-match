import { configureStore } from '@reduxjs/toolkit';
import PlayersReducer from './features/PlayersReducer';
import TeamOneReducer from './features/TeamOneReducer';
import TeamTwoReducer from './features/TeamTwoReducer';

export default configureStore({
  reducer: {
    players : PlayersReducer,
    teamOne : TeamOneReducer,
    teamTwo : TeamTwoReducer
  }
})