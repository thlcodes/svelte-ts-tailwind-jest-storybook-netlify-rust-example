import { NowRequest, NowResponse } from '@vercel/node'

export default (request: NowRequest, response: NowResponse) => {
  console.log(request.url)
  response.status(200).send(`Hello from TS!`)
}