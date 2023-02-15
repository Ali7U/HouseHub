import React, { useEffect } from 'react'
import Nav from './Nav';

function Profile() {


  useEffect (  () => {
     fetch(`https://63e20921ad0093bf29c66077.mockapi.io/Signup?username=${localStorage.getItem("userName")}`, {
      method: 'GET',
      headers: {'content-type':'application/json'},
    }).then(res => {
      if (res.ok) {
          return res.json();
      }
     
    }).then(tasks => {
  console.log(tasks) 
   })
  }, [])
  


  return (
    <div><Nav/><p></p></div>
  )
}

export default Profile