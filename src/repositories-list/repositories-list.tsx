import { useAppSelector } from "../hooks/use-selector";
import { selectRepos } from "../store/repo-process/selectors";

export function RepositoriesList(): JSX.Element {
  const repos = useAppSelector(selectRepos);
  return (
    <div>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <div>{repo.name}</div>
            <div>{repo.language}</div>
            <div>{repo.forks_count}</div>
            <div>{repo.stargazers_count}</div>
            <div>{repo.updated_at}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
