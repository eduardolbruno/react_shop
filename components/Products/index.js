import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart.slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Products.module.css';
import Header from '../Header';

const Products = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles}>
      <Link href={`/product/${product.id}`}>
        <Image src={product.imgUrl} height={300} width={220} />
      </Link>
    </div>
  );
};

export default Products;
