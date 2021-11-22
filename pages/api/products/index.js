import axios from 'axios';
import api from "../../../config";

export async function getProducts() {
  
  let url = api.api.baseUrl+`api/product`;

  await axios.get(url)
  .then(res => {
    //console.log(res.data) 
    return res;

  })
  .catch(error => {
      console.log(error)
  })
}

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const result = getProducts();
    res.status(200).json(result);
  }
}