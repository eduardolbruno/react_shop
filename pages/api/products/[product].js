import axios from 'axios';
import api from "../../../config";

export async function getProductById(id) {

  let url = api.api.baseUrl + `api/product/${id}`;

  await axios.get(url)
    .then(res => {
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
    const product = getProductById(req.query.product);

    res.status(200).json(product);
  }
}