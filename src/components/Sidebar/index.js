import React from 'react';
import Link from 'next/link';

// components
import Nav from './Nav';

const Sidebar = ({ items }) => {
    return (
        <Nav className="sidebar">
            <div className="panel">
                <img
                    src="/logo.png"
                    width="150px"
                    alt="CoinTracker"
                    className="logo"
                />

                <div className="navigation">
                    <ul className="side-nav-menu">
                        {items &&
                            items.map(item => (
                                <li
                                    className="side-nav-menu-item custom"
                                    key={item.id}
                                >
                                    <Link href="/coins/[id]" as={`/coins/${item.id}`}>
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </Nav>
    );
};

export default Sidebar;
