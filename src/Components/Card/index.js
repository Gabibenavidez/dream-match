import {
  Heading,
  Avatar,
  Box,
  Center,
  Flex,
  Stack,
  useColorModeValue,
  IconButton,
  Spacer
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import OptionsButton from '../../utils/optionButton';

export default function Card({ src, alt, name, onClickOne, onClickTwo}) {
  return (
    <Center py={6}>
      <Box
        w={['105px','105px','105px','150px','150px']}
        h={['185px','185px', '230px','230px']}
        mr={2}
        bg={useColorModeValue('black', 'black.800')}
        boxShadow={'2xl'}
        rounded={'xl'}
        overflow={'hidden'}>
        <Flex justify={'center'} mt={[2,2,2,2,2,6]}>
          <Avatar
            size={'xl'}
            src={src}
            alt={alt}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={[0, 0, 6, 6]}>
            <Heading color={'gray.300'} fontSize={['1x1','1x1','2xl','2xl']} fontWeight={500} fontFamily={'body'} mt={[-6, -6, -6]} h={[10, 10, null, null]} >
              {name}
            </Heading>
          </Stack>
            <Flex>
                <OptionsButton onClickOne={onClickOne} onClickTwo={onClickTwo}/>
            </Flex>
        </Box>
      </Box>
    </Center>
  );
}