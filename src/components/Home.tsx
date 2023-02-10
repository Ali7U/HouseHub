import React from "react";
import { Box, Flex, Link, chakra } from "@chakra-ui/react";

export default function App() {
  return (
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
        h={650}
        w={"100%"}
      >
        <Box  py={12} px={16}  maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "40%" }}>
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

          <Box mt={8}>
            <Link
              bg="gray.900"
              color="gray.100"
              px={5}
              py={3}
              fontWeight="semibold"
              rounded="lg"
              _hover={{ bg: "gray.800" }}
            >
              Start Now
            </Link>
          </Box>
        </Box>
        <Box w={{ lg: "60%" }}>
          <Box
            h={{ base: 64, lg: "full" }}
            rounded={{ lg: "lg" }}
            bgSize="cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbSUyMGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60')",
                
            }}
          ></Box>
        </Box>
      </Box>
    </Flex>
  );
}
