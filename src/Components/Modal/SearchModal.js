import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  IconButton,
  ModalFooter,
  Button
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import Search from '../Search';

export function SearchModal() {
  const OverlayTwo = () => (
    <ModalOverlay
      bg='none'
      backdropFilter='auto'
      backdropInvert='80%'
      backdropBlur='2px'
    />
  )

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton aria-label='Search database' icon={<SearchIcon />} onClick={() =>onOpen()} />
      <Modal  blockScrollOnMount={false} isCentered isOpen={isOpen} onClose={onClose} size='2x1'>
        <OverlayTwo />
        <ModalContent>
          <Search onClick={onClose}/>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}