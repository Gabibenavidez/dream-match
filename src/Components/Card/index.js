import {
  Heading,
  Avatar,
  Box,
  Center,
  Flex,
  Stack,
  useColorModeValue,
  IconButton
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

export default function Card({ src, alt, name, teamName, onClickOne, onClickTwo, onClickToggle}) {
  return (
    <Center py={6}>
      <Box
        w={'150px'}
        h={'230px'}
        bg={useColorModeValue('black', 'black.800')}
        boxShadow={'2xl'}
        rounded={'xl'}
        overflow={'hidden'}>
        <Flex justify={'center'} mt={6}>
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
          <Stack spacing={0} align={'center'} mb={0}>
            <Heading color={'gray.300'} fontSize={'2xl'} fontWeight={500} fontFamily={'body'} >
              {name}
            </Heading>
          </Stack>
            <Box>
                <IconButton bg='green' size='sm' icon={<AddIcon />} onClick={onClickOne} />
                <IconButton bg='red' size='sm' icon={<AddIcon />} onClick={onClickTwo} />
            </Box>
        </Box>
      </Box>
    </Center>
  );
}