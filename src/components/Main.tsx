import { StarIcon } from "@chakra-ui/icons";
import { Box, Center, Button, Stack, Image, Badge} from "@chakra-ui/react";
import React from "react";

console.log(null || "string");


function Main() {
    interface houses {
      imageUrl: string,
      imageAlt: string,
      beds: number,
      baths: 2,
      title: string,
      formattedPrice: string,
      reviewCount: number,
      rating: number,
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
       },
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
       },
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
       },
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
       },
     ];
  return (
    <>
      <Center m={35}>
        <Stack direction="row" spacing={4} align="center">
          <Button w={"25%"} colorScheme="teal" variant="outline">
            200m<span>2</span>
          </Button>
          <Button w={"25%"} colorScheme="teal" variant="outline">
            300m<span>2</span>
          </Button>
          <Button w={"25%"} colorScheme="teal" variant="outline">
            400m<span>2</span>
          </Button>
          <Button w={"25%"} colorScheme="teal" variant="outline">
            500m<span>2</span>
          </Button>
          <Button w={"25%"} colorScheme="teal" variant="outline">
            other
          </Button>
        </Stack>
      </Center>
      <Center
        mb={35}
        backgroundImage={
          "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGVuZ2luZWVyaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60"
        }
        backgroundSize={"cover"}
        display="flex"
        justifyContent={"space-around"}
        alignItems={"center"}
        padding={45}
        w={"100%"}
      >
        {property.map((item) => (
          <Box
            maxW="300px"
            
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
          </Box>
        ))}
      </Center>
    </>
  );
}

export default Main;
