import { Box, Typography } from "@mui/material";
import styles from "./main.module.scss";
import { RepositoriesList } from "../repositories-list";
import { RepoInfo } from "../repo-info";

export function Main(): JSX.Element {
  const isLoaded = true;
  return !isLoaded ? (
    <Typography
      variant="h1"
      className={styles.greeting}
      fontWeight={400}
      fontSize={46}
    >
      Добро пожаловать
    </Typography>
  ) : (
    <Box sx={{display: 'flex'}}>
    <RepositoriesList />
    <RepoInfo/>
    </Box>
  );
}
