import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart.slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Products.module.css';
import Header from '../Header';

const Item = ({ data }) => {

  return (
    <>
      <Image src={data.imgUrl} height={300} width={220} />
      <h4 className={styles.title}>{data.brand}</h4>
      <h5 className={styles.category}>{data.model}</h5>
      <p>$ {data.price}</p>
    </>
  );
};

export default Item;