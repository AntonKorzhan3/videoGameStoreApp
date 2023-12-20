import client from "./client";

// get
export const getList = () => {
  return client.get("/order_items");
};

// detail
export const getDetail = (id) => {
  return client.get(`/order_items/${id}`);
};

// create
export const createOrderItems = (params) => {
  return client.post("/order_items", params);
};

// update
export const updateOrderItems = (id, params) => {
  return client.put(`/order_items/${id}`, params);
};

// delete
export const deleteOrderItems = (id) => {
  return client.delete(`/order_items/${id}`);
};
