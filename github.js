class Github {
  constructor() {
    this.gitClientid = "a907b5f19b25b57835d1";
    this.gitClientSecret = "b9b9cec15868fc454ed10c8a805388917511620d";
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
