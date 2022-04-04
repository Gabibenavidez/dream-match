import { useDispatch, useSelector } from 'react-redux';
import { removePlayer, removeTeam, teamOnePlayers } from '../../app/features/TeamOneReducer';
import AvatarCard from '../Avatar';
import { SimpleGrid, Box, ButtonGroup, IconButton, Button } from '@chakra-ui/react';
import { showAlertInfo } from '../../Services/alertService';
import { DeleteIcon } from '@chakra-ui/icons';
import EditableName from './EditableName';

const TeamOne = () => {
  const dispatch = useDispatch();
  const selectedPlayers = useSelector(teamOnePlayers);
  const status = useSelector(state => state.teamOne.status);
  console.log(status)

  const handleDelete = () => {
    showAlertInfo({title: 'Equipo eliminado correctamente'});
    dispatch(removeTeam(selectedPlayers));
  }

  const handleClick = (id) => {
    showAlertInfo({title: 'Jugador eliminado correctamente'});
    dispatch(removePlayer(id));
  }
  return ( 
    <Box>
      <ButtonGroup size='sm' isAttached variant='outline'>
        <Button mr='-px' onClick={handleDelete}>Eliminiar Equipo 1</Button>
        <IconButton onClick={handleDelete} icon={<DeleteIcon />} />
      </ButtonGroup>
      <EditableName />
      <SimpleGrid
          w='100%'
          ml={2}
          columns={{ sm: '1', md: '2', lg: '2', xl: '2' }}  
        >
        { 
          selectedPlayers?.length > 0 ?
          selectedPlayers
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
 
export default TeamOne;