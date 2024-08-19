import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RepoData } from "../types/repo";



export const fetchRepos = createAsyncThunk(
  "repos/fetchRepos",
  async (params: { username: string; token?: string }) => {
    const response = await axios.get<RepoData[]>(
      `https://api.github.com/users/${params.username}/repos`,
      {
        headers: params.token
          ? { Authorization: `token ${params.token}` }
          : undefined,
      }
    );
    return response.data;
  }
);
