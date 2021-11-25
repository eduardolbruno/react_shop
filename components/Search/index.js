import React from 'react';
import { useState } from 'react'
import styles from '../../styles/Search.module.css';
import TextField from '@mui/material/TextField';

const Search = (props) => {

  const [active, setActive] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [input, setInput] = useState("");

  const onChange = e => {
    const { productList } = props;
    const input = e.currentTarget.value;

    const newFilteredSuggestions = productList.filter(function (prod) {
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
    if (e.keyCode === 13) { // "enter"
      setActive(0);
      setIsShow(false);
      setInput(filtered[active])
    }
    else if (e.keyCode === 38) { // flecha arriba
      return (active === 0) ? null : setActive(active - 1);
    }
    else if (e.keyCode === 40) { // flecha abajo
      return (active - 1 === filtered.length) ? null : setActive(active + 1);
    }
  };

  const renderAutocomplete = () => {
    if (isShow && input) {
      if (filtered.length) {
        return (

          <ul className={styles.autocomplete}>
            {filtered.map((suggestion, index) => {
              let className;
              if (index === active) {
                className = "active";
              }
              return (
                <li key={suggestion.id}>
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
          <ul className={styles.autocomplete}>
            <li >
              <em>No hay resultados.</em>
            </li>
          </ul>

        );
      }
    }
    return <></>;
  }

  return (
    <>
      <TextField label="Buscar..." id="fullWidth" value={input}
        className={styles.input} onChange={onChange} autoComplete={"off"}
        onKeyDown={onKeyDown}></TextField>
      {renderAutocomplete()}
    </>
  );
};

export default Search;
