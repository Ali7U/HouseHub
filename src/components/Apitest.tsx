import React from 'react'
import { Configuration, OpenAIApi } from "openai";



function Apitest() {
  
  const [img, setimg] = React.useState<any>();

  
  let image_url:string|undefined;

const apiKey = "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";
const configuration = new Configuration({
  apiKey: apiKey
});

const openai = new OpenAIApi(configuration);
openai.createImage({   
  prompt: "500 METERS SQUARED HOUSE 2 ROOMS 2 FLOORS REAL PICTURE",
n: 1,
size: "1024x1024", }).then((response) => {
   image_url = response.data.data[0].url;
  console.log(image_url);
}).catch((error) => {
  console.error(error);
});
      
  return (
    <div>
      <img src={img+".png"}/>
    </div>
  )
}

export default Apitest
