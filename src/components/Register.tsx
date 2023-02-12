import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, Center, Flex, FormControl, FormLabel, Heading, HStack, Image, Input, Stack, Checkbox, Link, Button } from '@chakra-ui/react'

function Register() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    setError('');
    if (!userName || !email || !password) {
      setError('Please enter all the fields');
      return;
    }

    try {
      const response = await axios.post('https://63e20921ad0093bf29c66077.mockapi.io/Signup', {
        username: userName,
        email,
        password,
      });
      window.location.href = '/login';
    } catch (err) {
      setError('An error occurred while registering');
    }
  };

  return (
    <HStack w='full' h='full' bgColor='#fff' align='center'>
      <Flex width='full' height='90vh' alignItems='center' justifyContent='center'>
        <Stack
          boxShadow='2xl'
          w='full'
          maxW='xl'
          h='80vh'
          spacing={6}
          p={6}
          bgColor='#fff'
          alignItems='center'
          justifyContent='center'
        >
          <Heading fontSize='2xl' color='#0d7aee'>
            REGISTER
          </Heading>
          <FormControl id='user'>
            <FormLabel>Username</FormLabel>
            <Input placeholder='Enter username' value={userName} onChange={e => setUserName(e.target.value)} />
          </FormControl>
          <FormControl id='email'>
            <FormLabel>Email</FormLabel>
            <Input placeholder='Enter email' value={email} onChange={e => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id='password'>
            <FormLabel>Password</FormLabel>
            <Input
              type='password'
              placeholder='Enter password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </FormControl>
          {error && <Box color='red'>{error}</Box>}
          <Button bgColor='#0d7aee' color='white' onClick={handleRegister}>
            REGISTER
          </Button>
        </Stack>
      </Flex>
    </HStack>
  );
}

export default Register;