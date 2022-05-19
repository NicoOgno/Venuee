const baseURL = process.env.SERVER_PORT;

const apiReservationServices = {};

apiReservationServices.deleteRes = (id) => {
  fetch(`${baseURL}/reservation/delete/${id}`, {
    method: 'DELETE',
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => e);
};
