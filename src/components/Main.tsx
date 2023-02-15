
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
import { repeat } from "lodash";
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
        "https://media.istockphoto.com/id/864458934/photo/architects-engineer-discussing-at-the-table-with-blueprint-closeup-on-hands-and-project-print.jpg?s=612x612&w=0&k=20&c=-ODOOfKY-vxwhyjx7RggEvW3YzWrinoELglqZAbjzIs=",
      imageAlt: "Rear view of modern home with pool",
      Area: 500,
      Rooms: 1,
      Floors: 1,
    },
    {
      imageUrl:
        "https://media.istockphoto.com/id/864458934/photo/architects-engineer-discussing-at-the-table-with-blueprint-closeup-on-hands-and-project-print.jpg?s=612x612&w=0&k=20&c=-ODOOfKY-vxwhyjx7RggEvW3YzWrinoELglqZAbjzIs=",
      imageAlt: "Rear view of modern home with pool",
      Area: 500,
      Rooms: 1,
      Floors: 1,
    },
    {
      imageUrl:
        "https://media.istockphoto.com/id/864458934/photo/architects-engineer-discussing-at-the-table-with-blueprint-closeup-on-hands-and-project-print.jpg?s=612x612&w=0&k=20&c=-ODOOfKY-vxwhyjx7RggEvW3YzWrinoELglqZAbjzIs=",
      imageAlt: "Rear view of modern home with pool",
      Area: 500,
      Rooms: 1,
      Floors: 1,
    },
    {
      imageUrl:
        "https://media.istockphoto.com/id/864458934/photo/architects-engineer-discussing-at-the-table-with-blueprint-closeup-on-hands-and-project-print.jpg?s=612x612&w=0&k=20&c=-ODOOfKY-vxwhyjx7RggEvW3YzWrinoELglqZAbjzIs=",
      imageAlt: "Rear view of modern home with pool",
      Area: 500,
      Rooms: 1,

      Floors: 2,
    },
    {
      imageUrl:
      "src/assets/Four/First1.png",
      imageAlt: "Rear view of modern home with pool",
     

      Area: 200,
      Rooms: 1,
      Floors: 2,
    },
        {
      imageUrl:
        "https://media.istockphoto.com/id/864458934/photo/architects-engineer-discussing-at-the-table-with-blueprint-closeup-on-hands-and-project-print.jpg?s=612x612&w=0&k=20&c=-ODOOfKY-vxwhyjx7RggEvW3YzWrinoELglqZAbjzIs=",
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Modern home in city center in the heart of historic Los Angeles",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
      Area: 200,
      Rooms: 1,
      Floors: 2,
    },
    
  ];

  return (
    <>
      <Center m={35}>
        <Stack direction="row" spacing={8} align="center"  >
          
          <Button


            onClick={() => {AreaButtons(200); onToggle(true)}}

            colorScheme='blue'
            variant="outline"
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
        // height={850}
        // mb={35}
        backgroundImage={
          "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGVuZ2luZWVyaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60"
        }
        backgroundSize={"cover"}
        display="flex"
        gridTemplateColumns={'repeat, 1fr'}
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
                  backgroundColor={"#FFFDF1"}
                  h="300px"
                >
                  <Image src={item.imageUrl} alt={item.imageAlt} transition={''}/>

                </Box>

                    <Box>
                    <Stack direction="row" paddingTop={5} paddingLeft={120}>
                      <Button backgroundColor={'#e6d894'} onClick={()=>{}}>select</Button>
                    </Stack></Box>
        </Collapse>
          </Container>

        ))}
      </Center>
      
    </>
  );
}

export default Main;
