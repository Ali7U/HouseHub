import React from 'react'
import { Configuration, OpenAIApi } from "openai";
import {Image, Text, Badge, Box, Button, chakra, Flex, Input, InputGroup, InputRightElement, SimpleGrid, VisuallyHidden, Container, Spinner, CircularProgress, Heading, useDisclosure, Alert, AlertDescription, AlertIcon, AlertTitle, CloseButton } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Profile from './Profile';
import axios from 'axios';
import Nav from './Nav';
import './LandingPage.css'



function Apitest() {
  
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: false })
  const [img, setimg] = React.useState<string[]|null[]>(["https://via.placeholder.com/1024","https://via.placeholder.com/1024","https://via.placeholder.com/1024","https://via.placeholder.com/1024"]);

  const [promptinput, setprompt] = React.useState<any>();
  
  const apiKey1 = "sk-AcfSyHgGJ6sm3pZkVhPyT3B";
  const apiKey2 = "lbkFJXietDzk";
  const apiKey3 = "qkzXI4OHUrPIG";
const configuration = new Configuration({
  apiKey: apiKey1+apiKey2+apiKey3
});
const openai = new OpenAIApi(configuration);
 
async function save(){
  onClose()
  console.log(img)
  await fetch(`https://63e208d4ad0093bf29c65b2d.mockapi.io/Users/${localStorage.getItem("id")}/Data`, {
    method: 'POST', 
    headers: {'content-type':'application/json'},
    body: JSON.stringify({images: img})
  })


}

async function generate(){
  
  onOpen()
  setimg([null,null,null, null])
 
  
  console.log(promptinput);
  await openai.createImage({   
  prompt:promptinput,
  n: 3,
  size: "1024x1024", }).then((response) => {
  console.log(response)
  setimg([response.data.data[0].url, response.data.data[1].url,response.data.data[2].url,promptinput])
  localStorage.setItem("images", JSON.stringify(img))
  localStorage.setItem("prompt", promptinput)


}).catch((error) => {
  console.error(error);
});
}
      
  return (
    <div style={{backgroundColor:"#2F4858", height: "100vh"}}> <Nav/>
        <SimpleGrid padding="50px"
  columns={{
    base: 1,
    md: 2,
  }}
  spacing={0}
  _after={{
    bg: "brand.500",
    opacity: 0.25,
    pos: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1,
    content: '" "', 

  }}
>
  <Flex  backgroundColor={"#c4b04e"}
  height="600px"
  mb="50px"
    direction="column"
    alignItems="start"
    justifyContent="center"
    px={{
      base: 4,
      lg: 20,
    }}
    py={24}
  >
    <Badge
      color="white"
      px={3}
      py={1}
      mb={3}
      variant="solid"
      colorScheme="brand"
      rounded="full"
    >
      <Heading size={"md"}>AI Image Generator</Heading>
    </Badge>
    <chakra.h1 
      mb={6}
      fontSize={{
        base: "4xl",
        md: "4xl",
        lg: "5xl",
      }}
      fontWeight="bold"
      color="brand.600"
      _dark={{
        color: "gray.300",
      }}
      lineHeight="shorter"
    >
      Great Ideas start here.
    </chakra.h1>
    <chakra.form w="full" mb={6}>
      <VisuallyHidden>Your Email</VisuallyHidden>
      <Box
        display={{
          base: "block",
          lg: "none",
        }}
      >
        <Input
          size="lg"
          color="brand.900"
          placeholder="Describe the house of your dreams"          bg="white"
        />
        <Button
          w="full"
          mt={2}
          color="white"
          variant="solid"
          bg="#2F4858"
          size="lg"
        >
          Get Started
        </Button>
      </Box>
      <InputGroup
        size="lg"
        w="full"
        display={{
          base: "none",
          lg: "flex",
        }}
      >
        <Input onChange={(e)=>{setprompt(e.target.value)}}
          size="lg"
          color="brand.900"
          placeholder="Create your dream home with words. What does it look like?"
          bg="white"
        />
        <InputRightElement w="auto">
          <Button onClick={()=>{generate() }}
            color="white"
            variant="solid"
            bg="#2F4858"
            size="lg"
            roundedLeft={0}
          >
            Generate
          </Button>
        </InputRightElement>
      </InputGroup>
    </chakra.form>
    <chakra.p
      pr={{
        base: 0,
        lg: 16,
      }}
      mb={4}
      fontSize="sm"
      color="brand.600"
      _dark={{
        color: "gray.400",
      }}
      letterSpacing="wider"
    >
      Be descriptive and creative with your prompt. They key to a good result is your prompt!
      <p style= {{fontSize: "20px", color: "white" , marginTop: "25px"}}>Example key words: <p style= {{fontSize: "20px", color: "darkblue" }}>minimalist design happiness peace luxurious expensive saudi-style american modern design"</p></p>

    </chakra.p>
  </Flex>
  <Container>

  {
  img[0] == null ?       
      <CircularProgress margin={"50px"} isIndeterminate size="400px" color='#2F4858' />
  :            
  
          <> 
 <Carousel  >
        <div>
        <img src={img[0]} /> 
        </div>
        <div>
         <img src={img[1]?.toString()} />
        </div>
        <div>
       <img src={img[2]?.toString()} />

        </div>
    </Carousel>
    { img[0]=="https://via.placeholder.com/1024" ? null : 

  

     isVisible  ? <Button ml = "50%" color="white" bg ="red.700" onClick={()=>{ onClose(); save();}}>Save</Button>:
    <Alert status='success'>
      <AlertIcon />
      <Box>
        <AlertTitle>Saved!</AlertTitle>
        <AlertDescription>
          Images saved to your prompts page!
        </AlertDescription>
      </Box>
    
    </Alert>
   }



    </> 
    
    
    }
  </Container>
</SimpleGrid>;
    </div>
  )
}

export default Apitest


