import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchGames } from '../../store/gameSlice';
import { RootState, AppDispatch } from '../../store';

import './style.css'; 

const GameList: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();
    const games = useSelector((state: RootState) => state.games.games);
    const gameStatus = useSelector((state: RootState) => state.games.status);
    const error = useSelector((state: RootState) => state.games.error);

    useEffect(() => {
        if (gameStatus === 'idle') {
        dispatch(fetchGames());
        }
    }, [gameStatus, dispatch]);

    if (gameStatus === 'loading') return <div>Loading...</div>;
    if (gameStatus === 'failed') return <div>Error: {error}</div>;

    return (
        <div className="list">
            <button className="list__button" onClick={() => navigate('/collection')}>Browse collection</button>
            <div>
                <p className="game-title">My games</p>
                <div className="list__games">
                    {games.map((game) => (
                        <div key={game.id} className="game-item">
                            <div className="game-info">
                                <img src={`/images/pucman.png`} alt="pucman" />
                                <div className="game-points">
                                    <h3>{game.title.split(' ')[0]}</h3>
                                    <div><img className="game__points-icon" src="/images/fire.svg" alt="Fire Icon" /> <span className="points">-7</span> for start</div>
                                </div>
                            </div>
                            <button className="game-item__button">Play</button>
                        </div>
                    ))}
                </div>
            </div>
        
        </div>
    );
};

export default GameList;
