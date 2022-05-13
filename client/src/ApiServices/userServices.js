const baseURL = process.env.SERVER_PORT;

const userServices = {};

userServices.userLogin = (user) => {
  return fetch(`${baseURL}/user/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

userServices.register = (user) => {
  return fetch(`${baseURL}/user/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

userServices.testSearch = () => {
  return fetch(`${baseURL}/vendors`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err);
};
export default userServices;
