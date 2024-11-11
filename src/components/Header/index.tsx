import React from 'react';

import './style.css'; 

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__top">
                <div className="header__close">Закрыть</div>
                <div className="header__title_wrap">
                    <p className="header__title">Retro Bit</p>
                    <p className="header__sub_title">мини-приложение</p>
                </div>
                <img src="/images/actions.svg" alt="Action Icon" />
            </div>
            <div className="header__content">
                <div className="header__content_info">
                    <div><img src="/images/ton.svg" alt="TON Icon" /></div>
                    <div className="header__content_ton">4,234 TON</div>
                </div>
                <div className="header__content_wallet">Wallet connected</div>
            </div>
        </header>
    );
};

export default Header;
