
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, Center, Text, Flex, FormControl, FormLabel, Heading, HStack, Image, Input, Stack, Checkbox, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import Nav from './Nav';

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  const handleLogin = async () => {
    setError('');
    if (!userName || !password) {
      setError('Please enter both username and password');
      return;
    }
    try {
      const response = await axios.get(`https://63e20921ad0093bf29c66077.mockapi.io/Signup?username=${userName}`);
      if (response.data.length === 0) {
        setError('Incorrect username or password');
        return;
      }
      const user = response.data[0];
      if (user.password !== password) {
        setError('Incorrect username or password');
        return;
      }
      localStorage.setItem('userName', userName);
      window.location.href = '/home';
    } catch (err) {
      setError('An error occurred, please try again later');
    }
  };

  return (
    <>
    <Nav/>
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
          bgColor="#fff"
          alignItems="center"
          justifyContent="center"
          border="2px solid #c4b04e"
        >
          <Heading
            fontSize="2xl"
            color="#c4b04e
"
          >
            LOGIN
          </Heading>
          mt={-26}
          <FormControl id="user">
            <FormLabel>Username</FormLabel>
            <Input
              placeholder="Enter username"
              mt={"26"}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              mt={"26"}
              onChange={(e) => setPassword(e.target.value)}
              />
          </FormControl>
          {error && <Box color="red">{error}</Box>}
          <Stack
            spacing={4}
            direction="row"
            align="start"
            justify="space-between"
          >
            <Checkbox color="purple" size="lg">
              Remember me
            </Checkbox>
            <Link to="/forgot">Forgot password?</Link>
          </Stack>
          <Button
            size="lg"
            bgColor="#c4b04e"
            w={40}
            color={"white"}
            onClick={handleLogin}
          >
            Login
          </Button>
          <Center mt={6}>
            <Link to="/Register">
              <Text fontSize="20px">Don't have an account?</Text>
            </Link>
          </Center>
        </Stack>
      </Flex>
    </HStack>
              </>
  );
}

export default Login;
