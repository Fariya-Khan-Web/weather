import React from 'react';
import like from '../../assets/heart.svg'
import FavoriteList from './FavoriteList';

const Favorite = () => {
    return (
        <div className='text-white'>
            <div class="p-2 hover:bg-black/20 cursor-pointer flex gap-2 items-center rounded-md transition-all">
                <img src={like} alt="" />
                <span>Favourite Locations</span>
            </div>

            <FavoriteList/>
        </div>
    );
};

export default Favorite;