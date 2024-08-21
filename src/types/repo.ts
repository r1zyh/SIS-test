//данные о репозитории
export type RepoData = {
    id: string;
    name: string;
    language: string | null;
    forks_count: number;
    stargazers_count: number;
    updated_at: string;
}