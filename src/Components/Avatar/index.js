import { Avatar, Box, Flex, keyframes, IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons'

export default function AvatarCard({src, handleClick}) {
  const size = '86px';
  const color = 'teal';

  const pulseRing = keyframes`
	0% {
    transform: scale(0.33);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`;

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h={['60px','90px','90px', '110px', '160px',"210px"]}
      w="full"
      overflow="hidden"
      mb={5}
      >
      <IconButton size='xs' onClick={handleClick} icon={<DeleteIcon />}/>
      {/* Ideally, only the box should be used. The <Flex /> is used to style the preview. */}
      <Box
        as="div"
        position="relative"
        w={['50px', '50px' , '50px', size]}
        h={['50px', '50px' , '50px', size]}
        mb={[2,0,0,0,0,19]}
        _before={{
          content: "''",
          position: 'relative',
          display: 'block',
          width: '300%',
          height: '300%',
          boxSizing: 'border-box',
          marginLeft: '-100%',
          marginTop: '-100%',
          borderRadius: '50%',
          bgColor: color,
          animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
        }}>
        <Avatar
          src={src}
          size="full"
          position="absolute"
          top={0}
        />
      </Box>
    </Flex>
  );
}