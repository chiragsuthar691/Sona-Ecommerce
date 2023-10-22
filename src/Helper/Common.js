export const renderMsg = (e) => {
  console.error("e", e);
  return e?.response?.status === 401 ||
    e?.response?.status === 404 ||
    e?.response?.status === 400
    ? e?.response?.data?.message
    : "Something goes wrong, please try again later!";
};
