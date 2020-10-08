import React from 'react';


export const SearchBox = ({placeHolder,searchField,onInputChange}) => {
    return (
        <input type="search" placeholder={placeHolder} value={searchField} onChange={onInputChange}></input>
    );
}