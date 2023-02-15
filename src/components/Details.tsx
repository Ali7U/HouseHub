import { Box, SimpleGrid,Stat, StatLabel, StatNumber, useColorModeValue, chakra,  Flex, Text, Image, Grid, Heading, ListItem, UnorderedList, GridItem } from '@chakra-ui/react'
import React from 'react'
import { ReactNode } from 'react';
import { FiServer } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { FaBed, FaLayerGroup } from "react-icons/fa";
import { motion } from 'framer-motion';



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
    stat: 'Jeddah, SA',
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
  return (
    <>
    <Box bgColor={"#eee"}>
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
            <ListItem fontSize={"32px"} >First Floor 
              <UnorderedList fontSize={"16px"} listStyleType={"-"} spacing={3}> 
            <ListItem >Spacious living room with large windows</ListItem>
            <ListItem>Dining room adjacent to living room and kitchen</ListItem>
            <ListItem>Kitchen with modern amenities</ListItem>
            <ListItem>Separate bathroom for second bedroom</ListItem>
            </UnorderedList>
            </ListItem>
          </UnorderedList>

        </Box>
        <Box w={{ lg: "100%" }} h={"80vh"}>
          <Box
            h={{ base: 64, lg: "full" }}
            rounded={{ lg: "lg" }}
            bgSize="cover"
            style={{
              backgroundImage:
                "url('/src/assets/Four/First1.png')",
                backgroundRepeat: "no-repeat"
            }}
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
    
    <Grid templateColumns='repeat(3, 1fr)' justifyContent={"center"} alignItems={"center"} w={"90vw"} gap={6}>
    <Image src='https://o.remove.bg/downloads/5b64245a-b959-4489-8db0-b6d006667774/4-Bedroom-3D-House-Plans-removebg-preview-removebg-preview.png' alt='Dan Abramov' />
    <Image src='https://o.remove.bg/downloads/5b64245a-b959-4489-8db0-b6d006667774/4-Bedroom-3D-House-Plans-removebg-preview-removebg-preview.png' alt='Dan Abramov' />
    <Image src='https://o.remove.bg/downloads/5b64245a-b959-4489-8db0-b6d006667774/4-Bedroom-3D-House-Plans-removebg-preview-removebg-preview.png' alt='Dan Abramov' />
</Grid>

</Flex>
        
   </Box>
   </Box>


   </>
  )
}

export default Details
