import React from 'react';
import './header-title.css'

const HeaderTitle = () => {
    return (
        <div className="header-title d-flex align-items-end justify-content-between">
            <h1 className='header-title__title'>Todo List</h1>
            <div className="header-title__made">1 more todo, 3 done</div>
        </div>

    )
};

export default HeaderTitle;