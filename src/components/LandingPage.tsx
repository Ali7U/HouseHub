import React from 'react'
import {Container, defineStyle,Image, ChakraProvider,Heading, Box,   Button,
    ButtonGroup,
    Divider,
    IconButton,
    Input,
    Stack,
    Text} from '@chakra-ui/react'
import "./LandingPage.css"
import Footer from './Footer'
import { background } from '@chakra-ui/styled-system'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import { useNavigate, useNavigation } from 'react-router-dom'
const colors = [ "https://static.wixstatic.com/media/9f7b6e_584af36f32484e38a9da4f060fa45902~mv2.jpg/v1/fill/w_2500,h_1389,al_c/9f7b6e_584af36f32484e38a9da4f060fa45902~mv2.jpg"];
const delay = 4500;
function LandingPage()  {const Nagivate = useNavigate();function Footer1() {
    const [index, setIndex] = React.useState(0);
  
    React.useEffect(() => {
      setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === colors.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
  
      return () => {};
    }, [index]);
  
    return (
      <Box className="slideshow">
        <Box
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {colors.map((backgroundColor, index) => (
            <Box
              className="slide"
              
            ><Image  src={backgroundColor}></Image> </Box>
          ))}
        </Box>
  
       
      </Box>
    );
  }
    
    return(

    <div  className="img1"><header className="header"> </header>            
    <Image position="absolute" top="10" left="10" height="40px" src = "src\image-removebg-preview.png"/>

    
    <Container  ml="50%" padding = "20px"mr ="55vw" _hover={{ border: "white 1px solid"}} bg="rgb(0,0,0,45%)" boxShadow="dark-lg"alignItems={"flex-end"} display="flex" className="test"   >         
  <Box mb="80%" ><Image  src="src\image-removebg-preview.png"   position="absolute" width={"25vw"} ></Image> </Box>
    <Button mb="10%"  boxShadow="dark-lg" width={"12vw"} fontSize="2xl"  height="60px"bg="#ceae7f" _hover={{  color: "lightgreen", border: "lightgreen solid 2px", backgroundColor: "#85583f"}} color= "black" size={'lg'} > Browse Listings </Button> 
    
    <Button onClick={()=>Nagivate("./log")} mb="10%"  boxShadow="dark-lg" width={"12vw"} fontSize="2xl"  height="6.5vh"  size={"lg"} ml="30px " _hover={{color: "lightgreen",border: "lightgreen solid 2px", backgroundColor: "#85583f"}} color="black" bg="#ceae7f" > Create a Listing </Button>


    </Container>
    {Footer1()}
     
      
        <Button  border="white 1px solid" onClick={()=>Nagivate("./log")} boxShadow="dark-lg" _hover={{color: "lightgreen",border: "lightgreen solid 2px",}}  position={'absolute'} top="25" right="4%" colorScheme={"blackAlpha"} size={"md"}>Log In</Button>
</div>
  
        
    
    )


  
}

export default LandingPage