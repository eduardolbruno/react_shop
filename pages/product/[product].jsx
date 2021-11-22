// PDP - Product Details Page
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart.slice';
import axios from 'axios';
import api from "../../config";
import { getProductById } from '../api/products/[product]';
import styles from '../../styles/Products.module.css';
import Image from 'next/image';


function Product({ data }) {
  const router = useRouter();
  const dispatch = useDispatch();

  // console.log(router)
  return (
      <div className={styles.container}>
      <h1 className={styles.title}>{router.query.product}</h1>
      <div className={styles.cards}>
        <p>{data.model}</p>
        <Image src={data.imgUrl} height={300} width={220} />
        <h1>Description</h1>
        <p>{data.brand}</p>
        <p>{data.model}</p>
        <p>$ {data.price}</p>
        <h1>Actions</h1>
        <p>Almacenamiento</p>
       
          <select>
          {data.options.storages.map((a) => (
            <option value={a.id}>{a.name}</option>
            ))}
          </select>         
        
        <p>Colores</p>
        <select>
          {data.options.colors.map((a) => (
            <option value={a.id}>{a.name}</option>
            ))}
          </select>       
        <button
        onClick={() => dispatch(addToCart(data))}
        className={styles.button}
      >
        Agregar al Carrito
      </button>
      </div>
    </div>
    )
  }
  
  export default Product;

  export async function getServerSideProps(ctx) {

    const id = ctx.query.product;
    let url = api.api.baseUrl+`api/product/${id}`;
    // console.log(url)
    // const res =  await getProductById(id);
    const res = await axios.get(url);
    console.log(res)
    // console.log(products)
    return { props: { 
      data: res.data
    } 
  };
  }