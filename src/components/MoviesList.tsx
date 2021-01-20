import { Box, Image } from "@chakra-ui/react";
import React, { FC } from "react";

interface MoviesListProps {
  movies: any[];
}

const MoviesList: FC<MoviesListProps> = ({ movies }) => {
  return (
    <Box>
      {movies.map((movie) => (
        <Image src={movie.Poster} />
      ))}
    </Box>
  );
};

export default MoviesList;
