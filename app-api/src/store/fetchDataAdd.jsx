const fetchDataAdd = users => dispatch => {
  return fetch("/post", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(users),
    redirect: "follow"
  })
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log("error", error));
};
export default fetchDataAdd;
