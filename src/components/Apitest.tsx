import React from 'react'
import { Configuration, OpenAIApi } from "openai";



function Apitest() {
  

const apiKey = "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";
const configuration = new Configuration({
  apiKey: apiKey
});

const openai = new OpenAIApi(configuration);
openai.createImage({   
  prompt: "Blueprint for interior house 3 rooms and kitchen ",
n: 1,
size: "512x512", }).then((response) => {
  const image_url = response.data.data[0].url;

  console.log(image_url);
}).catch((error) => {
  console.error(error);
});
      
  return (
    <div>
      k
    </div>
  )
}

export default Apitest