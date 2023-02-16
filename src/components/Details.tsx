import { Box, SimpleGrid,Stat, StatLabel, StatNumber, useColorModeValue, chakra,  Flex, Text, Image, Grid, Heading, ListItem, UnorderedList, GridItem, Button } from '@chakra-ui/react'
import React from 'react'
import { ReactNode } from 'react';
import { FiServer } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { FaBed, FaLayerGroup } from "react-icons/fa";
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Nav from "./Nav";
const images = [
  {
    id: 1,
    src: "https://o.remove.bg/downloads/5b64245a-b959-4489-8db0-b6d006667774/4-Bedroom-3D-House-Plans-removebg-preview-removebg-preview.png",
    alt: "Image 1"
  },
  {
    id: 2,
    src: "https://o.remove.bg/downloads/5b64245a-b959-4489-8db0-b6d006667774/4-Bedroom-3D-House-Plans-removebg-preview-removebg-preview.png",
    alt: "Image 2"
  },
];

const image:any = localStorage.getItem("DetailsImage")
const MotionSimpleGrid = motion(SimpleGrid);

const stats = [
  {
    title: 'Floor',
    stat: '2',
    icon: <FaLayerGroup size={'3em'} />,
  },
  {
    title: 'Bedrooms',
    stat: '6',
    icon: <FaBed size={'3em'} />,
  },
  {
    title: 'Location',
    stat: 'Riyadh, SA',
    icon: <GoLocation size={'3em'} />,
  },
];



interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      _hover={{
        background: "white",
        color: "teal.500",
      }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={'medium'} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={'auto'}
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent={'center'}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}



function Details() {
  const [image, setImage] = React.useState<any|null>( localStorage.getItem("DetailsImage") )
  return (
    <>
    <Box bgColor={"#eee"} h={"100vh"}>
    <Box maxW="7xl" mx={'auto'} pt={0} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1 
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}>
        Your building is expanding, our ideas too.
      </chakra.h1>
      <MotionSimpleGrid 
      columns={{ base: 1, md: 3 }}
      spacing={{ base: 5, lg: 8 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      {stats.map((stat, index) => (
        <StatsCard
          key={index}
          title={stat.title}
          stat={stat.stat}
          icon={stat.icon}
        />
      ))}
    </MotionSimpleGrid>
    </Box>


   <Box width={"100%"} height={"100vh"} bgColor={"#eee"} pt={10}> 

<Flex 
      bg="#eee"
      _dark={{ bg: "#3e3e3e" }}
      p={5}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg="none"
        _dark={{ bg: "gray.800" }}
        mx={{ lg: 8 }}
        display={{ lg: "flex" }}
        // maxW={{ lg: "5xl" }}
        w={"90vw"}
        shadow={{ lg: "lg" }}
        rounded={{ lg: "lg" }}
      >

<Box py={12} px={6} maxW={"200vw"} w={"80vw"}>
          <UnorderedList listStyleType={"none"} > 
            <ListItem fontSize={"32px"} >Exterior 
              <UnorderedList pt={5} fontSize={"16px"} listStyleType={"-"} spacing={3}> 
            <ListItem listStyleType={"none"}>Traditional architectural style with brick and siding exterior</ListItem>
            <ListItem listStyleType={"none"}>A large front porch with space for seating and outdoor entertaining</ListItem>
            <ListItem listStyleType={"none"}>A well-manicured front lawn with a garden and landscaping</ListItem>
            <ListItem listStyleType={"none"}>A backyard with a patio area, space for gardening, and a fenced-in yard for privacy and security</ListItem>
            </UnorderedList>
            </ListItem>
            <ListItem fontSize={"32px"} pt={7}>Interior 
              <UnorderedList pt={5} fontSize={"16px"} listStyleType={"-"} spacing={3}> 
            <ListItem listStyleType={"none"}>A spacious living room with large windows that allow for plenty of natural light</ListItem>
            <ListItem listStyleType={"none"}>A dining room adjacent to the living room and kitchen, perfect for entertaining guests</ListItem>
            <ListItem listStyleType={"none"}>A modern kitchen with a large island, ample cabinet and countertop space, stainless steel appliances, and a walk-in pantry</ListItem>
            <ListItem listStyleType={"none"}>A master bedroom with an en suite bathroom and a walk-in closet</ListItem>
            </UnorderedList>
            </ListItem>
          </UnorderedList>

        </Box>
        <Box w={{ lg: "100%" }} h={"80vh"}>
          <Box
            h={{ base: 64, lg: "full" }}
            rounded={{ lg: "lg" }}
            bgSize="cover"
            bgImage={image}
          ></Box>
        </Box>
        
      </Box>
    </Flex>
    
<Flex 
      bg="#eee"
      _dark={{ bg: "#3e3e3e" }}
      p={5}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
    
    <Grid templateColumns='repeat(3, 1fr)' justifyContent={"center"} alignItems={"center"} w={"90vw"} gap={6} pt={10}>
    
    <Image id='1' src='https://tech-lagoon.com/imagechef/image-to-edge/ce27be26-4e6d-4b6a-be3f-790ff4b83fe1?1676456442549?n=3561' alt='Blue print' />
    <Image id='1' src='https://i.imgur.com/YMZEiR4.jpg' alt='Blue print' />
    <Image id='2' src='https://o.remove.bg/downloads/c2afffa4-8732-436a-830f-2ed7eee0658c/4-Bedroom-3D-House-Plans-removebg-preview-removebg-preview.png' alt='3d' />
</Grid>
</Flex>
<Flex bgColor={"#eee"} right={0} p={5} justifyContent={"center"} >
  <Link to={'/OrderDetails'}>
  <Button mb={20} colorScheme="#6096B4" bgColor={'#6096B4'} size="lg" shadow={'xl'}>
    Place Order
  </Button>
  </Link>
</Flex> 
   </Box>
   </Box>
   </>
  )
}

export default Details
