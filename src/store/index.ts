import { configureStore } from '@reduxjs/toolkit';
import repoReducer from './repo-process/repo-process'

export const store = configureStore({
    reducer: {
        repos: repoReducer,
    },
});