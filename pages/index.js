// PLP - Product List Page

import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Products from '../components/Products'
import { getProducts } from './api/products/index';
import axios from "axios";

const ShopPage = ({ products }) => {
  return (
     <div className={styles.container}>
      <h1 className={styles.title}>Home</h1>
      <div className={styles.cards}>
        {products.map((product) => (
          <Products key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ShopPage;

export const getStaticProps = async () => {
 const products = await axios.get("https://front-test-api.herokuapp.com/api/product");

  return { props: { products: products.data } };
}