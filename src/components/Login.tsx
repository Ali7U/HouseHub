import React from 'react'
import axios from 'axios'
import { Box, Center, Flex, FormControl, FormLabel, Heading, HStack, Image, Input, Stack, Checkbox, Link, Button } from '@chakra-ui/react'




function Login() {
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
                <Link color={'purple.500'}>Forgot password</Link>
                </Stack>
                <Button bgColor={'#0d7aee'} color={"white"}>SIGN IN</Button>
            </Stack>
        </Flex>
    </HStack>

  )
}

export default Login
