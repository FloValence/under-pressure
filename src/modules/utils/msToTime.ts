const msToTime = (duration: number) => {
  const rawseconds = Math.floor((duration / 1000) % 60);
  const rawminutes = Math.floor((duration / (1000 * 60)) % 60);
  const rawhours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  const hours = rawhours < 10 ? "0" + rawhours : rawhours;
  const minutes = rawminutes < 10 ? "0" + rawminutes : rawminutes;
  const seconds = rawseconds < 10 ? "0" + rawseconds : rawseconds;

  return hours + ":" + minutes + ":" + seconds;
};

export const msToText = (duration: number) => {
  return (
    Math.floor(duration / (1000 * 60)) +
    " minutes, " +
    Math.floor((duration / 1000) % 60) +
    " seconds"
  );
};

export default msToTime;
