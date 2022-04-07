import { useDispatch, useSelector } from "react-redux";
import {
  removeTeamOnePlayer,
  removeTeamOne,
  teamOnePlayers,
} from "../../app/features/TeamsReducer";
import AvatarCard from "../Avatar";
import {
  Flex,
  Box,
  ButtonGroup,
  IconButton,
  Button,
  Spacer,
  SimpleGrid
} from "@chakra-ui/react";
import { showAlertInfo } from "../../Services/alertService";
import { DeleteIcon } from "@chakra-ui/icons";
import EditableName from "./EditableName";

const TeamOne = () => {
  const dispatch = useDispatch();
  const selectedPlayers = useSelector(teamOnePlayers);


  const handleDelete = () => {
    showAlertInfo({ title: "Equipo eliminado correctamente" });
    dispatch(removeTeamOne(selectedPlayers));
  };

  const handleClick = (id) => {
    showAlertInfo({ title: "Jugador eliminado correctamente" });
    dispatch(removeTeamOnePlayer(id));
  };
  return (
    <Box>
      <Flex mr={[5, 5, 10, 10]} mt={[14, 10, 0, 0, 0, 0]} mb={[9, 0, 0, 0, 0, 0]}>
        <ButtonGroup size="sm" isAttached variant="outline">
          <Button mr="-px" onClick={handleDelete}>
            Eliminiar Equipo
          </Button>
          <IconButton onClick={handleDelete} icon={<DeleteIcon />} />
        </ButtonGroup>
        <Spacer />
        <EditableName />
      </Flex>
      <SimpleGrid w="100%" columns={[2, 2, 2, 2]} mt={10}>
        {selectedPlayers?.length > 0
          ? selectedPlayers.map((player) => {
              return (
                <AvatarCard
                  key={player.player_id}
                  src={player.player_image}
                  handleClick={() => handleClick(player.player_id)}
                />
              );
            })
          : null}
      </SimpleGrid>
    </Box>
  );
};

export default TeamOne;
