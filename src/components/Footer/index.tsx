import React from 'react';

import './style.css'; 

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer_item">
                <img className="game__points-icon" src="/images/joystick.svg" alt="joystick Icon" />
                <div>Home</div>
            </div>
            <div className="footer_item">
                <img className="game__points-icon" src="/images/hands.svg" alt="hands Icon" />
                <div>Invite</div>
            </div>
            <div className="footer_item">
                <img className="game__points-icon" src="/images/earn.svg" alt="earn Icon" />
                <div>Earn</div>
            </div>
            <div className="footer_item">
                <img className="game__points-icon" src="/images/myGames.svg" alt="myGames Icon" />
                <div>My games</div>
            </div>
            <div className="footer_item">
                <img className="game__points-icon" src="/images/top.svg" alt="top Icon" />
                <div>Top</div>
            </div>
        </footer>
    );
};

export default Footer;
