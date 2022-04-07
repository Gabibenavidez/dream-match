import React from 'react';
import {
  Tr,
  Td,
  Button,
  Image,
  Stack
} from '@chakra-ui/react';
import { AiFillDelete } from 'react-icons/ai';

const TrTable = ({ id, name, image, handleDelete }) => {
  return (
        <Tr>
            <Td >{name}</Td>
            <Td>
                <Image src={image} boxSize={['50px','70px','100px','100px','100px','100px']} objectFit='cover' rounded={100}/>
            </Td>
            <Td>
                <Stack spacing={2}>
                        <Button colorScheme='red' w={[35, 50, 50, 50]} onClick={() => handleDelete(id)}>
                            <AiFillDelete />
                        </Button>
                </Stack>
            </Td>
        </Tr>
  );
};

export default TrTable;
