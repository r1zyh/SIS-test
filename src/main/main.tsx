import { Typography } from "@mui/material";
import styles from './main.module.scss'

export function Main(): JSX.Element {
    return (
    <Typography variant="h1" className={styles.greeting} fontWeight={400} fontSize={46} >
        Добро пожаловать
    </Typography>)
}