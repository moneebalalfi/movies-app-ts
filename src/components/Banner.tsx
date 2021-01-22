import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios, { ImgBaseUrl } from "../libs/axios";
import requests from "../libs/requests";

const Banner = () => {
  const [movie, setMovie] = useState<TMovie>();

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(requests.trendingMovies);
      const movie =
        data.results[Math.floor(Math.random() * (data.results.length - 1))];
      setMovie(movie);
      console.log(movie);
    };

    getData();
  }, []);
  return (
    <Flex
      as="header"
      bgImage={`url(${ImgBaseUrl}${movie?.backdrop_path})`}
      bgSize="cover"
      objectFit="contain"
      height="500px"
      alignItems="center"
      justify="flex-start"
    >
      <Box className="contents" ml={8}>
        <Heading as="h1" fontSize="3rem">
          {movie?.title || movie?.original_title || movie?.name}
        </Heading>
        <Box className="btns">
          <Button>Play</Button>
          <Button>My List</Button>
        </Box>
        <Text
          w="45rem"
          lineHeight="1.3"
          pt="1rem"
          fontSize="1rem"
          fontWeight="medium"
          maxW="360px"
          maxH="80px"
        >
          {movie?.overview}
        </Text>
      </Box>
    </Flex>
  );
};

export default Banner;
