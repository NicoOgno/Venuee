const baseURL = process.env.REACT_APP_BASE_URL;

const apiVendorServices = {};

apiVendorServices.vendorLogin = (vendor) => {
  return fetch(`${baseURL}/vendor/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(vendor),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export default apiVendorServices;
