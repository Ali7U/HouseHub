import { Box } from '@chakra-ui/react'
import React from 'react'

function Model() {
  return (
    <div>
        <Box width={"100%"} height={"80vh"}>
            <Box width={"20vw"} height={"20vh"} bgColor={"#eee"}  textAlign={"center"}>Kitchen</Box>
            <Box ml={400} width={"20vw"} height={"20vh"} bgColor={"#eee"}  textAlign={"center"}>Bedroom</Box>


        </Box>
      
    </div>
  )
}

export default Model
