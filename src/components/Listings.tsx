import React from 'react';
import {Image, Box, Text, Heading, Flex, Input, Select, Button } from '@chakra-ui/react';

type Home = {
  id: number;
  image: string;
  title: string;
  rooms: number;
  price: number;
  location: string;
};

const homes: Home[] = [
  {
    id: 1,
    image: 'https://via.placeholder.com/400x300',
    title: ' Apartment',
    rooms: 2,
    price: 1500000,
    location: 'Riyadh'
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/400x300',
    title: ' House ',
    rooms: 3,
    price: 2000000,
    location: 'Riyadh'
  },    {
    id: 2,
    image: 'https://via.placeholder.com/400x300',
    title: ' House ',
    rooms: 3,
    price: 2000000,
    location: 'Riyadh'
  },  {
    id: 4,
    image: 'https://via.placeholder.com/400x300',
    title: ' House ',
    rooms: 1,
    price: 2000000,
    location: 'Riyadh'
  }, {
    id: 5,
    image: 'https://via.placeholder.com/400x300',
    title: ' House ',
    rooms: 1,
    price: 2000000,
    location: 'Riyadh'
  },
];

const Listings = () => {
  const [filterRooms, setFilterRooms] = React.useState<number | null>(null);
  const [filteredHomes, setFilteredHomes] = React.useState<Home[]>(homes);

  const handleFilterRoomsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterRooms(e.target.value ? parseInt(e.target.value) : null);
  };

  React.useEffect(() => {
    if (filterRooms === null) {
      setFilteredHomes(homes);
    } else {
      setFilteredHomes(homes.filter(home => home.rooms === filterRooms));
    }
  }, [filterRooms, homes]);

  return (
    <Box p={4}>
      <Heading as='h1' size='lg'></Heading>
      <Flex mb={4} align='center'>
        <Text mr={2}>Filter by number of rooms:</Text>
        <Select value={filterRooms || ''} onChange={handleFilterRoomsChange}>
          <option value=''>All</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
        </Select>
      </Flex><Flex mb={4} align='center'>
      <Text mr={2}>Floors</Text>
      <Select value={filterRooms || ''} onChange={handleFilterRoomsChange}>
        <option value=''>All</option>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
      </Select>
    </Flex>   <Flex mb={4} align='center'>
        <Text mr={2}>Area</Text>
        <Select value={filterRooms || ''} onChange={handleFilterRoomsChange}>
          <option value=''>All</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
        </Select>
      </Flex>
   
    </Box>
  );
};

export default Listings


/*    {filteredHomes.map(home => (
        <Box key={home.id} mb={4} p={4} bg='gray.100'>
          <Heading as='h2' size='md'>{home.title}</Heading>
          <Flex mb={4}>
            <Image src={home.image} mr={4} />
            <Box>
              <Text>Rooms: {home.rooms}</Text>
              <Text>Price: {home.price}</Text>
              <Text>Location: {home.location}</Text>
            </Box>
          </Flex>
        </Box>
      ))}  */