/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const addTeamOnePlayer = createAsyncThunk(
  'player/addPlayer', 
    (player) => {
    return (player)
  }
)

export const removePlayer = createAsyncThunk(
  'player/removePlayer', (id) => {
    return (id)
  }
)

export const removeTeam = createAsyncThunk(
  'team/removeTeam', (selectedPlayers) => {
    return (selectedPlayers)
  });


const initialState = {
  teamOne: [],
  name: 'Equipo 1',
  status: 'idle',
  error: null
}

export const taemOneSlice = createSlice({
  name: 'teamOne',
  initialState,
  reducers: {
    selectTeamOneName : {
      reducer (state, action) {
        state.name = action.payload
      }
    }
  },
  extraReducers (builder) {
    builder
    .addCase(addTeamOnePlayer.pending, (state) => {
      state.status = 'loading';
    })

    .addCase(addTeamOnePlayer.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.teamOne = [...state.teamOne.concat(action.payload)];
    })

    .addCase(addTeamOnePlayer.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error;
    })

    .addCase(removePlayer.pending, (state) => {
      state.status = 'loading';
    })

    .addCase(removePlayer.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.teamOne = state.teamOne.filter(({player_id}) => player_id != action.payload);
    })

    .addCase(removePlayer.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.error;
    })

    .addCase(removeTeam.pending, (state) => {
      state.status = 'loading';
    })

    .addCase(removeTeam.fulfilled, (state) => {
      state.status = 'succeeded';
      state.teamOne = state.teamOne.splice();
    })

    .addCase(removeTeam.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.error;
    })


  }
})

export const { selectTeamOneName } = taemOneSlice.actions
export default taemOneSlice.reducer;
export const teamOnePlayers = state => state.teamOne.teamOne