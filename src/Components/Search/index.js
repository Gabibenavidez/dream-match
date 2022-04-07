/* eslint-disable */
import {
  getPlayers,
  getPLayersByName,
} from "../../app/features/PlayersReducer";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card";
import { Stack, Input, SimpleGrid, IconButton, InputGroup } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons';
import { debouncer } from "../../utils/debouncer";
import {
  addTeamOnePlayer,
  addTeamTwoPlayer,
  teamOnePlayers,
  teamTwoPlayers,
  addAllPlayers
} from "../../app/features/TeamsReducer";
import {
  showAlertInfo,
  showAlertOkey,
} from "../../Services/alertService";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const Search = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const players = useSelector(getPlayers);
  const selectedPlayers = useSelector(teamOnePlayers);
  const selectedPlayersTwo = useSelector(teamTwoPlayers);
  const nameTwo = useSelector(state => state.teams.nameTeamTwo);
  const nameOne = useSelector(state => state.teams.nameTeamOne);
  const allPlayers = useSelector(state => state.teams.allPlayers);

  const handleChange = (e) => { 
    const value = e.target.value;
    dispatch(getPLayersByName(value));
  };
  
  const handleClickOne = (player) => {
    const teamPlayers = allPlayers.filter((players) => players.player_id == player.player_id)
    navigate('/home');
    if (selectedPlayers.length < 5 && teamPlayers.length <= 0) {
      dispatch(addTeamOnePlayer(player));
      dispatch(addAllPlayers(player));
      showAlertOkey({ title: `Jugador agregado correctamente al equipo ${nameOne}!`});
    } else if (teamPlayers.length > 0) {
      showAlertInfo({title: 'Solo puedes usar al mismo jugador una vez'});
    } else {
      showAlertInfo({title: 'Tu equipo ya esta completo'});
    }
  };
  const handleClickTwo = (player) => {
    const teamPlayers = allPlayers.filter((players) => players.player_id == player.player_id)
    navigate('/home');
    if (selectedPlayersTwo.length < 5 && teamPlayers.length <= 0) { 
      dispatch(addTeamTwoPlayer(player));
      dispatch(addAllPlayers(player));
      showAlertOkey({ title: `Jugador agregado correctamente al equipo ${nameTwo}!`});
    } else if (teamPlayers.length > 0) {
      showAlertInfo({title: 'Solo puedes usar al mismo jugador una vez'});
    } else {
      showAlertInfo({title: 'Tu equipo ya esta completo'});
    }
  };


  return (
    <>
      <Stack spacing={3}>
        <InputGroup>
        <IconButton aria-label='Search database' icon={<SearchIcon />} />
          <Input
            variant="flushed"
            placeholder="Buscar jugador..."
            onChange={debouncer(handleChange)}
          />
        </InputGroup>
      </Stack>
      <SimpleGrid ml={2} columns={[3, 4, 6, 8]}>
        {players?.length > 0 
          ? players.map((player) => {
              return (
                <Card
                  key={player.player_id}
                  src={player.player_image}
                  alt={player.player_name}
                  name={player.player_name}
                  onClickOne={() => {handleClickOne(player), onClick()}}
                  onClickTwo={() => {handleClickTwo(player), onClick()}}
                />
              );
            })
          : null}
      </SimpleGrid>
    </>
  );
};
export default Search;
