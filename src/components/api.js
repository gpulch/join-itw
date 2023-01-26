export function getUserData(username) {
  return (
    fetch(`https://api.github.com/users/${username}/repos`)
      // fetch(`https://api.github.com/users/llccrr`)

    //   .then((res) => {
    //     if (res.ok) return res.json();
    //     else throw new Error("Status code error :" + res.status);
    //   })

    .then((res)=> {
        if (res.status === 404) {
            return "error"
        } else {
            return res.json()
        }
    })

      .then((data) => {
        if (data.length > 0) {
          console.log(username);
          console.log(data);
          return data;
        }
      })
      .catch((error) => {
        console.log("Api : no result");
        console.log(error);
      })
  );
}
