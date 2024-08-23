import { Divider, Typography } from "@mui/material";
import { repoHeaders } from "./const";
import styles from "./sort-repos.module.scss";

export function SortRepos(): JSX.Element {
  return (
    <>
      <div className={styles.sortRepos}>
        {repoHeaders.map((header) => (
          <Typography
            variant="body2"
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              paddingY: "16px",
              paddingLeft: "10px",
              width: "184px",
              fontWeight: "500",
              color: "#000000DE",
            }}
          >
            {header}
          </Typography>
        ))}
      </div>
      <Divider component="li" />
    </>
  );
}
