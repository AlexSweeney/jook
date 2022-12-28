import axios from "axios";
import { GENRES, STYLES } from "./options";

const getDiscogsCount = async (passedParams: { [key: string]: string }) => {
  const data = await axios
    .get("https://api.discogs.com/database/search", {
      params: {
        key: "QioRRQCRLVDglzREbHAt",
        secret: "KAdTYxtjbEFNUCYKIreiWEdOyglGbOwZ",
        ...passedParams,
      },
    })
    .then((response) => {
      return response.data.pagination.items;
    })
    .catch((error) => {
      console.log(error);
    });

  return data;
};

const getDiscogsData = async () => {
  const data = await axios
    .get("https://api.discogs.com/database/search", {
      params: {
        key: "QioRRQCRLVDglzREbHAt",
        secret: "KAdTYxtjbEFNUCYKIreiWEdOyglGbOwZ",
        sort: "year",
      },
    })
    .then((response) => {
      console.log("response", response.data.results);
    })
    .catch((error) => {
      console.log(error);
    });

  return data;
};

export const printStyleNumbers = async () => {
  let i = 0;

  setInterval(async () => {
    const style = STYLES[i];
    const number = await getDiscogsCount({ style });
    console.log(`"${style}": ${number},`);

    i++;
  }, 5000);
};

export const printGenreNumbers = async () => {
  let i = 0;

  setInterval(async () => {
    const genre = GENRES[i];
    const number = await getDiscogsCount({ genre });
    console.log(`"${genre}": ${number},`);

    i++;
  }, 5000);
};
