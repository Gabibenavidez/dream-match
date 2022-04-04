import {
  Editable,
  EditableInput,
  EditablePreview,
  useEditableControls,
  ButtonGroup,
  IconButton,
  Flex,
  Input
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons'
import { debouncer } from '../../utils/debouncer';
import { selectTeamOneName } from '../../app/features/TeamOneReducer';
import { useDispatch, useSelector } from 'react-redux';

export default function EditableName() {
  const dispatch = useDispatch();
  const teamOneName = useSelector(state => state.teamOne.name);

  const handleChange = (e) => { 
    dispatch(selectTeamOneName(e.target.value));
  }

  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls()

    return isEditing ? (
      <ButtonGroup justifyContent='center' size='sm'>
        <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
        <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : (
      <Flex justifyContent='center'>
        <IconButton size='sm' icon={<EditIcon />} {...getEditButtonProps()} />
      </Flex>
    )
  }

  return (
    <Editable
      textAlign='center'
      defaultValue={teamOneName}
      fontSize='2xl'
      isPreviewFocusable={false}
    >
      <EditablePreview />
      {/* Here is the custom input */}
      <Input as={EditableInput} onChange={debouncer(handleChange)}/>
      <EditableControls />
    </Editable>
  )
}