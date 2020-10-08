import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({placeHolder,searchField,onInputChange}) => {
    return (
        <input className="search" type="search" placeholder={placeHolder} value={searchField} onChange={onInputChange}></input>
    );
}