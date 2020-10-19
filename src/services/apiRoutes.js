import API from "./api.js";

export const getVideoData = () => API.get("/media.json");
