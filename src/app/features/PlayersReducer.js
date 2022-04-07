import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getByName } from '../../Services/ApiService';


export const getPLayersByName = createAsyncThunk(
  'players/getPlayersByName',
  async (playerName) => {
    return await getByName(playerName)
    .then(res => res.data)
    .catch(error => console.log(error));
  }
)

const initialState = {
  players: [],
  status: 'idle',
  error: null
};

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  extraReducers (builder) {
    builder
      .addCase(getPLayersByName.pending, (state) => {
        state.status = 'loading';
      })

      .addCase(getPLayersByName.fulfilled, (state, action) => {
          console.log(action.payload)
          state.status = 'suceedded';
          state.players = action.payload;
      })

      .addCase(getPLayersByName.rejected, (state, action) => {
        state.status = 'failed';
        state.players = action.error.message;
      })
}});

export default playersSlice.reducer;
export const getPlayers = state => state.players.players