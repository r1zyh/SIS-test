import styles from "./footer.module.scss";

//перенести пагинацию в компонент Main

export function Footer(): JSX.Element {
  /*const iLoaded = useAppSelector(isRepoListLoaded);
  const reposCount = useAppSelector(reposLength);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (
    _e: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  <TablePagination
  component="div"
  sx={{
    marginTop: '20px',
    padding: '0 32px',
  }}
  count={Math.floor(reposCount / 4)}
  page={page}
  onPageChange={handleChangePage}
  rowsPerPage={rowsPerPage}
  onRowsPerPageChange={handleChangeRowsPerPage}
/>
*/

  return <div className={styles.footer}></div>;
}
