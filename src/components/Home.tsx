import React from "react";
import { Box, Flex, Link, chakra } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import Nav from "./Nav";
=======
import bg1 from '../assets/background1.png'
>>>>>>> b089578f87061417c3ffbe52692e1cbaff103ac7

export default function Home() {
  const navigate = useNavigate();
  return (
<<<<<<< HEAD
    <> <Nav/>  <Flex
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      //   p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg="white"
        _dark={{ bg: "gray.800" }}
        // mx={{ lg: 8 }}
        display={{ lg: "flex" }}
        // maxW={{ lg: "5xl" }}
        shadow={{ lg: "lg" }}
        rounded={{ lg: "lg" }}
        h={600}
        w={"100%"}
        // h={{ base: 64, lg: "full" }}
        // rounded={{ lg: "lg" }}
        bgSize="cover"
        style={{
          backgroundImage:
            'url("https://static.wixstatic.com/media/9f7b6e_584af36f32484e38a9da4f060fa45902~mv2.jpg/v1/fill/w_2500,h_1389,al_c/9f7b6e_584af36f32484e38a9da4f060fa45902~mv2.jpg")',
        }}
      >
        <Box py={6} px={6} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "40%" }}>
          <chakra.h2
            fontSize={{ base: "2xl", md: "3xl" }}
            color="gray "
            _dark={{ color: "white" }}
            fontWeight="bold"
            mt={35}
          >
            Build Your New{" "}
            <chakra.span color="brand.600" _dark={{ color: "brand.400" }}>
              Idea
            </chakra.span>
          </chakra.h2>
          <chakra.p mt={4} color="gray " _dark={{ color: "gray.400" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
            modi reprehenderit vitae exercitationem aliquid dolores ullam
            temporibus enim expedita aperiam mollitia iure consectetur dicta
            tenetur, porro consequuntur saepe accusantium consequatur.
          </chakra.p>
=======
>>>>>>> b089578f87061417c3ffbe52692e1cbaff103ac7

      <Flex
        bg="#edf3f8"
        _dark={{ bg: "#3e3e3e" }}
        //   p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          bg="white"
          _dark={{ bg: "gray.800" }}
          // mx={{ lg: 8 }}
          display={{ lg: "flex" }}
          // maxW={{ lg: "5xl" }}
          shadow={{ lg: "lg" }}
          rounded={{ lg: "lg" }}
          h={600}
          w={"100%"}
          // h={{ base: 64, lg: "full" }}
          // rounded={{ lg: "lg" }}
          bgSize="cover"
          // style={{
          //   backgroundImage:
          //     'url("https://static.wixstatic.com/media/9f7b6e_584af36f32484e38a9da4f060fa45902~mv2.jpg/v1/fill/w_2500,h_1389,al_c/9f7b6e_584af36f32484e38a9da4f060fa45902~mv2.jpg")',
          // }}
        >
    <div className="home">

          <Box py={6} px={6} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "40%" }}>
            <chakra.h2
              fontSize={{ base: "2xl", md: "3xl" }}
              color="gray "
              _dark={{ color: "white" }}
              fontWeight="bold"
              mt={35}
              // Sp={5}
            >
              Build Your New{" "}
              <chakra.span color="brand.600" _dark={{ color: "brand.400" }}>
                House
              </chakra.span>
            </chakra.h2>
            <chakra.p mt={4} color="gray " _dark={{ color: "gray.400" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              modi reprehenderit vitae exercitationem aliquid dolores ullam
              temporibus enim expedita aperiam mollitia iure consectetur dicta
              tenetur, porro consequuntur saepe accusantium consequatur.
            </chakra.p>

            <Box mt={8}>
              <Link
                bg="gray.900"
                color="gray.100"
                px={5}
                py={3}
                fontWeight="semibold"
                rounded="lg"
                _hover={{ bg: "gray.800" }}
                onClick={() => {
                  navigate("/main");
                }}
              >
                Start Now
              </Link>
            </Box>
          </Box>
          </div>
          {/* <Box w={{ lg: "60%" }}> */}
            {/* <Box
            h={{ base: 64, lg: "full" }}
            rounded={{ lg: "lg" }}
            bgSize="cover"
            style={{
              backgroundImage:
                'url("https://static.wixstatic.com/media/9f7b6e_584af36f32484e38a9da4f060fa45902~mv2.jpg/v1/fill/w_2500,h_1389,al_c/9f7b6e_584af36f32484e38a9da4f060fa45902~mv2.jpg")',
            }}
          ></Box> */}
          {/* </Box> */}
        </Box>
<<<<<<< HEAD
      </Box>
    </Flex>
    </>  
=======
      </Flex>
>>>>>>> b089578f87061417c3ffbe52692e1cbaff103ac7
  );
}
