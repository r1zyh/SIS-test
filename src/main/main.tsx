import { Box, Typography } from "@mui/material";
import styles from "./main.module.scss";
import { RepositoriesList } from "../repositories-list";
import { RepoInfo } from "../repo-info";
import { useAppSelector } from "../hooks/use-selector";
import { isLoaded } from "../store/repo-process/selectors";

export function Main(): JSX.Element {
  const isLoading = useAppSelector(isLoaded);
  return !isLoading? (
    <Typography
      variant="h1"
      className={styles.greeting}
      fontWeight={400}
      fontSize={46}
    >
      Добро пожаловать
    </Typography>
  ) : (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "32px",
          marginY: "24px",
        }}
      >
        <Typography variant="h3" fontSize={48}>
          Результаты поиска
        </Typography>
        <RepositoriesList />
      </Box>
      <RepoInfo />
    </>
  );
}
