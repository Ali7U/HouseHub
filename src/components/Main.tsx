import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Button,
  Stack,
  Image,
  Badge,
  Flex,
  Select,
  Text,
  Container,
  useDisclosure,
  Collapse,
} from "@chakra-ui/react";
import React from "react";

console.log(null || "string");

function Main() {
  const [filterRooms, setFilterRooms] = React.useState<any | null>(null);
  const [filterFloors, setFilterFloors] = React.useState<any | null>(null);
  const [filterArea, setFilterArea] = React.useState<any | null>(null);

  const AreaButtons = (area: number) => setFilterArea(area);
  const handleFilterRoomsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterRooms(e.target.value ? parseInt(e.target.value) : null);
  };
  const handleFilterRoomsChange2 = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilterFloors(e.target.value ? parseInt(e.target.value) : null);
  };
  const handleFilterRoomsChange3 = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilterArea(e.target.value ? parseInt(e.target.value) : null);
  };

  const [isOpen, onToggle] = React.useState<any>();

  interface houses {
    imageUrl: string;
    imageAlt: string;
    Area: number;
    Floors: any;
    Rooms: any;
    
  }
  const property: houses[] = [
    {
      imageUrl:
      "https://cdn.discordapp.com/attachments/1074592773518405694/1075093777213046954/1.png",
      imageAlt: "Rear view of modern home with pool",
      Area: 500,
      Rooms: 1,
      Floors: 1,
    },
    {
      imageUrl:
      "https://i.top4top.io/p_26012fu111.jpg",
      imageAlt: "Rear view of modern home with pool",
      Area: 500,
      Rooms: 1,
      Floors: 1,
    },
    {
      imageUrl:
      "https://media.discordapp.net/attachments/1074592773518405694/1075093776206405723/3rd_1.png?width=1020&height=1020",
      imageAlt: "Rear view of modern home with pool",
      Area: 500,
      Rooms: 1,
      Floors: 1,
    },
    {
      imageUrl:
      "https://media.discordapp.net/attachments/1074592773518405694/1075093776726491166/2nd_1.png?width=1020&height=1020",
      imageAlt: "Rear view of modern home with pool",
      Area: 500,
      Rooms: 1,

      Floors: 2,
    },
    {
      imageUrl:
        "https://media.istockphoto.com/id/864458934/photo/architects-engineer-discussing-at-the-table-with-blueprint-closeup-on-hands-and-project-print.jpg?s=612x612&w=0&k=20&c=-ODOOfKY-vxwhyjx7RggEvW3YzWrinoELglqZAbjzIs=",
      imageAlt: "Rear view of modern home with pool",
     

      Area: 200,
      Rooms: 1,
      Floors: 2,
    },
// --------------------500---------------
{
  imageUrl:
  "https://i.top4top.io/p_26012fu111.jpg",
  imageAlt: "Rear view of modern home with pool",
  Area: 400,
  Rooms: 1,
  Floors: 1,
},
{
  imageUrl:
  "https://cdn.discordapp.com/attachments/1074592773518405694/1075093777213046954/1.png",
  imageAlt: "Rear view of modern home with pool",
  Area: 400,
  Rooms: 1,
  Floors: 1,
},
{
  imageUrl:
  "https://media.discordapp.net/attachments/1074592773518405694/1075093776726491166/2nd_1.png?width=1020&height=1020",

  imageAlt: "Rear view of modern home with pool",
  Area: 400,
  Rooms: 1,
  Floors: 1,
},
{
  imageUrl:
  "https://media.discordapp.net/attachments/1074592773518405694/1075093776206405723/3rd_1.png?width=1020&height=1020",

  imageAlt: "Rear view of modern home with pool",
  Area: 400,
  Rooms: 1,
  Floors: 1,
},
// -----------------400
{
  imageUrl:
  "https://media.discordapp.net/attachments/1074592773518405694/1075093776206405723/3rd_1.png?width=1020&height=1020",

  imageAlt: "Rear view of modern home with pool",
  Area: 300,
  Rooms: 1,
  Floors: 1,
},
{
  imageUrl:
  "https://media.discordapp.net/attachments/1074592773518405694/1075093776726491166/2nd_1.png?width=1020&height=1020",

  imageAlt: "Rear view of modern home with pool",
  Area: 300,
  Rooms: 1,
  Floors: 1,
},
{
  imageUrl:
  "https://i.top4top.io/p_26012fu111.jpg",


  imageAlt: "Rear view of modern home with pool",
  Area: 300,
  Rooms: 1,
  Floors: 1,
},
{
  imageUrl:
  "https://cdn.discordapp.com/attachments/1074592773518405694/1075093777213046954/1.png",

  imageAlt: "Rear view of modern home with pool",
  Area: 300,
  Rooms: 1,
  Floors: 1,
},
// -------------300
{
  imageUrl:  "https://media.discordapp.net/attachments/1074592773518405694/1075093776726491166/2nd_1.png?width=1020&height=1020",


  imageAlt: "Rear view of modern home with pool",
  Area: 200,
  Rooms: 1,
  Floors: 1,
},
{
  imageUrl:
  "https://media.discordapp.net/attachments/1074592773518405694/1075093776206405723/3rd_1.png?width=1020&height=1020",


  imageAlt: "Rear view of modern home with pool",
  Area: 200,
  Rooms: 1,
  Floors: 1,
},
{
  imageUrl:
  "https://cdn.discordapp.com/attachments/1074592773518405694/1075093777213046954/1.png",

  imageAlt: "Rear view of modern home with pool",
  Area: 200,
  Rooms: 1,
  Floors: 1,
},
{
  imageUrl:
  "https://i.top4top.io/p_26012fu111.jpg",

  imageAlt: "Rear view of modern home with pool",
  Area: 200,
  Rooms: 1,
  Floors: 1,
},
// ----------------200

    
  ];

  return (
    <>

      <Center m={35}>
        <Stack direction="row" spacing={8} align="center"  >
          
          <Button

<<<<<<< HEAD

            onClick={() => {AreaButtons(200); onToggle(true)}}

            colorScheme='blue'
            variant="outline"
            h={61}
            fontSize={21}
          >
=======
onClick={() => {AreaButtons(200); onToggle(true)}}

colorScheme="teal"
variant="outline"
>
>>>>>>> Ali-branch
            200m<sup>2</sup>
          </Button>
          <Button

<<<<<<< HEAD

            onClick={() => {AreaButtons(300); onToggle(true)}}
            colorScheme='blue'
=======
onClick={() => {AreaButtons(300); onToggle(true)}}
colorScheme="teal"
>>>>>>> Ali-branch
            variant="outline"
            h={61}
            fontSize={21}
          >
            300m<sup>2</sup>
          </Button>
          <Button

<<<<<<< HEAD
          
            onClick={() => {AreaButtons(400); onToggle(true)}}
            colorScheme='blue'
=======
onClick={() => {AreaButtons(400); onToggle(true)}}
            colorScheme="teal"
>>>>>>> Ali-branch
            variant="outline"
            h={61}
            fontSize={21}
          >
            400m<sup>2</sup>
          </Button>
          <Button


            onClick={() => {AreaButtons(500); onToggle(true)}}
            colorScheme='blue'
            variant="outline"
            h={61}
            fontSize={21}
          >
            500m<sup>2</sup>
          </Button>
        </Stack>
      </Center>

      <Center
        // height={850}
        // mb={35}
<<<<<<< HEAD
       
=======
        // backgroundImage={
          //   "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGVuZ2luZWVyaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60"
        // }
>>>>>>> Ali-branch
        backgroundSize={"cover"}
        display="flex"
        justifyContent={"space-around"}
        alignItems={"center"}
        // padding={45}
        w={"100%"}
        
      >

        {property.filter(item=>item.Area==filterArea).map((item) => (

          <Container>
            <Collapse in={isOpen} animateOpacity>
                <Box
                  maxW="400px"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
<<<<<<< HEAD
                  backgroundColor={"#FFFDF1"}
                  h="300px"
                >
                  <Image src={item.imageUrl} alt={item.imageAlt} transition={''}/>

=======
                  backgroundColor={"#ccc8"}
                  >
                  <Image src={item.imageUrl} alt={item.imageAlt} />

                  <Box p="6">
                    <Box display="flex" alignItems="baseline">
                      <Badge borderRadius="full" px="2" colorScheme="teal">
                        New
                      </Badge>
                      <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                        >
                        {item.beds} beds &bull; {item.baths} baths
                      </Box>
                    </Box>

                    <Box
                      mt="1"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      noOfLines={1}
                      >
                      {item.title}
                    </Box>

                    <Box>
                      {item.formattedPrice}
                      <Box as="span" color="gray.600" fontSize="sm">
                        / wk
                      </Box>
                    </Box>

                    <Box display="flex" mt="2" alignItems="center">
                      {Array(5)
                        .fill("")
                        .map((_, i) => (
                          <StarIcon
                          key={i}
                          color={i < item.rating ? "teal.500" : "gray.300"}
                          />
                          ))}
                      <Box as="span" ml="2" color="gray.600" fontSize="sm">
                        {item.reviewCount} reviews
                      </Box>
                    </Box>
                  </Box>
>>>>>>> Ali-branch
                </Box>

                    <Box>
                    <Stack direction="row" paddingTop={5} paddingLeft={120}>
                      <Button backgroundColor={'#e6d894'} onClick={()=>{}}>select</Button>
                    </Stack></Box>
        </Collapse>
          </Container>

))}
      </Center>
<<<<<<< HEAD
      
=======

>>>>>>> Ali-branch
    </>
  );
}

export default Main;
