const baseURL = process.env.REACT_APP_SERVER_PORT;

const apiReservationServices = {};

apiReservationServices.deleteRes = (id) => {
  fetch(`${baseURL}/reservation/delete/${id}`, {
    method: 'DELETE',
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => e);
};

apiReservationServices.createRes = (token, data) => {
  console.log(baseURL);
  return fetch(`${baseURL}/reservation/`, {
    method: 'POST',
    headers: { authorization: `${token}`, 'content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((e) => console.log(e));
};

export default apiReservationServices;
