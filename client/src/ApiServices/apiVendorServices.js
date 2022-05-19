const baseURL = process.env.REACT_APP_SERVER_PORT;

const apiVendorServices = {};

apiVendorServices.vendorLogin = (vendor) => {
  return fetch(`${baseURL}/vendor/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(vendor),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

apiVendorServices.getVendorProfileInfo = async (token) => {
  try {
    const res = await fetch(`${baseURL}/vendor/find`, {
      headers: { authorization: `${token}` },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
};

apiVendorServices.getVendorReservations = async (token) => {
  try {
    const res = await fetch(`${baseURL}/reservation/vendor`, {
      headers: { authorization: `${token}` },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
};

apiVendorServices.getVendorByName = async (name) => {
  try {
    const res = await fetch(`${baseURL}/vendor/name`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(name),
    });
    console.log(res);
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
  // };
  // return fetch(`${baseURL}/vendor/name`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(name),
  // })
  //   .then((res) => res.json())
  //   .then((data) => data)
  //   .catch((e) => e);
};

export default apiVendorServices;
