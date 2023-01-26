export function getUserData(username) {
  return (
    fetch(`https://api.github.com/users/${username}/repos`)
      // fetch(`https://api.github.com/users/llccrr`)

      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => {
        console.log("Error caught fetching api");
        console.log(error);
        return "error";
      })
  );
}
