import { Divider, Typography } from "@mui/material";
import { repoHeaders } from "./const";

export function SortRepos(): JSX.Element {
  return (
    <>
      {repoHeaders.map((header) => (
        <Typography variant="body2" sx={{display: 'flex'}}>
          {header}
        </Typography>
      ))}
      <Divider component='li'/>
    </>
  );
}
