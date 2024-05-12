import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import backgroundImage from '../assets/B&GImage1.jpg'

function Navigation() {
    const currentPage = useLocation().pathname;
    return (
        <nav>
            <ul className='nav nav-tabs nav-justified'>
                <li className='nav-item'>
                    <Link 
                    to='/'
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                    >
                      Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                    to='/about'
                    className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
                    >
                      About
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contact'
                    className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                    >
                      Contact
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/portfolio'
                    className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
                    >
                      Portfolio
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/resume'
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
        <header style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>

            <h1 className='jumbotron text-center'>The Work of Victor Hugo Swain</h1>
            <Navigation />
        </header>
    );
}

export default Header;