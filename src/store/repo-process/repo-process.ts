import { createSlice } from "@reduxjs/toolkit";
import { RepoData } from "../../types/repo";
import { fetchRepos } from "../api-actions";

//Состояние
type ReposState = {
    repos: RepoData[];
    loading: boolean;
    error: string | null;
}

// Начальное состояние
const initialState: ReposState = {
    repos: [],
    loading: false,
    error: null,
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
      })
      .addCase(fetchRepos.rejected, (state) => {
        state.loading = false;
        state.error = "Error fetching repositories";
      });
  },
});

export default repoSlice.reducer;
