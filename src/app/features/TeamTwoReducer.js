/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getById } from '../../Services/ApiService';

export const addTeamTwoPlayer = createAsyncThunk(
  'player/addPlayerTwo', 
  async (player) => {
    return  (player)
  }
)

export const removePlayer = createAsyncThunk(
  'player/removePlayerTwo', (id) => {
    return (id)
  }
)

export const removeTeam = createAsyncThunk(
  'team/removeTeamTwo', (selectedPlayersTwo) => {
    return (selectedPlayersTwo)
  });

const initialState = {
  teamTwo: [],
  name: 'Equipo 2',
  status: 'idle',
  error: null
}

export const taemTwoSlice = createSlice({
  name: 'teamTwo',
  initialState,
  reducers: {
    selectTeamTwoName : {
      reducer (state, action) {
        state.name = action.payload
      }
    }
  },
  extraReducers (builder) {
    builder
    .addCase(addTeamTwoPlayer.pending, (state) => {
      state.status = 'loading';
    })

    .addCase(addTeamTwoPlayer.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.teamTwo = [...state.teamTwo.concat(action.payload)];
    })

    .addCase(addTeamTwoPlayer.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error;
    })

    .addCase(removePlayer.pending, (state) => {
      state.status = 'loading';
    })

    .addCase(removePlayer.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.teamTwo = state.teamTwo.filter(({player_id}) => player_id != action.payload);
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
      state.teamTwo = state.teamTwo.splice();
    })

    .addCase(removeTeam.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.error;
    })


  }
})


export const { selectTeamTwoName } = taemTwoSlice.actions;
export default taemTwoSlice.reducer;
export const teamTwoPlayers = state => state.teamTwo.teamTwo