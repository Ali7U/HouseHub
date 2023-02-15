import React from 'react'
import { Configuration, OpenAIApi } from "openai";
import {Image, Text, Badge, Box, Button, chakra, Flex, Input, InputGroup, InputRightElement, SimpleGrid, VisuallyHidden, Container, Spinner, CircularProgress, Heading } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Profile from './Profile';
import axios from 'axios';
import Nav from './Nav';
import './LandingPage.css'



function Apitest() {
  
  
  const [img, setimg] = React.useState<any>([]);
  const [promptinput, setprompt] = React.useState<any>();
  
  const apiKey = "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  ";
const configuration = new Configuration({
  apiKey: apiKey
});

const openai = new OpenAIApi(configuration);
 
const data:any = [img[0], img[1], img[2], promptinput]
async function save(){

  console.log(data)

  await fetch(`https://63e208d4ad0093bf29c65b2d.mockapi.io/Users/${localStorage.getItem("id")}/Data`, {
    method: 'POST', 
    headers: {'content-type':'application/json'},
    body: JSON.stringify({images: data})
  })


}

async function generate(){
  setimg([null,null,null])
 
  
  console.log(promptinput);
  await openai.createImage({   
  prompt:promptinput,
  n: 3,
  size: "512x512", }).then((response) => {
  console.log(response)
  setimg([response.data.data[0].url, response.data.data[1].url,response.data.data[2].url])
  localStorage.setItem("images", JSON.stringify(img))
  localStorage.setItem("prompt", promptinput)


}).catch((error) => {
  console.error(error);
});
}
      
  return (
    <> <Nav/>
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
          placeholder="Describe the house of your dreams"
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
            Next
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
    </chakra.p>
  </Flex>
  <Container>

  {img[0] == null ?       
      <CircularProgress isIndeterminate size="400px" color='#2F4858' />
  :            
  
          <> 
 <Carousel  >
        <div>
     
        <img src={img[0]} /> 
            <p className="legend"></p>
        </div>
        <div>
         <img src={img[0]} />
            <p className="legend"></p>
        </div>
        <div>
       <img src={img[0]} />

            <p className="legend"></p>
        </div>
    </Carousel><Button ml = "50%" color="white" bg ="red.700" onClick={save}>Save</Button></>  }
  </Container>
</SimpleGrid>;
    </>
  )
}

export default Apitest


