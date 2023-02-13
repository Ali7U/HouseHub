import { StarIcon } from "@chakra-ui/icons";
import { Box, Center, Button, Stack, Image, Badge, Flex, Select, Text} from "@chakra-ui/react";
import React from "react";

function Main() {
  const [filterRooms, setFilterRooms] = React.useState<any | null>(null);
  const [filterFloors, setFilterFloors] = React.useState<any | null>(null);
  const [filterArea, setFilterArea] = React.useState<any | null>(null);

 const AreaButtons = (area:number)=>{setFilterArea(area)}
  const handleFilterRoomsChange= (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterRooms(e.target.value ? parseInt(e.target.value) : null);
  

  };  const handleFilterRoomsChange2= (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterFloors(e.target.value ? parseInt(e.target.value) : null);
  

  };  const handleFilterRoomsChange3= (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterArea(e.target.value ? parseInt(e.target.value) : null);
  

  };
    interface houses {
      imageUrl: string,
      imageAlt: string,
      beds: number,
      baths: 2,
      title: string,
      formattedPrice: string,
      reviewCount: number,
      rating: number,
      Area: number,
      Floors: any,
      Rooms: any,
    
    }
     const property: houses[] = [
       {
         imageUrl:
           "https://media.istockphoto.com/id/864458934/photo/architects-engineer-discussing-at-the-table-with-blueprint-closeup-on-hands-and-project-print.jpg?s=612x612&w=0&k=20&c=-ODOOfKY-vxwhyjx7RggEvW3YzWrinoELglqZAbjzIs=",
         imageAlt: "Rear view of modern home with pool",
         beds: 3,
         baths: 2,
         title:
           "Modern home in city center in the heart of historic Los Angeles",
         formattedPrice: "$1,900.00",
         reviewCount: 34,
         rating: 4,
         Area: 500,
         Rooms: 1,
         Floors: 1,
         
       },{
        imageUrl:
          "https://media.istockphoto.com/id/864458934/photo/architects-engineer-discussing-at-the-table-with-blueprint-closeup-on-hands-and-project-print.jpg?s=612x612&w=0&k=20&c=-ODOOfKY-vxwhyjx7RggEvW3YzWrinoELglqZAbjzIs=",
        imageAlt: "Rear view of modern home with pool",
        beds: 3,
        baths: 2,
        title:
          "Modern home in city center in the heart of historic Los Angeles",
        formattedPrice: "$1,900.00",
        reviewCount: 34,
        rating: 4,
        Area: 400,
        Rooms: 1,
        Floors: 2,
      },{
        imageUrl:
          "https://media.istockphoto.com/id/864458934/photo/architects-engineer-discussing-at-the-table-with-blueprint-closeup-on-hands-and-project-print.jpg?s=612x612&w=0&k=20&c=-ODOOfKY-vxwhyjx7RggEvW3YzWrinoELglqZAbjzIs=",
        imageAlt: "Rear view of modern home with pool",
        beds: 3,
        baths: 2,
        title:
          "Modern home in city center in the heart of historic Los Angeles",
        formattedPrice: "$1,900.00",
        reviewCount: 34,
        rating: 4,
        Area: 400,
        Rooms: 2,
        Floors: 1,
      },{
        imageUrl:
          "https://media.istockphoto.com/id/864458934/photo/architects-engineer-discussing-at-the-table-with-blueprint-closeup-on-hands-and-project-print.jpg?s=612x612&w=0&k=20&c=-ODOOfKY-vxwhyjx7RggEvW3YzWrinoELglqZAbjzIs=",
        imageAlt: "Rear view of modern home with pool",
        beds: 3,
        baths: 2,
        title:
          "Modern home in city center in the heart of historic Los Angeles",
        formattedPrice: "$1,900.00",
        reviewCount: 34,
        rating: 4,
        Area: 200,
        Rooms: 1,
        Floors: 2,
      }
      
     ];
  return (
    <>
     <Center m={35}>
        <Stack direction="row" spacing={4} align="center">
          <Button onClick={()=>AreaButtons(200)} colorScheme="teal" variant="outline">
            200m<span>2</span>
          </Button>
          <Button   onClick={()=>AreaButtons(300)} colorScheme="teal" variant="outline">
            300m<span>2</span>
          </Button>
          <Button   onClick={()=>AreaButtons(400)} colorScheme="teal" variant="outline">
            400m<span>2</span>
          </Button>
          <Button  onClick={()=>AreaButtons(500)} colorScheme="teal" variant="outline">
            500m<span>2</span>
          </Button>
         
        </Stack>
      </Center>
  
    

      
      <Center
        mb={35}
        backgroundImage={
          "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGVuZ2luZWVyaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60"
        }
        display="flex"
        // justifyContent
        alignItems={"center"}
        padding={35}
        w={"100%"}
      >


        {property.map((item) => (
      <Box>
        
          { item.Area==filterArea  ?    <Box
            maxW="sm"
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
          </Box> : null }

      
          </Box>
        ))}
      </Center>
    </>
  );
}

export default Main;
