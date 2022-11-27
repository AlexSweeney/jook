import { useState } from "react";

type GenreState = {
  [genre: string]: boolean;
};

const makeInitialGenreState = (genres: string[]): GenreState => {
  const genreState: GenreState = {};

  genres.forEach((genre) => {
    genreState[genre] = false;
  });

  return genreState;
};

const VideoOptions = () => {
  const genres = [
    "Blues",
    "Brass & Military",
    "Children's",
    "Classical",
    "Electronic",
    "Folk, World, & Country",
    "Funk / Soul",
    "Hip-Hop",
    "Jazz",
    "Latin",
    "Non-Music",
    "Pop",
    "Reggae",
    "Rock",
    "Stage & Screen",
  ];

  const [genreState, setGenreState] = useState(makeInitialGenreState(genres));

  const handleClick = (genre: string) => {
    setGenreState((oldState) => {
      const newState = { ...oldState };
      newState[genre] = !newState[genre];
      return newState;
    });
  };

  return (
    <>
      {genres.map((genre) => (
        <button
          style={{
            background: genreState[genre] ? "red" : "white",
          }}
          onClick={() => handleClick(genre)}
        >
          {genre}
        </button>
      ))}
    </>
  );
};

export default VideoOptions;
