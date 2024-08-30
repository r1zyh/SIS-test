import { Divider, Typography } from "@mui/material";
import styles from "./sort-repos.module.scss";

export function SortRepos(): JSX.Element {
  return (
    <>
      <div className={styles.sortRepos}>
        <Typography variant="body2" className={styles.repoItem}>Название</Typography>
        <Typography variant="body2" className={styles.repoItem}>Язык</Typography>
        <Typography variant="body2" className={styles.repoItem}>Число форков</Typography>
        <Typography variant="body2" className={styles.repoItem}>Число звезд</Typography>
        <Typography variant="body2" className={styles.repoItem}>Дата обновления</Typography>
      </div>
      <Divider component="li" />
    </>
  );
}
