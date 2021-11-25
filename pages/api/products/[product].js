import axios from 'axios';
import api from "../../../config";

export async function getProductById(id) {

  //  console.log(id)
  let url = api.api.baseUrl + `api/product/${id}`;

  // console.log(url)
  await axios.get(url)
    .then(res => {
      // console.log(res.data) 
      return res.data;

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
    // console.log(req.query.product)
    const product = getProductById(req.query.product);

    // console.log(product)
    res.status(200).json(product);
  }
}