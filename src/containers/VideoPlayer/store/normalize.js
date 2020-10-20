export const normilizedVideoData = (data) => ({
  name: data.name,
  videoURL: data.url,
  videoFromat: `format/${data.format}`,
});
