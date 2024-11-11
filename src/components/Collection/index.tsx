import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchGames } from '../../store/gameSlice';
import { RootState, AppDispatch } from '../../store';

import './style.css'; 

const Collection: React.FC = () => {
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
            <div className="list__title">
                <img onClick={() => navigate('/')} src="/images/arrow.svg" alt="Arrow Icon" />
                <h2 className="list__title">Collection</h2>
            </div>
            <div>
                <div className="list__collection">
                    {games.map((game) => (
                        <div key={game.id} className="collection-item">
                            <img src={`/images/pucman.png`} alt="pucman" />
                            <h3>{game.title.split(' ')[0]}</h3>
                            <button className="game-item__button">Play</button>
                        </div>
                    ))}
                </div>
            </div>
        
        </div>
    );
};

export default Collection;
