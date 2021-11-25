import axios from 'axios';
import api from "../../../config";

export async function setProductCart(data) {

  let url = api.api.baseUrl + `api/cart`;

  await axios.post(url, {
    id: data[0].id,
    colorCode: data[0].colorCode,
    storageCode: data[0].storageCode
  })
    .then(res => {
      console.log(res.data)
      return res.data;

    })
    .catch(error => {
      console.log(error)
    })
}


export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.query.product)
    const cart = setProductCart(req.query.product);

    console.log("nro" + cart)
    res.status(200).json(cart);
  }
}