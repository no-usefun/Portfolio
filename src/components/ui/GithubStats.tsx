import { useEffect, useState } from "react";

export default function GithubStats() {
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/no-usefun")
      .then((res) => res.json())
      .then((data) => setRepos(data.public_repos))
      .catch((err) => console.error(err));
  }, []);

  return <div>{repos !== null ? `${repos}+ Repositories` : "Loading..."}</div>;
}
