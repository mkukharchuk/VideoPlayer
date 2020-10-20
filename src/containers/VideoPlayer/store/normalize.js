export const normalizedVideoData = (data) => ({
  name: data.name,
  videoURL: data.url,
  videoFormat: `format/${data.format}`,
});
