/**
 * Transform seconds into the format 'minutes':'seconds' (1:00)
 * @param {Number} sec Time in seconds
 */
const transformTime = (sec) => {
  const minutes = Math.floor(sec / 60);
  const seconds = sec.toFixed(0) - minutes * 60;
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export default transformTime;
