import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios, { ImgBaseUrl } from "../libs/axios";
import { FaPlay } from "react-icons/fa";
import { ImInfo } from "react-icons/im";
import requests from "../libs/requests";
import truncate from "../helpers/truncate";
import Overlay from "./Overlay";

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
    >
      <Overlay>
        <Box className="contents" ml={12} mt={20}>
          <Heading as="h1" fontSize="4rem">
            {movie?.title || movie?.original_title || movie?.name}
          </Heading>
          <Text
            w="45rem"
            lineHeight="1.3"
            pt="1rem"
            fontSize="1rem"
            fontWeight="medium"
            maxW="360px"
            maxH="100px"
          >
            {truncate(movie?.overview!, 150)}
          </Text>
          <Stack isInline fontWeight="normal" mt={4}>
            <Button
              leftIcon={<FaPlay />}
              variant="sold"
              bg="white"
              color="black"
              w="140px"
            >
              Play
            </Button>
            <Button
              leftIcon={<ImInfo />}
              bg="rgba(109,109,110,0.7)"
              color="white"
              fontWeight="medium"
              w="120px"
            >
              More Info
            </Button>
          </Stack>
        </Box>
      </Overlay>
    </Flex>
  );
};

export default Banner;
