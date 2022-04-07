import { SimpleGrid, Box } from '@chakra-ui/react';
import TeamOne from '../TeamOne';
import TeamTwo from '../TeamTwo';
import field from './assets/field.jpg'
import fieldVertical from './assets/fieldVertical.jpg'

const Teams = () => {
  return (
    
    <Box>
        <SimpleGrid columns={[1, 1, 2, 2]} bgImage={[fieldVertical, fieldVertical, field, field]} h={['120vh','150vh', '105vh','110vh']} bgSize={['110vw', '100vw', '105vw','100vw']} bgRepeat="no-repeat" >
            <TeamOne />
            <TeamTwo />
        </SimpleGrid>
    </Box>
   );
}
 
export default Teams;