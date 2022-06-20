export const addSubStr = (data, length) => {
  try {
    if (typeof data === "string") {
      if (data.length > length) {
        var subData = data.substring(0, length) + "...";
      } else {
        subData = data.substring(0, length);
      }
      return subData;
    } else {
      return data;
    }
  } catch (err) {
    console.log("err", err);
  }
};
