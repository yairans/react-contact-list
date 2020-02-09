import React from 'react';
import './Header.css'

const Header = (props) => {
  return (
    <div className='header'>
        <div className="title">
            Contact List
        </div>
        <div className="search">
            <input className="search-input" placeholder="search..." onChange={(event) => props.onChange(event.target.value.toLowerCase())
            }/>
            <img className="search-icon" src="//img.icons8.com/material-rounded/24/000000/search.png" alt=""/>

        </div>
    </div>
  )
}

export default Header
