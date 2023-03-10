import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Box, Center, Flex, FormControl, FormLabel, Heading, HStack, Image, Input, Stack, Checkbox, Button } from '@chakra-ui/react'
import Nav from './Nav';

function Register() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    setError('');
    if (!userName || !email || !password) {
      setError('Please enter all the fields');
      return;
    }

    try {
      const response = await axios.post('https://63e208d4ad0093bf29c65b2d.mockapi.io/Users', {
        userName,
        email,
        password,
      });
      window.location.href = '/login';
    } catch (err) {
      setError('An error occurred while registering');
    }
  };

  return (
    <HStack w="full" h="full" bgColor="#fff" align="center">
      <Flex
        width="full"
        height="90vh"
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          boxShadow="2xl"
          w="full"
          maxW="xl"
          h="80vh"
          spacing={6}
          p={6}
          bgColor='#fff'
          border="2px solid #c4b04e"
          alignItems='center'
          justifyContent='center'
        >   
        <Link to={"/"}>
        <Image position={"relative"} top="-10px" src="src\logo.png" height = "40px"></Image>       </Link> 

          <Heading fontSize='2xl' color='#c4b04e'>
            REGISTER
          </Heading>
          <FormControl id='user'>
            <FormLabel>Username</FormLabel>
            <Input placeholder='Enter username' value={userName} onChange={e => setUserName(e.target.value)} />
          </FormControl>
          <FormControl id="mail">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter email"
              value={email}
              mt={""}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              mt={""}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          {error && <Box color='red'>{error}</Box>}
          <Button bgColor='#c4b04e' color='white' onClick={handleRegister}>
            REGISTER
          </Button>
        </Stack>
      </Flex>
    </HStack>
  );
}

export default Register;