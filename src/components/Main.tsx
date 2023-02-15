
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
      Rooms: 5,
      Floors: 1,
    },
    {
      imageUrl:
        "https://media.istockphoto.com/id/864458934/photo/architects-engineer-discussing-at-the-table-with-blueprint-closeup-on-hands-and-project-print.jpg?s=612x612&w=0&k=20&c=-ODOOfKY-vxwhyjx7RggEvW3YzWrinoELglqZAbjzIs=",
      imageAlt: "Rear view of modern home with pool",
      Area: 400,
      Rooms: 4,
      Floors: 1,
    },
    {
      imageUrl:
        "https://media.istockphoto.com/id/864458934/photo/architects-engineer-discussing-at-the-table-with-blueprint-closeup-on-hands-and-project-print.jpg?s=612x612&w=0&k=20&c=-ODOOfKY-vxwhyjx7RggEvW3YzWrinoELglqZAbjzIs=",
      imageAlt: "Rear view of modern home with pool",
      Area: 500,
      Rooms: 8,
      Floors: 2,
    },
    {
      imageUrl:
        "https://media.istockphoto.com/id/864458934/photo/architects-engineer-discussing-at-the-table-with-blueprint-closeup-on-hands-and-project-print.jpg?s=612x612&w=0&k=20&c=-ODOOfKY-vxwhyjx7RggEvW3YzWrinoELglqZAbjzIs=",
      imageAlt: "Rear view of modern home with pool",
      Area: 500,
      Rooms: 7,
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

    
  ];

  return (
    <>

      <Center m={35}>
        <Stack direction="row" spacing={8} align="center"  >
          
          <Button



            colorScheme='blue'
            variant="outline" 
            h={61}
            fontSize={21}
          >
            200m<sup>2</sup>
          </Button>
          <Button


onClick={() => {AreaButtons(300); onToggle(true)}}
colorScheme="teal"
            variant="outline"
            h={61}
            fontSize={21}
          >
            300m<sup>2</sup>
          </Button>
          <Button


onClick={() => {AreaButtons(400); onToggle(true)}}
            colorScheme="teal"
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
                        {/* {item.beds} beds &bull; {item.baths} baths */}
                      </Box>
                    </Box>

                    <Box
                      mt="1"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      noOfLines={1}
                      >
                      {/* {item.title} */}
                    </Box>

                    <Box>
                      {/* {item.formattedPrice} */}
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
                      <Button backgroundColor={'#e6d894'} onClick={()=>{localStorage.setItem("DetailsImage", item.imageUrl); navigate('/Details')}}>Select</Button>
                    </Stack></Box>
        </Collapse>
          </Container>

))}
      </Center>



    </>
  );
}

export default Main;
