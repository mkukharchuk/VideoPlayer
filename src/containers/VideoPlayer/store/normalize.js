export const normilizedVideoData = (data) => {
  console.log(data);
  return {
    name: data.name,
    videoURL: data.url,
    videoFromat: `format/${data.format}`,
  };
};
