export function getUserData(username) {
  return (
    fetch(`https://api.github.com/users/${username}/repos`)
      // fetch(`https://api.github.com/users/llccrr`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Something went wrong");
      })
      .then((data) => {
        if (data.length > 0) {
          console.log(username);
          console.log(data);
          return data;
        }
      })
      .catch((error) => {
        console.log("no result");
      })
  );
}
