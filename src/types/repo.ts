//данные о репозитории
export type RepoData = {
    name: string;
    language: string | null;
    forks_count: number;
    stargazers_count: number;
    updated_at: string;
}