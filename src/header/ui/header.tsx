import { Button, TextField } from "@mui/material";
import styles from "./header.module.scss";
import { fetchRepos } from "../../store/api-actions";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/use-dispatch";

export function Header(): JSX.Element {

  //remove unused token from fetchRepos()
  //добавить ввод, debounce
  const dispatch = useAppDispatch();
  useEffect(() => {
    const result = dispatch(fetchRepos({ username: "MichaelAny" }));
    console.log(result)
  }, [dispatch]);
  return (
    <div className={styles.search}>
      <TextField
        placeholder="Введите поисковый запрос"
        variant="outlined"
        sx={{
          width: "912px",
          height: "42px",
          borderRadius: "4px",
          marginY: "19px",
          marginLeft: "32px",
          marginRight: "8px",
          backgroundColor: "white",
          "& .MuiOutlinedInput-root": {
            height: "100%",
            display: "flex",
            alignItems: "center",
            paddingLeft: "16px",
          },
          "& .MuiInputBase-input": {
            padding: 0,
          },
          "& fieldset": {
            border: "none",
          },
        }}
      />
      <Button
        variant="contained"
        sx={{
          width: "105px",
          height: "42px",
          fontSize: "15px",
          backgroundColor: "#2196F3",
          borderRadius: "4px",
          margin: "19px 0",
        }}
      >
        ИСКАТЬ
      </Button>
    </div>
  );
}
