export const normalizeVideoData = (data) => ({
  name: data.name,
  videoURL: data.url,
  videoFormat: `video/${data.format}`,
});
