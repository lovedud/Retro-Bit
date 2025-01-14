import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './gameSlice';

const store = configureStore({
    reducer: {
        games: gameReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
