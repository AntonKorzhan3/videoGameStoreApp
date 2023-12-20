import client from "./client";

// get
export const getList = () => {
  return client.get("/video_games");
};

// detail
export const getDetail = (id) => {
  return client.get(`/video_games/${id}`);
};

// create
export const createVideoGame = (params) => {
  return client.post("/video_games", params);
};

// update
export const updateVideoGame = (id, params) => {
  return client.put(`/video_games/${id}`, params);
};

// delete
export const deleteVideoGame = (id) => {
  return client.delete(`/video_games/${id}`);
};
