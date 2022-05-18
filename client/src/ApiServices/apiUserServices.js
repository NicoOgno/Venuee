const baseURL = process.env.REACT_APP_SERVER_PORT;

const apiUserServices = {};

apiUserServices.userLogin = (user) => {
  console.log(baseURL);
  return fetch(`${baseURL}/user/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

apiUserServices.UserRegister = (user) => {
  return fetch(`${baseURL}/user/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

apiUserServices.testSearch = () => {
  return fetch(`${baseURL}/vendors`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err);
};

apiUserServices.getUserProfileInfo = async (token) => {
  try {
    const res = await fetch(`${baseURL}/user/find`, {
      headers: { authorization: `${token}` },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
};

apiUserServices.getUserReservations = async (token) => {
  try {
    const res = await fetch(`${baseURL}/reservation/user`, {
      headers: { authorization: `${token}` },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
};
export default apiUserServices;
