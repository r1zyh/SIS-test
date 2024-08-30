import { createSelector } from "reselect";
import { State } from "../../types/state";

const selectReposState = (state: State) => state.repos;

export const selectRepos = createSelector(
  [selectReposState],
  (reposState) => reposState.repos
);

export const isRepoListLoaded = createSelector(
  [selectReposState],
  (reposState) => reposState.isReposListLoaded
);

export const reposLength = createSelector(
  [selectReposState],
  (reposState) => reposState.repos.length
);