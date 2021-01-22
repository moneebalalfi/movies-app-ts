import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React, { FC, useEffect, useState } from "react";
import axios, { ImgBaseUrl } from "../libs/axios";

interface RowProps {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
}

const Row: FC<RowProps> = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState<TMovies>();

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(fetchUrl);
      setMovies(data.results);
    };

    getData();
  }, [fetchUrl]);

  return (
    <Box ml={4} my={2}>
      <Heading fontWeight="normal" fontSize="xl">
        {title}
      </Heading>
      <Flex overflowX="auto" padding={4}>
        {movies?.map((movie) => (
          <Image
            src={`${ImgBaseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            rounded={4}
            key={movie.id}
            alt={movie.title}
            w="100%"
            maxH={isLargeRow ? "250px" : "100px"}
            mr={2}
            objectFit="contain"
            transition="transform 500ms"
            _hover={{ transform: isLargeRow ? "scale(1.08)" : "scale(1.07)" }}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default Row;
