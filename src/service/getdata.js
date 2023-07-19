export const getdata = (page = 1) => {
  return fetch(`https://reqres.in/api/users?page=${page}`).then((res) =>
    res.json()
  );
};
export const deleteUser = (userId) => {
  return fetch(`https://reqres.in/api/users/${userId}`, {
    method: "DELETE",
  }).then((res) => res.status === 204);
};

export const addUser = (userData) => {
  const reqObj = {
    method: "POST",
    body: JSON.stringify(userData),
  };
  return fetch("https://reqres.in/api/users", reqObj).then((res) => res.json());
};
