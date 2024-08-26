import { createSelector } from "reselect";
import { State } from "../../types/state";

const selectReposState = (state: State) => state.repos;

export const selectRepos = createSelector(
  [selectReposState],
  (reposState) => reposState.repos
);

export const isLoaded = createSelector(
  [selectReposState],
  (reposState) => reposState.loading
);
