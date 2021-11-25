// PLP - Product List Page
import styles from '../styles/Home.module.css'
import Products from '../components/Products'
import axios from "axios";
import Container from '@mui/material/Container';

const ShopPage = ({ products }) => {

  return (
    <div>
      <h1 className={styles.title}>Home</h1>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Products product={products} />
      </Container>
    </div>
  )
}

export default ShopPage;

export const getStaticProps = async () => {
  const products = await axios.get("https://front-test-api.herokuapp.com/api/product");

  return { props: { products: products.data } };
}