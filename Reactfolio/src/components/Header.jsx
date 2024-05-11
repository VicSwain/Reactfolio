import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
    const currentPage = useLocation().pathname;
    return (
        <nav>
            <ul className='nav nav-tabs'>
                <li className='nav-item'>
                    <Link 
                    to='/'
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                    >
                      Home
                    </Link>
                </li>
                <li>
                    <Link
                    to='/About'
                    className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
                    >
                      About
                    </Link>
                </li>
                <li>
                    <Link to='/Contact'
                    className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                    >
                      Contact
                    </Link>
                </li>
                <li>
                    <Link to='/Portfolio'
                    className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
                    >
                      Portfolio
                    </Link>
                </li>
                <li>
                    <Link to='/Resume'
                    className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                    >
                      Resume
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

function Header() {
    return (
        <header>
            <h1>My Portfolio</h1>
            <Navigation />
        </header>
    );
}

export default Header;