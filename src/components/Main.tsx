
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
import { useNavigate } from "react-router-dom";
import Details from "./Details";





console.log(null || "string");

function Main() {
  const navigate = useNavigate();
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
    Kitchen: any;
    Pool: any;
    Garden: any;
    
  }
  const property: houses[] = [
    {
      imageUrl:
        "https://media.istockphoto.com/id/864458934/photo/architects-engineer-discussing-at-the-table-with-blueprint-closeup-on-hands-and-project-print.jpg?s=612x612&w=0&k=20&c=-ODOOfKY-vxwhyjx7RggEvW3YzWrinoELglqZAbjzIs=",
      imageAlt: "Rear view of modern home with pool",
      Area: 500,
      Rooms: 5,
      Floors: 1,
      Kitchen: 2,
      Pool: 1,
      Garden: 1,
    },
    {
      imageUrl:
        "https://media.istockphoto.com/id/864458934/photo/architects-engineer-discussing-at-the-table-with-blueprint-closeup-on-hands-and-project-print.jpg?s=612x612&w=0&k=20&c=-ODOOfKY-vxwhyjx7RggEvW3YzWrinoELglqZAbjzIs=",
      imageAlt: "Rear view of modern home with pool",
      Area: 400,
      Rooms: 4,
      Floors: 1,
      Kitchen: 2,
      Pool: "none",
      Garden: 1,
    },
    {
      imageUrl:
        "https://media.istockphoto.com/id/864458934/photo/architects-engineer-discussing-at-the-table-with-blueprint-closeup-on-hands-and-project-print.jpg?s=612x612&w=0&k=20&c=-ODOOfKY-vxwhyjx7RggEvW3YzWrinoELglqZAbjzIs=",
      imageAlt: "Rear view of modern home with pool",
      Area: 500,
      Rooms: 8,
      Floors: 2,
      Kitchen: 2,
      Pool: 1,
      Garden: "none",
    },
    {
      imageUrl:
        "https://media.istockphoto.com/id/864458934/photo/architects-engineer-discussing-at-the-table-with-blueprint-closeup-on-hands-and-project-print.jpg?s=612x612&w=0&k=20&c=-ODOOfKY-vxwhyjx7RggEvW3YzWrinoELglqZAbjzIs=",
      imageAlt: "Rear view of modern home with pool",
      Area: 200,
      Rooms: 7,
      Floors: 2,
      Kitchen: 1,
      Pool: "none",
      Garden: "none",
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
    {
      imageUrl:
      "src/assets/Four/First1.png",
      imageAlt: "Rear view of modern home with pool",
      Area: 500,
      Rooms: 1,
      Floors: 2,
      Kitchen: 2,
      Pool: 1,
      Garden: 1,
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
        backgroundSize={"cover"}
        display="flex"
        gridTemplateColumns={'repeat, 1fr'}
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

                    <Box display="flex" mt="2" alignItems="center">
                      {Array(5)
                        .fill("")
                        .map((_, i) => (
                          <StarIcon
                          key={i}
                          // color={i < item.rating ? "teal.500" : "gray.300"}
                          />
                          ))}
                      <Box as="span" ml="2" color="gray.600" fontSize="sm">
                        {/* {item.reviewCount} reviews */}
                      </Box>
                    </Box>
                  </Box>
                </Box>
                    <Box>
                    <Stack direction="row" paddingTop={5} paddingLeft={120}>
                      <Button backgroundColor={'#e6d894'} onClick={()=>{localStorage.setItem("DetailsImage", item.imageUrl);  navigate('/Details')}}>Select</Button>
                    </Stack></Box>
        </Collapse>
          </Container>

        ))}
      </Center>
      
    </>
  );
}

export default Main;