import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import styles from '../../styles/Header.module.css';
import Search from '../Search/index'

const Header = ({ products }) => {
  const router = useRouter();
  const cart = useSelector((state) => state.cart);

  // obtengo cantidad de productos agregados en acumulador
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  console.log(router)
  return (
    <nav className={styles.navbar}>
      <h6 className={styles.logo}>ReactJS Shop</h6>
      <ul className={styles.links}>
        <li className={styles.navlink}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navlink}>
          <p>Carrito ({getItemsCount()})</p>
        </li>
      </ul>
      <Search productList={products} />
    </nav>
  );
};

export default Header;