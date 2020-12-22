import { Link } from 'gatsby';
import React from 'react';

const TopNav = () => (
    <header>
        <span>evbeff</span>
        <nav>
            <ul>
                <li><Link to='/'>blog</Link></li>
            </ul>
        </nav>
    </header>
)

export default TopNav