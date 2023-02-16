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

              


      <Box 
        w="full"
        h="container.lg"
        backgroundImage="url(https://static.wixstatic.com/media/9f7b6e_584af36f32484e38a9da4f060fa45902~mv2.jpg/v1/fill/w_2500,h_1389,al_c/9f7b6e_584af36f32484e38a9da4f060fa45902~mv2.jpg)"
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
          
            </Heading><Button         boxShadow="dark-lg" style= {{color:"white", backgroundColor:"#2F4858"}}onClick={handleClick}>Learn more</Button>
            
            {localStorage.getItem("userName") !== null  ?   <Link to="/home">
            <Button
                                        color="white"

                                        boxShadow="dark-lg"

              bg="#c4b04e"
              w="fit-content"
            >
                            Get Started 
 
            </Button>
              </Link>   :   <Link to="/login">
            <Button
                        boxShadow="dark-lg"

              color="whiteAlpha.800"
              bg="#c4b04e"
              w="fit-content"
            >
              Get Started 
            </Button>
              </Link>  }
               


          </Stack>
        </Flex>
      </Box> <Flex ref={ref}
      bg="#2F4858"
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
           Welcome to <span style={{color:"#c4b04e"}}>HouseHub</span>! A place for all things house design.
        </chakra.h2>
        <chakra.p
          mb={5}
          textAlign={{ base: "center", sm: "left" }}
          color="gray.600"
          _dark={{ color: "gray.400" }}
          fontSize={{ md: "lg" }}
        >
         Whether you're looking to build a new home, renovate an existing one, or simply refresh your decor, we've got you covered. With a wide range of pre-made templates to choose from and a powerful AI image generator, we make it easy to bring your design ideas to life. Browse our collection today and start building your dream home!
        </chakra.p>
       
      </Box>
      <Box
      
      bg="gray.200"   backgroundSize="cover"
      backgroundRepeat={"no-repeat"}
      backgroundImage="url(https://img.freepik.com/free-vector/doodle-concept-with-architect-worker-holding-blueprint-engineering-architecture-job-background-professional-engineer-helmet-with-work-tools-compass-pencil-crane-line-art-vector-illustration_107791-11233.jpg?w=1480&t=st=1676516114~exp=1676516714~hmac=67fea5b50496699194ad72ad3e3678744249350d554130dc1550b812dd28c102)"
        w="full"
        h="full"
        boxShadow="dark-lg"

        py={48}
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
              A platform for everybody
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color="gray.600"
              _dark={{ color: "gray.400" }}
              fontSize={{ md: "lg" }}
            >
               We've created a platform that makes it easy and affordable to design the house of your dreams. With a variety of styles, sizes, and floor plans to choose from, you're sure to find something that fits your needs and budget. Plus, our AI image generator provides endless inspiration for your interiors and exteriors. It's never been easier to create a space you love.
            </chakra.p>
         
          </Box>
          <Box
            w="full"
            h="full"
            py={48}
            boxShadow="dark-lg"

            bg="gray.200"   backgroundSize="cover"
            backgroundRepeat={"no-repeat"}
            backgroundImage="url(https://img.freepik.com/free-vector/man-robot-with-computers-sitting-together-workplace-artificial-intelligence-workforce-future-flat-illustration_74855-20635.jpg?w=1380&t=st=1676515804~exp=1676516404~hmac=ef52b3dec059d1f3f1138d3fbe6b190ea462823da753b3d80e68d443acd50141)"

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
              Get Started!
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color="gray.600"
              _dark={{ color: "gray.400" }}
              fontSize={{ md: "lg" }}
            >
              Our platform combines the convenience of pre-made templates with the creativity of an AI image generator, giving you the tools you need to design a space that reflects your unique style and personality. From sleek and modern to cozy and minimal, we've got something for everyone. Let us help you transform your house into a home you love.
            </chakra.p>
            <Link to="/home">
            {localStorage.getItem("userName") !== null  ?   <Link to="/home">
            <Button
              bg="#2F4858"
          color="white"
          size="lg"
              w="fit-content"            boxShadow="dark-lg"

            >
              Start Now! 
            </Button>
              </Link>   :   <Link to="/login">
            <Button
              bg="#c4b04e"
             
              w="fit-content"
            >
              Start Now!  
            </Button>
              </Link>  }
               </Link>
          </Box>
          <Box
            w="full"
            h="full"
            py={48}
            boxShadow="dark-lg"
            backgroundSize="cover"
            backgroundRepeat={"no-repeat"}
                    backgroundImage="url(https://img.freepik.com/free-photo/robot-handshake-human-background-futuristic-digital-age_53876-129770.jpg?w=1060&t=st=1676515061~exp=1676515661~hmac=9a808a56860cb391e14bd6ff8d523fbf9d1eb9237092d5390f0f4ded52108841)"
            
            _dark={{ bg: "gray.700" }}
          ></Box>
        </SimpleGrid>
      </Box> 
    </Flex>
   </>
  );
};


