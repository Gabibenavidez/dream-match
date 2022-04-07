import { AddIcon } from '@chakra-ui/icons';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  IconButton,
  Button,
  Stack,
  Flex,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

export default function OptionsButton({onClickOne, onClickTwo}) {
  const teamOneName = useSelector(state => state.teams.nameTeamOne);
  const teamTwoName = useSelector(state => state.teams.nameTeamTwo);
  return (
    /**
     * You may move the Popover outside Flex.
     */
    <Flex justifyContent="center" >
      <Popover placement="bottom" isLazy>
        <PopoverTrigger>
          <IconButton
            bgColor={'red.500'}
            aria-label="More server options"
            icon={<AddIcon/>}
            variant="solid"
            mt={1}
            ml={[-4,-3,-3,-3, 3, 3]}
            w={[20, 20, '30', '30']}
            h='7'
          />
        </PopoverTrigger>
        <PopoverContent w="fit-content" _focus={{ boxShadow: 'none' }}>
          <PopoverArrow />
          <PopoverBody>
            <Stack>
              <Button
                w="194px"
                variant="ghost"
                rightIcon={<AddIcon />}
                justifyContent="space-between"
                fontWeight="normal"
                fontSize="sm"
                onClick={onClickOne}>
                Agregar a {teamOneName}
              </Button>
              <Button
                w="194px"
                variant="ghost"
                rightIcon={<AddIcon />}
                justifyContent="space-between"
                fontWeight="normal"
                colorScheme="red"
                fontSize="sm"
                onClick={onClickTwo}>
                 Agregar a {teamTwoName}
              </Button>
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
}