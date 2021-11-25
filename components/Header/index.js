import React from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
// import './_header.scss';
import Head from 'next/head'
import Link from 'next/link';
import { useSelector } from 'react-redux';
// import styles from './layout.module.css'
import styles from '../../styles/Header.module.css';
import Search from '../Search'

const Header = ({ products }) => {
  const router = useRouter();
  const cart = useSelector((state) => state.cart);

  // Getting the count of items
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  console.log(router)
  return (
    <nav className={styles.navbar}>
      <h6 className={styles.logo}>React Shop - Inditex</h6>
      {router.asPath}
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