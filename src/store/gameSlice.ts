import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface Game {
    id: number;
    title: string;
    body: string;
}

interface GameState {
    games: Game[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: GameState = {
    games: [],
    status: 'idle',
    error: null,
};

export const fetchGames = createAsyncThunk<Game[]>('games/fetchGames', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data.slice(0, 10);
});

const gameSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchGames.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchGames.fulfilled, (state, action: PayloadAction<Game[]>) => {
            state.status = 'succeeded';
            state.games = action.payload;
        })
        .addCase(fetchGames.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message || 'Something went wrong';
        });
    },
});

export default gameSlice.reducer;
