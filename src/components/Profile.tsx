import React, { useEffect } from 'react'
import Nav from './Nav';
import { Heading } from '@chakra-ui/react';

function Profile() {
  const [username, setusername] = React.useState<any>();
  const [email, setEmail] = React.useState<any>();
  const [images, setImages] = React.useState<string[]>([]);

  const data:any = []

  useEffect (  () => {
     fetch(`https://63e208d4ad0093bf29c65b2d.mockapi.io/Users/${localStorage.getItem("id")}/Data`, {
      method: 'GET',
      headers: {'content-type':'application/json'},
    }).then(res => {
      if (res.ok) {
          return res.json();
      }
     
    }).then(res => {
      console.log(res)

      setusername(localStorage.getItem("userName"));
      setImages(res[res.length-1].images);
        console.log(images)
       console.log(res)
   })
  }, [])
  


  return (
    <div><Nav/> <p>
      
      <Heading> Username: {username}</Heading>

      <img style={{height:"200px"}}src={images[0]}></img>
      </p></div>
  )
}

export default Profile