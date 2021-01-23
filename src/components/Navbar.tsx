import { Avatar, Box, Flex, List, Wrap } from "@chakra-ui/react";
import React from "react";
import { BsFillBellFill } from "react-icons/bs";
import { GiPresent } from "react-icons/gi";
import { ImSearch } from "react-icons/im";
import MenuItem from "./MenuItem";
import NLogo from "./NLogo";

const Navbar = () => {
  return (
    <Flex alignItems="center" pos="fixed" w="100vw" top={4} left={0}>
      <Box pos="fixed">
        <Box pos="fixed" left={4}>
          {<NLogo width="100" />}
        </Box>

        <List
          display={{ base: "none", md: "flex" }}
          pos="fixed"
          left={44}
          alignItems="center"
        >
          <MenuItem title="Home" />
          <MenuItem title="Tv shows" />
          <MenuItem title="Movies" />
          <MenuItem title="New & Popular" />
        </List>
      </Box>

      <Box pos="fixed">
        <List
          display={{ base: "flex", md: "flex" }}
          alignItems="center"
          justifyContent="space-between"
          pos="fixed"
          right={{ base: 4, md: 12 }}
        >
          <MenuItem isIcon>
            <ImSearch size="100%" />
          </MenuItem>
          <MenuItem isIcon>
            <GiPresent size="100%" />
          </MenuItem>
          <MenuItem isIcon>
            <BsFillBellFill size="100%" />
          </MenuItem>
          <MenuItem isIcon>
            <Avatar bg="teal.500" size="100%" />
          </MenuItem>
        </List>
      </Box>
    </Flex>
  );
};

export default Navbar;
