import { useDispatch, useSelector } from "react-redux";
import {
  removeTeamTwoPlayer,
  removeTeamTwo,
  teamTwoPlayers,
} from "../../app/features/TeamsReducer";
import AvatarCard from "../Avatar";
import {
  Box,
  ButtonGroup,
  IconButton,
  Button,
  Flex,
  Spacer,
  SimpleGrid,
} from "@chakra-ui/react";
import { showAlertInfo } from "../../Services/alertService";
import { DeleteIcon } from "@chakra-ui/icons";
import EditableNameTwo from "./EditableName";

const TeamTwo = () => {
  const dispatch = useDispatch();
  const selectedPlayersTwo = useSelector(teamTwoPlayers);

  const handleDelete = () => {
    showAlertInfo({ title: "Equipo eliminado correctamente" });
    dispatch(removeTeamTwo(selectedPlayersTwo));
  };

  const handleClick = (id) => {
    showAlertInfo({ title: "Jugador eliminado correctamente" });
    dispatch(removeTeamTwoPlayer(id));
  };
  return (
    <Box>
      <Flex ml={[2, 2, 10, 10]} mt={[14, 10, 0, 0, 0, 0]} mb={[9, 0, 0, 0, 0, 0]}>
        <EditableNameTwo />
        <Spacer />
        <ButtonGroup size="sm" isAttached variant="outline">
          <Button mr="-px" onClick={handleDelete}>
            Eliminiar Equipo
          </Button>
          <IconButton onClick={handleDelete} icon={<DeleteIcon />} />
        </ButtonGroup>
      </Flex>
      <SimpleGrid w={"100%"} columns={[2, 2, 2, 2]} mt={10}>
        {selectedPlayersTwo?.length > 0
          ? selectedPlayersTwo.map((player) => {
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

export default TeamTwo;
