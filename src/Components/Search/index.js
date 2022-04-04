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
  teamOnePlayers,
} from "../../app/features/TeamOneReducer";
import {

  showAlertInfo,
  showAlertOkey,
} from "../../Services/alertService";
import {
  addTeamTwoPlayer,
  teamTwoPlayers
} from '../../app/features/TeamTwoReducer';

const Search = ({onClick}) => {
  const dispatch = useDispatch();
  const players = useSelector(getPlayers);
  const selectedPlayers = useSelector(teamOnePlayers);
  const selectedPlayersTwo = useSelector(teamTwoPlayers);
  const status = useSelector((state) => state.players.status);
  const name = useSelector(state => state.teamTwo.name);
  console.log(players, status);

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(getPLayersByName(value));
  };

  const handleClickOne = async (player) => {
    if (selectedPlayers.length < 5 ) {
      dispatch(addTeamOnePlayer(player));
    } else {
      showAlertInfo({title: 'Tu equipo ya esta completo'});
    }
  };
  const handleClickTwo = async (player) => {
    if (selectedPlayersTwo.length < 5) { 
      dispatch(addTeamTwoPlayer(player));
      showAlertOkey({ title: `Jugador agregado correctamente al equipo ${name}!`});
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
      <SimpleGrid ml={2} columns={{ sm: "2", md: "4", lg: "4", xl: "6" }}>
        {players?.length > 0
          ? players.slice(0, 5).map((player) => {
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
