import React, { useRef } from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  IconButton,
  Heading, 
  Button,
  Stack,
  SimpleGrid, Image
} from "@chakra-ui/react";import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav'
import { Link,useNavigate } from "react-router-dom";

import { AiOutlineMenu } from "react-icons/ai";
import Nav from "./Nav";
import Footer from "./Footer";

export default function LandingPage(){
  const bg = useColorModeValue("rgb(255,255,255,.5)", "gray.800");
  const ref = useRef<null | HTMLDivElement>(null); 
  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
  return (
    <>

              


      <Box  className="home"
        w="full"
        h="container.lg"
        bgPos="center"
        bgSize="cover"
      >
        <Flex 
          align="center"
          pos="relative"
          justify="center"
          boxSize="full"
          bg="blackAlpha.700"
        >
          <Stack  textAlign="center" alignItems="center" spacing={6}>
            <Heading
              fontSize={["2xl",  "3xl"]}
              fontWeight="semibold"
              color="white"
              textTransform="uppercase"
            > <Image mb = "50px" src="src\logo.png"></Image>  
              Build Your new Idea
          
            </Heading><Button onClick={handleClick}>Learn more!</Button><Link to="/home">
            <Button
              bg="#c4b04e"
              textTransform="uppercase"
              w="fit-content"
            >
              Start 
            </Button>  </Link>       


          </Stack>
        </Flex>
      </Box> <Flex ref={ref}
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={20}
      w="full"
      justifyContent="center"
      alignItems="center"
      pos="absolute"
    >
      <Box
        shadow="xl"
        bg="white"
        _dark={{ bg: "gray.800" }}
        px={8}
        py={20}
        mx="auto"
      >    <SimpleGrid
      alignItems="center"
      columns={{ base: 1, md: 2 }}
      flexDirection="column-reverse"
      mb={24}
      spacingY={{ base: 10, md: 32 }}
      spacingX={{ base: 10, md: 24 }}
    >
      <Box order={{ base: "initial", md: 2 }}>
        <chakra.h2
          mb={4}
          fontSize={{ base: "2xl", md: "4xl" }}
          fontWeight="extrabold"
          letterSpacing="tight"
          textAlign={{ base: "center", md: "left" }}
          color="gray.900"
          _dark={{ color: "gray.400" }}
          lineHeight={{ md: "shorter" }}
        >
          Decide how you integrate Payments
        </chakra.h2>
        <chakra.p
          mb={5}
          textAlign={{ base: "center", sm: "left" }}
          color="gray.600"
          _dark={{ color: "gray.400" }}
          fontSize={{ md: "lg" }}
        >
          Love to code? Next to our ready-made and free plugins you can use
          our expansive yet simple API; decide how you integrate Payments
          and build advanced and reliable products yourself from scratch.
        </chakra.p>
       
      </Box>
      <Box
        w="full"
        h="full"
        py={48}
        bg="gray.200"
        _dark={{ bg: "gray.700" }}
      ></Box>
    </SimpleGrid> 
        <SimpleGrid
          alignItems="start"
          columns={{ base: 1, md: 2 }}
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box>
            <chakra.h2
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{ base: "center", md: "left" }}
              color="gray.900"
              _dark={{ color: "gray.400" }}
              lineHeight={{ md: "shorter" }}
              textShadow="2px 0 currentcolor"
            >
              Clear overview for efficient tracking
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color="gray.600"
              _dark={{ color: "gray.400" }}
              fontSize={{ md: "lg" }}
            >
              Handle your subscriptions and transactions efficiently with the
              clear overview in Dashboard. Features like the smart search option
              allow you to quickly find any data you’re looking for.
            </chakra.p>
         
          </Box>
          <Box
            w="full"
            h="full"
            py={48}
            bg="gray.200"
            _dark={{ bg: "gray.700" }}
          ></Box>
        </SimpleGrid>
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, md: 2 }}
          flexDirection="column-reverse"
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box order={{ base: "initial", md: 2 }}>
            <chakra.h2
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{ base: "center", md: "left" }}
              color="gray.900"
              _dark={{ color: "gray.400" }}
              lineHeight={{ md: "shorter" }}
            >
              Decide how you integrate Payments
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color="gray.600"
              _dark={{ color: "gray.400" }}
              fontSize={{ md: "lg" }}
            >
              Love to code? Next to our ready-made and free plugins you can use
              our expansive yet simple API; decide how you integrate Payments
              and build advanced and reliable products yourself from scratch.
            </chakra.p>
            <Link to="/home">
            <Button
              w={{ base: "full", sm: "auto" }}
              size="lg"
              bg="gray.900"
              _dark={{ bg: "gray.700" }}
              _hover={{ bg: "gray.700", _dark: { bg: "gray.600" } }}
              color="gray.100"
              as="a"
            >
              Start now!
            </Button></Link>
          </Box>
          <Box
            w="full"
            h="full"
            py={48}
                    backgroundImage="url(https://static.wixstatic.com/media/9f7b6e_584af36f32484e38a9da4f060fa45902~mv2.jpg/v1/fill/w_2500,h_1389,al_c/9f7b6e_584af36f32484e38a9da4f060fa45902~mv2.jpg)"

            _dark={{ bg: "gray.700" }}
          ></Box>
        </SimpleGrid>
      </Box> 
    </Flex>
   </>
  );
};


