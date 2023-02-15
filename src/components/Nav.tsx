import React, { useEffect, useState } from "react";

import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  const [isloggedin, setisloggedin] = React.useState<boolean>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef: any = React.useRef();

  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  useEffect(() => {
    localStorage.getItem("userName")
      ? setisloggedin(true)
      : setisloggedin(false);
  }, []);
  function logout() {
    localStorage.clear();
    setisloggedin(false);
  }

  return (
    <React.Fragment>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Log out
            </AlertDialogHeader>

            <AlertDialogBody>Are you sure you want to log out?</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                ref={cancelRef}
                onClick={() => {
                  onClose();
                  localStorage.clear();
                  setisloggedin(false);
                  navigate("/");
                }}
                ml={3}
              >
                Log out
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      <chakra.header zIndex={"1"}
        bg={"white"}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
              
            >
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.a>
<<<<<<< HEAD
            <Link   to={"/"}>
            <Image src="src\logo.png" height = "40px"></Image>       </Link>   </Flex>
=======
            <Link to={"/"}>
              <Image src="src\logo.png" height="40px"></Image>{" "}
            </Link>{" "}
          </Flex>
>>>>>>> b089578f87061417c3ffbe52692e1cbaff103ac7
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
<<<<<<< HEAD
              <Button  _hover={{backgroundColor: "#2F4858", color:"white"}}  onClick={()=>navigate("/Home")}variant="ghost">Home</Button>
              <Button  _hover={{backgroundColor: "#2F4858", color:"white"}} onClick={()=>navigate("/GenerateImage")} variant="ghost">Image Generator</Button>
              <Button  _hover={{backgroundColor: "#2F4858", color:"white"}} onClick={()=>navigate("/main")} variant="ghost">Design</Button>

              <Button   _hover={{backgroundColor: "#2F4858", color:"white"}} onClick={()=>navigate("/contact")} variant="ghost">Contact Us</Button>
              <Button   _hover={{backgroundColor: "#c4b04e"}} onClick={()=>navigate("/profile")} variant="ghost">Account</Button>
              {isloggedin ?
              

              <Button    _hover={{backgroundColor:"red.300"}}onClick={onOpen} variant="ghost">Log out</Button>

              :

              <Link to="/login">
              <Button _hover={{backgroundColor:"green.200"}}variant="ghost">Sign in</Button>
              </Link>}
=======
              <Button _hover={{ backgroundColor: "#c4b04e" }} variant="ghost">
                Features
              </Button>
              <Button _hover={{ backgroundColor: "#c4b04e" }} variant="ghost">
                Pricing
              </Button>
              <Button _hover={{ backgroundColor: "#c4b04e" }} variant="ghost">
                Blog
              </Button>
              <Button _hover={{ backgroundColor: "#c4b04e" }} variant="ghost">
                Company
              </Button>
              {isloggedin ? (
                <Button
                  _hover={{ backgroundColor: "red.200" }}
                  onClick={onOpen}
                  variant="ghost"
                >
                  Log out
                </Button>
              ) : (
                <Link to="/login">
                  <Button
                    _hover={{ backgroundColor: "green.200" }}
                    variant="ghost"
                  >
                    Sign in
                  </Button>
                </Link>
              )}
>>>>>>> b089578f87061417c3ffbe52692e1cbaff103ac7
            </HStack>

            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{ color: "inherit" }}
                variant="ghost"
                onClick={mobileNav.onOpen}
              />

              <VStack
                zIndex={"2"}
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />
                <AiOutlineMenu />
                <Button w="full" variant="ghost">
                  Features
                </Button>
                <Button w="full" variant="ghost">
                  Pricing
                </Button>
                <Button w="full" variant="ghost">
                  Blog
                </Button>
                <Button w="full" variant="ghost">
                  Company
                </Button>

                <Button w="full" variant="ghost">
                  Log in
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}
