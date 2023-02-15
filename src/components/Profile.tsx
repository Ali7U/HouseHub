import React, { useEffect } from 'react'
import Nav from './Nav';

function Profile() {
  const [username, setusername] = React.useState<any>();
  const [email, setEmail] = React.useState<any>();
  const [images, setImages] = React.useState<string[]>([]);



  useEffect (  () => {
     fetch(`https://63e20921ad0093bf29c66077.mockapi.io/Signup?username=${localStorage.getItem("userName")}`, {
      method: 'GET',
      headers: {'content-type':'application/json'},
    }).then(res => {
      if (res.ok) {
          return res.json();
      }
     
    }).then(res => {
      setEmail(res[0].email)
      setusername(res[0].username);
      setImages(res[res.length-1].images);
        console.log(images)
       console.log(res)
   })
  }, [])
  


  return (
    <div><Nav/> <p>
      
      {username}

      <img style={{height:"200px"}}src={images[0]}></img>
      </p></div>
  )
}

export default Profile