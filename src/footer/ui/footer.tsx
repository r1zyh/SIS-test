import { useAppSelector } from "../../hooks/use-selector";
import { isLoaded } from "../../store/repo-process/selectors";
import styles from "./footer.module.scss";

export function Footer(): JSX.Element {
  const isLoading = useAppSelector(isLoaded);
  return !isLoading ? (<div className={styles.footer}></div>) : (<div>pagination template</div>);
}
