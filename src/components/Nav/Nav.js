import { Link } from 'gatsby';
import React from 'react';

export default function Nav() {
    return (
            <nav className="flex items-center justify-between h-16 px-4 sm:px-6">
                <span>
                    <Link to='/'>evbeff</Link>
                </span>
                <ul>
                    <li>
                        <Link to='/'>blog</Link>
                    </li>
                </ul>
            </nav>
        )
};