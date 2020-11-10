export const thumbnailFormatter = (url) => {
  if (url !== undefined) {
    let formattedImg = url?.replace("{width}", "367");
    let formattedImgFinal = formattedImg?.replace("{height}", "248");
    return formattedImgFinal;
  } else {
    return null;
  }
};
