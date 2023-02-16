import React, { useState, useEffect, useRef ,} from 'react';
import Nav from './Nav';
import {
  Button,
  Container,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure, Text, Image, Stack, Card, CardBody, CardFooter
} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';

function Profile() {
  const [username, setusername] = React.useState<any>();
  const [email, setEmail] = React.useState<any>();
  const [Images, setImages] = React.useState<string[]>([]);
  const imagesRef = useRef<string[]>([]);
  const [size, setSize] = React.useState('md');
  const [selectedGroup, setSelectedGroup] = useState<string[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    
    console.log(Images);
  }, [Images]);

  useEffect(() => {
    fetch(`https://63e208d4ad0093bf29c65b2d.mockapi.io/Users/${localStorage.getItem("id")}/Data`, {
      method: 'GET',
      headers: {'content-type':'application/json'},
    }).then(res => {
      if (res.ok) {
          return res.json();
      }
    }).then(res => {
      res.map((img: any) => {
        imagesRef.current = [...imagesRef.current, ...img.images];
        setImages(imagesRef.current);
        console.log(Images);
      });
      setImages(imagesRef.current);
      setusername(localStorage.getItem("userName"));
    })
  }, []);

  const groupedImages = [];
  for (let i = 0; i < Images.length; i += 4) {
    groupedImages.push(Images.slice(i, i + 4));
  }
  console.log(groupedImages)

  const handleButtonClick = (group: string[]) => {
    setSelectedGroup(group);
    onOpen();
  }

  return (
    <div style={{height: "100vh"}}>
      <Nav />


      










      <div style={{ height:"100%", backgroundColor: "#2F4858"}}>
      <Container      >
        <Heading  size = "3xl" color="#c4b04e" > Generated Prompts</Heading>
        {groupedImages.map((group, index) => (
          <React.Fragment  key={index}>
            <Card mt = "30px"
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={group[0]}
   
  />


  <Stack>
    <CardBody>
      <Heading size='md'>{group[3]}</Heading>

      <Text py='2'>
       
      </Text>
    </CardBody>

    <CardFooter>
    <Button
              onClick={() => handleButtonClick(group)}
              m={4} bg="#c4b04e"
            >
              Show Images
            </Button>
    </CardFooter>
  </Stack>
</Card>
            <Modal onClose={onClose} size={size} isOpen={isOpen}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>{selectedGroup[3]}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Carousel>
                    {selectedGroup.slice(0, 3).map((image, index) => (
                      <div key={index}>
                        <img src={image} />
                      </div>
                    ))}
                  </Carousel>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </React.Fragment>
        ))}
      </Container></div>
    </div>
  );
}

export default Profile;
