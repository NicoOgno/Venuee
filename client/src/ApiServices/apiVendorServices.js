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

export default apiVendorServices;
