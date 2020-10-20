const transformTime = (ms) => {
  var minutes = Math.floor(ms / 60);
  var seconds = ms.toFixed(0) - minutes * 60;
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export default transformTime;
