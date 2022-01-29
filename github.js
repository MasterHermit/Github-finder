class Github {
  constructor() {
    this.gitClientid = "fbef87e1632e62144b98";
    this.gitClientSecret = "3de733fbfeea870b71c6286652106c513c7a0c8a";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(username) {
    const profileRes = await fetch(
      `https://api.github.com/users/${username}?client_id=${this.gitClientid}&client_secret=${this.gitClientsecret}`
    );
    const reposRes = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.gitClientid}&client_secret=${this.gitClientsecret}`
    );

    const profileData = await profileRes.json();
    const reposData = await reposRes.json();

    return {
      profile: profileData,
      repos: reposData,
    };
  }
}
