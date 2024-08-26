import { Typography } from "@mui/material";
import { useAppSelector } from "../hooks/use-selector";
import { isLoaded } from "../store/repo-process/selectors";

export function RepoInfo(): JSX.Element {
  const isLoading = useAppSelector(isLoaded);
  return !isLoading ? (
    <Typography>Выберите репозиторий</Typography>
  ) : (
    <div>some template</div>
  );
}
