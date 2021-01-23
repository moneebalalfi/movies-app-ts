import {
  Avatar,
  Box,
  Flex,
  Icon,
  List,
  ListItem,
  Stack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import { ImSearch } from "react-icons/im";
import { BsFillBellFill } from "react-icons/bs";
import { GiPresent } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import MenuItem from "./MenuItem";
import NLogo from "./NLogo";

const Navbar = () => {
  return (
    <Flex alignItems="center" pos="fixed" w="100vw" p={4}>
      <Box pos="fixed" right={4} top={4}>
        <Box p={4} pos="fixed" left={4} top={0}>
          {<NLogo width="100" />}
        </Box>

        <List
          display="flex"
          justifyContent="space-between"
          pos="fixed"
          left={44}
        >
          <MenuItem title="Home" />
          <MenuItem title="Tv shows" />
          <MenuItem title="Movies" />
          <MenuItem title="New & Popular" />
        </List>
      </Box>

      <Wrap justify="center" align="center" pos="fixed" right={12} top={4}>
        <MenuItem>
          <ImSearch size="30" />
        </MenuItem>
        <MenuItem>
          <GiPresent size="30" />
        </MenuItem>
        <MenuItem>
          <BsFillBellFill size="30" />
        </MenuItem>
        <MenuItem>
          <Avatar bg="teal.500" size="md" />
        </MenuItem>
      </Wrap>
    </Flex>
  );
};

export default Navbar;
