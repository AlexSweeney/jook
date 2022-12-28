import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { STYLES, GENRES, COUNTRIES } from "../../data/options";
import { GENRE_NUMBERS } from "../../data/numbers";
import {
  getTrueObjectKeys,
  getRandomNumber,
  getRandomArrayElement,
  getObjectValueTotal,
  getKeyValueAtCountIndex,
} from "../utils";

type GenreState = {
  [genre: string]: boolean;
};

type DiscogsDataType = {
  barcode: string[];
  catno: string;
  community: { want: number; have: number };
  country: string;
  cover_image: string;
  format: string[];
  format_quantity: number;
  formats: {
    descriptions: string[];
    name: string;
    qty: string;
  }[];
  genre: string[];
  id: number;
  label: string[];
  master_id: number;
  master_url: null | string;
  resource_url: string;
  style: string[];
  thumb: string;
  title: string;
  type: string;
  uri: string;
  year: string;
};

const makeInitialGenreState = (genres: string[]) => {
  const genreState: GenreState = {};
  genres.forEach((genre) => {
    genreState[genre] = false;
  });
  return genreState;
};

const getRandomElementBasedOnCount = (numberObject: {
  [key: string]: number;
}) => {
  // get total count
  const total = getObjectValueTotal(numberObject);

  // get random index
  const index = getRandomNumber(0, total);

  // get key at index
  const key = getKeyValueAtCountIndex(numberObject, index);

  return key;
};

const getRandomGenre = () => {
  return getRandomElementBasedOnCount(GENRE_NUMBERS);
};

const getRandomYear = () => {
  const decades = [
    "202",
    "201",
    "200",
    "199",
    "198",
    "197",
    "196",
    "195",
    "194",
    "193",
    "192",
    "191",
    "190",
    "189",
    "188",
    "187",
    "186",
  ];

  const years = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const randomDecade = getRandomArrayElement(decades);
  const randomYear = getRandomArrayElement(years);

  return randomDecade + randomYear;
};

const getRandomCountry = () => {
  return getRandomArrayElement(COUNTRIES).toLowerCase();
};

const getRandomStyle = (genre: string) => {
  return getRandomArrayElement(STYLES);
};

const getDiscogsData = async (passedParams: { [key: string]: string }) => {
  const data = await axios
    .get("https://api.discogs.com/database/search", {
      params: {
        key: "QioRRQCRLVDglzREbHAt",
        secret: "KAdTYxtjbEFNUCYKIreiWEdOyglGbOwZ",
        ...passedParams,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return data;
};

const getSong = async (args: { [key: string]: string }) => {
  const data = await getDiscogsData({
    ...args,
  });

  const numResults = data.pagination.items;
  const found = numResults < 10000;
  const none = numResults === 0;
  let song;

  if (found && !none) {
    const randomItem = getRandomNumber(0, numResults);
    const page = Math.floor(randomItem / 50);

    const pageData = await getDiscogsData({
      ...args,
      page: String(page),
    });

    const i = randomItem - page * 50;
    song = pageData.results[i];
  }

  return {
    found,
    song,
    none,
  };
};

const getRandomSong = async (args: { [key: string]: string }) => {
  const { genre } = args;
  const year = getRandomYear();
  const country = getRandomCountry();
  const style = getRandomStyle(genre);

  const songData = await getSong(args);

  if (songData.none) getRandomSong(args);
  else if (songData.found) {
    return songData.song;
  } else {
    const numArgs = Object.keys(args).length;
    if (numArgs === 1) args.style = style;
    if (numArgs === 2) args.year = year;
    if (numArgs === 3) args.country = country;
    getRandomSong(args);
  }
};

const VideoOptions = () => {
  const [selectedGenre, setSelectedGenre] = useState<string>();
  const [genreState, setGenreState] = useState<GenreState>(
    makeInitialGenreState(GENRES)
  );
  const [currentSongData, setCurrentSongData] = useState<DiscogsDataType>();

  const handleClick = (genre: string) => {
    setGenreState((oldState) => {
      const newState = { ...oldState };
      newState[genre] = !newState[genre];
      return newState;
    });
  };

  const onChangeSeletecedGenres = (genreState) => {
    // select random genre
    if (!selectedGenre) {
      const selectedGenres = getTrueObjectKeys(genreState);
      const newGenre = getRandomArrayElement(selectedGenres);
      setSelectedGenre(newGenre);
    }
    // select random song
    if (selectedGenre) {
      const newSong = getRandomSong({ genre: selectedGenre });
      setCurrentSongData(newSong);
    }
  };

  useEffect(() => {
    onChangeSeletecedGenres(genreState);
  }, [genreState, onChangeSeletecedGenres]);

  return (
    <>
      {GENRES.map((genre) => (
        <button
          style={{
            background: genreState[genre] ? "red" : "white",
          }}
          onClick={() => handleClick(genre)}
        >
          {genre}
        </button>
      ))}

      <br />
      <p>Selected Genre: {selectedGenre}</p>

      {currentSongData && currentSongData.thumb && (
        <img src={currentSongData.thumb} />
      )}
      {currentSongData && <p>{currentSongData.title}</p>}
    </>
  );
};

export default VideoOptions;
