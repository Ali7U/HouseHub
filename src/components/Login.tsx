import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, Center, Text, Flex, FormControl, FormLabel, Heading, HStack, Image, Input, Stack, Checkbox, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import Nav from './Nav';

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [Id, setID] = useState('');

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  const handleLogin = async () => { console.log(password); console.log(userName)
    setError('');
    
    try {
      const response = await axios.get(`https://63e208d4ad0093bf29c65b2d.mockapi.io/Users/?userName=${userName}`);
     
      const user = response.data[0];
      console.log(user);

      if (user.password !== password) {
        setError('Incorrect username or password');
        return;
      }
      localStorage.setItem('userName', userName);
      localStorage.setItem('id', user.id);

      window.location.href = '/home';
    } catch (err) {
      setError('An error occurred, please try again later');
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
          border="2px solid #c4b04e"

        > <Link   to={"/"}>
        <Image position={"relative"} top="-50px" src="src\logo.png" height = "40px"></Image>       </Link> 
          <Heading fontSize='2xl' color='#c4b04e
'>        
            LOGIN
          </Heading>
          <FormControl id='user'>
            <FormLabel>Username</FormLabel>
            <Input placeholder='Enter username' value={userName} onChange={e => setUserName(e.target.value)} />
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
          <Stack spacing={4} direction='row' align='start' justify='space-between'>
            <Checkbox color='purple' size='lg'>
Remember me
</Checkbox>
<Link to='/forgot'>Forgot password?</Link>
</Stack>
<Button size='lg' bgColor='#c4b04e' w={40} color={"white"} onClick={handleLogin}>
Login
</Button>
<Center mt={6}>

<Link to='/Register'>
<Text fontSize="20px">Don't have an account?</Text>
</Link>
</Center>
</Stack> 
</Flex>
</HStack>
);
}

export default Login;
