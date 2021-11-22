import React from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/Products.module.css';
import Item from '../Item';

const Products = ({ product }) => {

  return (
    <div className={styles}>
      <a href={`/product/${product.id}`}>
        <Item key={product.id} data={product}/>
      </a>
    </div>
  );
};

export default Products;
