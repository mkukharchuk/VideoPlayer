import API from "./api";

export const getVideoData = () => API.get("/media.json");
