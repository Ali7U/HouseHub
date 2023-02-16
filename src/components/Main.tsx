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
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";

console.log(null || "string");

function Main() {
  const navigate = useNavigate()
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
  "https://cdn.discordapp.com/attachments/1074592773518405694/1075687407929794590/Abdullah_Alomari_modern_luxury_house_simple_Saudi_Arabia_d58e31c0-5007-43aa-b4da-aacecb1407d9.png",
  imageAlt: "Rear view of modern home with pool",
  Area: 400,
  Rooms: 1,
  Floors: 1,
},
{
  imageUrl:
  "https://cdn.discordapp.com/attachments/1074592773518405694/1075687408252747866/Abdullah_Alomari_modern_luxury_house_simple_Saudi_Arabia_f7bb6e1f-33fb-46cd-9379-384d29e2c2a0.png",
  imageAlt: "Rear view of modern home with pool",
  Area: 400,
  Rooms: 1,
  Floors: 1,
},
{
  imageUrl:
  "https://cdn.discordapp.com/attachments/1074592773518405694/1075687408575725639/Abdullah_Alomari_modern_luxury_house_simple_Saudi_Arabia_9d08c5ae-5750-4276-af63-f7c623456fa3.png",

  imageAlt: "Rear view of modern home with pool",
  Area: 400,
  Rooms: 1,
  Floors: 1,
},
{
  imageUrl:
  "https://cdn.discordapp.com/attachments/1074592773518405694/1075687408932233246/Abdullah_Alomari_modern_luxury_house_simple_Saudi_Arabia_16055741-b763-406d-aba3-9488f70afa8c.png",

  imageAlt: "Rear view of modern home with pool",
  Area: 400,
  Rooms: 1,
  Floors: 1,
},
// -----------------400
{
  imageUrl:
  "https://cdn.discordapp.com/attachments/1074592773518405694/1075687409439735890/Abdullah_Alomari_modern_luxury_house_simple_Saudi_Arabia_e346e342-7317-4418-98e2-3639f5becdc1.png",

  imageAlt: "Rear view of modern home with pool",
  Area: 300,
  Rooms: 1,
  Floors: 1,
},
{
  imageUrl:
  "https://cdn.discordapp.com/attachments/1074592773518405694/1075687409901117461/Abdullah_Alomari_modern_luxury_house_simple_Saudi_Arabia_a03632c5-4b0c-4685-8f59-6600d052287f.png",

  imageAlt: "Rear view of modern home with pool",
  Area: 300,
  Rooms: 1,
  Floors: 1,
},
{
  imageUrl:
  "https://cdn.discordapp.com/attachments/1074592773518405694/1075687410291179520/Abdullah_Alomari_modern_luxury_house_simple_Saudi_Arabia_94f4f126-843a-4fa8-a79c-f0d99ad493e7.png",


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
                      <Button backgroundColor={'#85CDFD'} onClick={()=>{localStorage.setItem("DetailsImage", item.imageUrl);  navigate('/Details')}}>Select</Button>
                    </Stack></Box>
        </Collapse>
          </Container>

        ))}
      </Center>
      
    </>
  );
}

export default Main;