import React from "react";
import { Box, Flex, Link, chakra } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import video from "../assets/bgv.mp4";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Nav />
      <Box
        w="full"
        h="100vh"
        position="relative"
        overflow="hidden"
        _before={{
          content: `""`,
          display: "block",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 0,
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            minWidth: "100%",
            minHeight: "100%",
            width: "auto",
            height: "auto",
            zIndex: -1,
          }}
        >
          <source src={video} type="video/mp4" />
        </video>

        <Box
          position="relative"
          zIndex={1}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100%"
          padding={"300px"}
        >
          <chakra.h2
            fontSize={{ base: "2xl", md: "3xl" }}
            color="white "
            _dark={{ color: "white" }}
            fontWeight="bold"
            mb={6}
          >
            Find your dream home with our HouseHub {" "}
            <chakra.span color="brand.600" _dark={{ color: "brand.400" }}>
            platform
            </chakra.span>
          </chakra.h2>
          <chakra.p color="#eee" _dark={{ color: "gray.400" }} mb={8}>
          Discover Properties That Fit Your Lifestyle and Budget in Your Desired Location Today!
          </chakra.p>
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
    </>
  );
}
