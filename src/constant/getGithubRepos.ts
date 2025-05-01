import React from "react";
import axios from "axios";
import { GITHUB_NAME } from "../../secret";

const getGithubRepos = async (username: string) => {
  try {
    const res = await axios.get(
      `https://api.github.com/users/${GITHUB_NAME}/repos?per_page=100`
    );

    let repos = res.data;
    // let latestSixRepos = repos.splice(0, 8);
    // return latestSixRepos;
    let result = repos
      ?.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
      .slice(0, 8);
    return result;
  } catch (err) {
    console.log(err);
  }
};

export default getGithubRepos;
