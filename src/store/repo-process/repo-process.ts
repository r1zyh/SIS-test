import { createSlice } from "@reduxjs/toolkit";
import { RepoData } from "../../types/repo";
import { fetchRepos } from "../api-actions";

//Состояние
type ReposState = {
    repos: RepoData[];
    loading: boolean;
    error: string | null;
    isReposListLoaded: boolean;
}

// Начальное состояние
const initialState: ReposState = {
    repos: [],
    loading: false,
    error: null,
    isReposListLoaded: false, 
};

const repoSlice = createSlice({
  name: "repos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRepos.fulfilled, (state, action) => {
        state.repos = action.payload;
        state.loading = false;
        state.isReposListLoaded = true;
      })
      .addCase(fetchRepos.rejected, (state) => {
        state.loading = false;
        state.isReposListLoaded = false;
        state.error = "Error fetching repositories";
      });
  },
});

export default repoSlice.reducer;
