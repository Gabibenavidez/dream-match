import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Text,
  Container,
  Box,
  Button,
} from "@chakra-ui/react";
import {
  teamOnePlayers,
  removeTeamOnePlayer,
  teamTwoPlayers,
  removeTeamTwoPlayer,
  removeAllPlayersPlayer,
} from "../../app/features/TeamsReducer";
import { useDispatch, useSelector } from "react-redux";
import TrTable from "../../utils/TrTable";
import { showAlertInfo } from "../../Services/alertService";

const TeamsDetail = () => {
  const dispatch = useDispatch();
  const teamOne = useSelector(teamOnePlayers);
  const teamTwo = useSelector(teamTwoPlayers);
  const teamOneName = useSelector((state) => state.teams.nameTeamOne);
  const teamTwoName = useSelector((state) => state.teams.nameTeamTwo);

  const handleDeleteOne = (id) => {
    showAlertInfo({ title: "Jugador eliminado correctamente" });
    dispatch(removeTeamOnePlayer(id));
    dispatch(removeAllPlayersPlayer(id));
  };

  const handleDeleteTwo = (id) => {
    showAlertInfo({ title: "Jugador eliminado correctamente" });
    dispatch(removeTeamTwoPlayer(id));
    dispatch(removeAllPlayersPlayer(id));
  };
  return (
    <Box ml={4} w={["100%", "100%", "100%", "100%"]}>
      <Box mb={5}>
        <Text fontSize={["lg", "lg", "4xl", "4xl"]} align="center">
         {teamOneName}
        </Text>
      </Box>
      <Table variant="striped" colorScheme="blackAlpha" size="sm">
        <Thead>
          <Tr>
            <Th>Nombre</Th>
            <Th>Imagen</Th>
            <Th>Eliminar</Th>
          </Tr>
        </Thead>
        <Tbody>
          {teamOne.map((player) => {
            return (
              <TrTable
                key={player.player_id}
                id={player.player_id}
                name={player.player_name}
                image={player.player_image}
                handleDelete={handleDeleteOne}
              />
            );
          })}
        </Tbody>
      </Table>
      <Box mb={5}>
        <Text fontSize={["lg", "lg", "4xl", "4xl"]} align="center" >
           {teamTwoName}
        </Text>
      </Box>
      <Table ml={-2} variant="striped" colorScheme="blackAlpha" size="sm">
        <Thead >
          <Tr>
            <Th>Nombre</Th>
            <Th>Imagen</Th>
            <Th>Eliminar</Th>
          </Tr>
        </Thead>
        <Tbody>
          {teamTwo.map((player) => {
            return (
              <TrTable
                key={player.player_id}
                id={player.player_id}
                name={player.player_name}
                image={player.player_image}
                handleDelete={handleDeleteTwo}
              />
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
};

export default TeamsDetail;
