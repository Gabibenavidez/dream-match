/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  teamOne: [],
  nameTeamOne: 'Equipo 1',
  teamTwo: [],
  nameTeamTwo: 'Equipo 2',
  allPlayers: []
};

export const teamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {
    selectTeamOneName: {
      reducer(state, action) {
        state.nameTeamOne = action.payload;
      },
    },
    addTeamOnePlayer: {
      reducer(state, action) {
        state.teamOne = [...state.teamOne.concat(action.payload)];
      },
    },
    removeTeamOnePlayer: {
      reducer(state, action) {
        state.teamOne = state.teamOne.filter(
          ({ player_id }) => player_id != action.payload
        );
      },
    },
    removeTeamOne: {
      reducer(state) {
        state.teamOne = state.teamOne.splice();
        state.allPlayers = state.allPlayers.splice();
      },
    },
    // equipo 2
    selectTeamTwoName: {
      reducer(state, action) {
        state.nameTeamTwo = action.payload;
      },
    },
    addTeamTwoPlayer: {
      reducer(state, action) {
        state.teamTwo = [...state.teamTwo.concat(action.payload)];
      },
    },
    removeTeamTwoPlayer: {
      reducer(state, action) {
        state.teamTwo = state.teamTwo.filter(
          ({ player_id }) => player_id != action.payload
        );
      },
    },
    removeTeamTwo: {
      reducer(state) {
        state.teamTwo = state.teamTwo.splice();
        state.allPlayers = state.allPlayers.splice();
      },
    },
    addAllPlayers: {
      reducer (state, action) {
        state.allPlayers = state.allPlayers.concat(action.payload);
      }
    },
  },
});

export const {
  selectTeamOneName,
  addTeamOnePlayer,
  removeTeamOnePlayer,
  removeTeamOne,
  selectTeamTwoName,
  addTeamTwoPlayer,
  removeTeamTwoPlayer,
  removeTeamTwo,
  addAllPlayers
} = teamsSlice.actions;
export default teamsSlice.reducer;
export const teamOnePlayers = (state) => state.teams.teamOne;
export const teamTwoPlayers = (state) => state.teams.teamTwo;
