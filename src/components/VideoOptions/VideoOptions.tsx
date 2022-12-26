import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import * as data from "../../data/rock.json";

type GenreState = {
  [genre: string]: boolean;
};

const GENRES: { [key: string]: number } = {
  Rock: 5902988,
  Pop: 1186192,
  Electronic: 629842,
  "Folk, World & Country": 379691,
  "Funk / Soul": 262206,
  Jazz: 197808,
  Blues: 192781,
  "Hip Hop": 122199,
  "Stage & Screen": 95366,
  Latin: 87216,
  Reggae: 79548,
  "Non-Music": 44389,
  Classical: 33896,
  "Children's": 11740,
  "Brass & Military": 3626,
};

const GENRE_NAMES = Object.keys(GENRES);

const makeInitialGenreState = (genreNames: string[]): GenreState => {
  const genreState: GenreState = {};

  genreNames.forEach((genre) => {
    genreState[genre] = false;
  });

  return genreState;
};

const getTrueObjectKeys = (object: { [key: string]: boolean }): string[] => {
  const keys: string[] = Object.keys(object);
  return keys
    .map((key) => object[key] === true && key)
    .filter((val) => val) as string[];
};

const getRandomArrayElement = (array: string[]) => {
  const i = Math.floor(Math.random() * array.length);
  return array[i];
};

const VideoOptions = () => {
  const [selectedGenre, setSelectedGenre] = useState<string>();
  const [genreState, setGenreState] = useState<GenreState>(
    makeInitialGenreState(GENRE_NAMES)
  );
  const [currentSongData, setCurrentSongData] = useState();

  const handleClick = (genre: string) => {
    setGenreState((oldState) => {
      const newState = { ...oldState };
      newState[genre] = !newState[genre];
      return newState;
    });
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

  const getRandomSong = (genre: string) => {
    const year = getRandomYear();
    console.log("year", year);

    axios
      .get("https://api.discogs.com/database/search", {
        params: {
          key: "QioRRQCRLVDglzREbHAt",
          secret: "KAdTYxtjbEFNUCYKIreiWEdOyglGbOwZ",
          genre: genre,
          sort: "random",
          year: year,
        },
      })
      .then((response) => {
        console.log("response.data.results[0]", response.data.results[0]);
        setCurrentSongData(response.data.results[0]);
        // this.setState({
        //   song: response.data.results[0],
        //   isLoading: false,
        // });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onChangeSeletecedGenres = useCallback(() => {
    // max 10,000 results => keep narrowing until get there

    // select random genre
    if (!selectedGenre) {
      const selectedGenres = getTrueObjectKeys(genreState);
      const newGenre = getRandomArrayElement(selectedGenres);

      setSelectedGenre(newGenre);
    }

    // select random song
    if (selectedGenre) {
      getRandomSong(selectedGenre);
    }
  }, [genreState, selectedGenre]);

  useEffect(() => {
    onChangeSeletecedGenres();
  }, [genreState, onChangeSeletecedGenres]);

  console.log("data", data.results[99]);

  return (
    <>
      {GENRE_NAMES.map((genre) => (
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
      {currentSongData && <img src={currentSongData.thumb} />}
      {currentSongData && <p>{currentSongData.title}</p>}
    </>
  );
};

export default VideoOptions;
