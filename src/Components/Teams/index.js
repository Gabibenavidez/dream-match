import { SimpleGrid, Image } from '@chakra-ui/react';
import { SearchModal } from '../Modal/SearchModal';
import TeamOne from '../TeamOne';
import TeamTwo from '../TeamTwo';
import field from './assets/field.jpg'
const Teams = () => {
  return (
    <>
      <SearchModal />
        { /*<Image src={field}/>*/ }
        <SimpleGrid columns={[1, 1, 2, 2]} bgImage={[null, null, field, field]} h='120vh' bgSize={[null, '100%', '100%','100%']} bgRepeat="no-repeat" >
          <TeamOne />
          <TeamTwo />
        </SimpleGrid>
    </>
   );
}
 
export default Teams;