import { useDispatch, useSelector } from 'react-redux';
import { removePlayer, removeTeam, teamTwoPlayers } from '../../app/features/TeamTwoReducer';
import AvatarCard from '../Avatar';
import { SimpleGrid, Box, ButtonGroup, IconButton, Button } from '@chakra-ui/react';
import { showAlertInfo } from '../../Services/alertService';
import { DeleteIcon } from '@chakra-ui/icons';
import EditableName from './EditableName';

const TeamTwo = () => {
  const dispatch = useDispatch();
  const selectedPlayersTwo = useSelector(teamTwoPlayers);
  const status = useSelector(state => state.teamTwo.status);

  const handleDelete = () => {
    showAlertInfo({title: 'Equipo eliminado correctamente'});
    dispatch(removeTeam(selectedPlayersTwo));
  }

  const handleClick = (id) => {
    showAlertInfo({title: 'Jugador eliminado correctamente'});
    dispatch(removePlayer(id));
  }
  return ( 
    <Box>
      <ButtonGroup size='sm' isAttached variant='outline'>
        <Button mr='-px' onClick={handleDelete}>Eliminiar Equipo 2</Button>
        <IconButton onClick={handleDelete} icon={<DeleteIcon />} />
      </ButtonGroup>
      <EditableName />
      <SimpleGrid
          w='100%'
          ml={-5}
          columns={{ sm: '1', md: '2', lg: '2', xl: '2' }}
        >
        { 
          selectedPlayersTwo?.length > 0 ?
          selectedPlayersTwo
        .map((player) => {
        return ( <AvatarCard  key={player.player_id} 
                              src={player.player_image}
                              handleClick={() => handleClick(player.player_id)}
                        />)
        })
        : null}
        </SimpleGrid>
    </Box>
   );
}
 
export default TeamTwo;