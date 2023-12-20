import client from "./client";

// get
export const getList = () => {
  return client.get("/orders");
};

// detail
export const getDetail = (id) => {
  return client.get(`/orders/${id}`);
};

// create
export const createOrder = (params) => {
  return client.post("/orders", params);
};

// update
export const updateOrder = (id, params) => {
  return client.put(`/orders/${id}`, params);
};

// delete
export const deleteOrder = (id) => {
  return client.delete(`/orders/${id}`);
};
