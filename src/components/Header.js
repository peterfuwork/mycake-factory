import React from 'react';
import cake from '../assets/cake_logo.png';

const Header = (props) => {
    return(
        <header className="row header">
            <img src={cake} className="img" alt="img" /><br />
            <div className="title">my Cake Factory</div>
        </header>
    );
}

export default Header;