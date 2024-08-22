import { Divider, List, ListItem, Typography } from "@mui/material";
import { useAppSelector } from "../hooks/use-selector";
import { selectRepos } from "../store/repo-process/selectors";
import styles from "./repositories-list.module.scss";
import { Fragment } from "react";
import { formatDate } from "../util/util";
import { SortRepos } from "../sort-repos";

export function RepositoriesList(): JSX.Element {
  const repos = useAppSelector(selectRepos);

  return (
    <>
      <List className={styles.repoList}>
        <SortRepos />
        {repos.map((repo) => (
          <Fragment key={repo.id}>
            <ListItem className={styles.repoListItem}>
              <Typography variant="body2" className={styles.repoTextInfo}>
                {repo.name}
              </Typography>
              <Typography variant="body2" className={styles.repoTextInfo}>
                {repo.language ? repo.language : "uncertain"}
              </Typography>
              <Typography variant="body2" className={styles.repoTextInfo}>
                {repo.forks_count}
              </Typography>
              <Typography variant="body2" className={styles.repoTextInfo}>
                {repo.stargazers_count}
              </Typography>
              <Typography variant="body2" className={styles.repoTextInfo}>
                {formatDate(repo.updated_at)}
              </Typography>
            </ListItem>
            <Divider component="li" />
          </Fragment>
        ))}
      </List>
    </>
  );
}
