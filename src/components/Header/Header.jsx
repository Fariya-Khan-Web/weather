import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import Favorite from './Favorite';

const Header = () => {
    return (
        <header class="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-8">
            <nav class="container flex items-center justify-between py-6 mx-auto">

                <Logo />

                <div class="flex items-center gap-4 relative">

                    <SearchBar />
                    <Favorite />

                </div>
            </nav>
        </header>
    );
};

export default Header;