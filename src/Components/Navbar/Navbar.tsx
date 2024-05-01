import React from "react"
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faCaretDown } from '@fortawesome/free-solid-svg-icons';


function Navbar() {

    return(
        <div className="navbar">
            <div className="mainNav">
                <div className="logo">
                    
                    <h1>HACKeMAG</h1>
                </div>
                <input className="navbar-search" type="text" placeholder="Cauta ce vrei tu nenicule"></input>
                <button className="favorite">
                    <FontAwesomeIcon icon={faHeart} className="fav-icon" />
                    <div>Favorite</div>
                    <FontAwesomeIcon icon={faCaretDown} className="caret-down" />
                </button>
                <button className="cart">
                    <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
                    <div>Cosul meu</div>
                    <FontAwesomeIcon icon={faCaretDown} className="caret-down" />
                </button>
            </div>
            <div className="secondNav">
                <li>
                    <ul>
                        <img className="ham-menu" width="20px" src="src/assets/images/menu.png"></img>
                        Produse
                    </ul>
                    <ul>Telefoane</ul>
                    <ul>Produse</ul>
                </li>
            </div>
        </div>
    );
}

export default Navbar

