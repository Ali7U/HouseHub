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
import Nav from "./Nav";

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



  const [ isOpen, onToggle ] = React.useState<any>();



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
      Floors: 1,
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

    <Nav/>
      <Center m={35}>
        <Stack direction="row" spacing={8} align="center">
          <Button

            variant="outline"
            onClick={() => {AreaButtons(200); onToggle(true)}}

            colorScheme='blue'
            // variant="outline" 
            h={61}
            fontSize={21}
          >
            200m<sup>2</sup>
          </Button>
          <Button


            onClick={() => {AreaButtons(300); onToggle(true)}}
            colorScheme='blue'
            variant="outline"
            h={61}
            fontSize={21}
          >
            300m<sup>2</sup>
          </Button>
          <Button

          
            onClick={() => {AreaButtons(400); onToggle(true)}}
            colorScheme='blue'
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

       
        backgroundSize={"cover"}
        display="flex"
        justifyContent={"space-around"}
        alignItems={"center"}
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
                  backgroundColor={"#FFFDF1"}
                  h="300px"
                >
                  <Image src={item.imageUrl} alt={item.imageAlt} transition={''}/>

                </Box>
                    <Box>
                    <Stack direction="row" paddingTop={5} paddingLeft={120}>
                      <Button backgroundColor={'#e6d894'} onClick={()=>{}}>Select</Button>
                    </Stack></Box>
        </Collapse>
          </Container>

        ))}
      </Center>
      
    </>
  );
}

export default Main;