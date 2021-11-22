import React from 'react';
import { useCallback, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import styles from '../../styles/Search.module.css';

const Search = (props) => {

  const [active, setActive] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [input, setInput] = useState("");

  const onChange = e => {
    const { productList } = props;
    const input = e.currentTarget.value;

    const newFilteredSuggestions = productList.filter(function(prod){
      return (prod.brand.toString().toLowerCase().indexOf(input.toLowerCase()) > -1 
      ||  
      prod.model.toString().toLowerCase().indexOf(input.toLowerCase()) > -1)
    });

    setActive(0);
    setFiltered(newFilteredSuggestions);
    setIsShow(true);
    setInput(e.currentTarget.value)
  };

const onClick = e => {
    setActive(0);
    setFiltered([]);
    setIsShow(false);
    setInput(e.currentTarget.innerText)
  };

const onKeyDown = e => {
    if (e.keyCode === 13) { // enter key
      setActive(0);
      setIsShow(false);
      setInput(filtered[active])
    }
    else if (e.keyCode === 38) { // up arrow
      return (active === 0) ? null : setActive(active - 1);
    }
    else if (e.keyCode === 40) { // down arrow
      return (active - 1 === filtered.length) ? null : setActive(active + 1);
    }
  };

const renderAutocomplete = () => {
    if (isShow && input) {
      if (filtered.length) {
        return (
          <ul className={styles}>
            {filtered.map((suggestion, index) => {
              let className;
              if (index === active) {
                className = "active";
              }
              return (
                <li className={className} key={suggestion.id}>
                    <a href={`/product/${suggestion.id}`}>
                      {suggestion.brand} - {suggestion.model}
                    </a>
                </li>
              );
            })}
          </ul>
        );
      } else {
        return (
          <div className="no-autocomplete">
            <em>No se ha encontrado</em>
          </div>
        );
      }
    }
    return <></>;
  }

  return (
    <>
      <input
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={input} 
        className={input}
        placeholder="Buscar..."
      />
      {renderAutocomplete()}
    </>
  );
};

export default Search;
