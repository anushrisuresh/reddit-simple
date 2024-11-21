import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <h1><Link to="/">Reddit Clone</Link></h1>
            <nav>
                <Link to="/profile">Profile</Link>
                <Link to="/create-post">Create Post</Link>
            </nav>
        </header>
    );
};

export default Header;