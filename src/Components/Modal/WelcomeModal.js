import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Button
} from '@chakra-ui/react'
import { useEffect } from 'react';
import WelcomePage from '../WelcomePage'


export function WelcomeModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, [])

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size='full'>
        <ModalOverlay />
        <ModalContent>
          <WelcomePage onClick={onClose}/>
        </ModalContent>
      </Modal>
    </>
  )
}