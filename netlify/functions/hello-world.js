import { Handler } from "@netlify/functions";

export const handler = async() =>{
  return {
    statusCode: 200,
    body: 'Hello Shaul JS'
  }
}