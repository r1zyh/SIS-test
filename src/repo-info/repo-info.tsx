import { Typography } from "@mui/material";

export function RepoInfo(): JSX.Element {
  return (
    <Typography
      sx={{
        margin: "auto", // Центрирование содержимого
        backgroundColor: "#F2F2F2", // Фоновый цвет
        width: "480px", // Полная ширина контейнера
        height: "912px", // Полная высота контейнера
        marginLeft: "82px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Выберите репозиторий
    </Typography>

  );
}
