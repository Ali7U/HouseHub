import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, Center, Text, Flex, FormControl, FormLabel, Heading, HStack, Image, Input, Stack, Checkbox, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

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
      window.location.href = '/';
    } catch (err) {
      setError('An error occurred, please try again later');
    }
  };

  return (
    <HStack w={"full"} h={"full"} bgColor={"#fff"} align={"center"}>
        {/* <Flex w={"full"} h={"90vh"} borderRightWidth={1}>
            <Image
            borderRadius={18}
            objectFit={'cover'}
            h={'full'}
            w={'full'}
            src="https://images.pexels.com/photos/221514/pexels-photo-221514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        </Flex> */}
        <Flex  width={"full"} height={'90vh'} alignItems={"Center"} justifyContent={'center'}>
            <Stack boxShadow='2xl' w={"full"} maxW={"xl"} h={"80vh"} spacing={6} p={6} bgColor={"#fff"} alignItems={"Center"} justifyContent={'center'}>
                <Heading fontSize={"2xl"} color={"#0d7aee"}>
                    LOGIN to your account
                </Heading>
                <FormControl id='user' >
                    <FormLabel> Username</FormLabel>
                    <Input placeholder='Enter username: '></Input>
                </FormControl>
                <FormControl id='password' >
                    <FormLabel > Password</FormLabel>
                    <Input type={'password'} placeholder='**********'></Input>
                </FormControl>
                <Stack
                spacing={4}
                direction={'row'}
                align="start"
                justify="space-between"
            >
                <Checkbox color={'purple'}>Remember me</Checkbox>
                <Link color={'purple.500'} to={''}>Forgot password</Link>
                </Stack>
                <Button bgColor={'#0d7aee'} color={"white"}>SIGN IN</Button>
            </Stack>
        </Flex>
    </HStack>

  )
}

export default Login;
