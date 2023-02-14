import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
// 
import { ReactNode } from 'react';
import { FaDiscord, FaFacebook, FaInstagram, FaLinkedin, FaRegComment, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.900')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.700', 'whiteAlpha.800'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function footer() {
  const bg = useColorModeValue("white", "gray.800");

  return (
    <Box
        bg={bg}
        color={useColorModeValue('gray.900', 'gray.700')}>
      <Container
        as={Stack}
        maxW={'2xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text>© 2023 HOUSEHUB</Text>
        <Stack direction={'row'} spacing={4}>
          <SocialButton label={'Twitter'} href={'#'}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'#'}>
            <FaInstagram />
          </SocialButton>
          <SocialButton label={'Whatsapp'} href={'#'}>
            <FaWhatsapp />
          </SocialButton>
          <SocialButton label={'Linkedin'} href={'#'}>
            <FaLinkedin />
          </SocialButton>
          <SocialButton label={'Discord'} href={'#'}>
            <FaDiscord />
          </SocialButton>
          <SocialButton label={'Facebook'} href={'#'}>
            <FaFacebook />
          </SocialButton>
          <Link to={'/Contact'}>
          <SocialButton label={'Comment'} href={'#'}>
            <FaRegComment />
          </SocialButton></Link>
        </Stack>
      </Container>
    </Box>
  );
}

