export function getUserData(username) {
  return (
    // fetch(`https:test`)
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
// export function getRepoData(username, repo) {
//   return (
//     // fetch(`https:test`)
//     fetch(`https://api.github.com/users/${username}/${repo}`)
//       // fetch(`https://api.github.com/users/llccrr`)

//       .then((res) => res.json())
//       .then((data) => data)
//       .catch((error) => {
//         console.log("Error caught fetching api");
//         console.log(error);
//         return "error";
//       })
//   );
// }

      // .then((res) => {
      //   if (res.status === 404) {
      //     return "404";
      //   } else if (res.status === 403) {
      //     return "403";
      //   } else {
      //     return res.json();
      //   }
      // })

      //   .then((res) => {
      //     if (res.status === 200 && res.length > 0) {
      //       return res.json();
      //     } else {
      //       console.log(
      //         "Looks like there was a problem. Status Code: " + res.status
      //       );
      //       return "error";
      //     }
      //   })

      //   .then((data) => {
      //     if (data.length > 0) {
      //       console.log(username);
      //       console.log(data);
      //       return data;
      //     } else {
      //       console.log("Api : no result");
      //       console.log(data); // = [{}, {}, {}]
      //     }
      //   })