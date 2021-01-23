import {
  Avatar,
  Box,
  Button,
  Flex,
  List,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Wrap,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsFillBellFill } from "react-icons/bs";
import { GiPresent } from "react-icons/gi";
import { ImSearch } from "react-icons/im";
import { IoMdArrowDropdown } from "react-icons/io";
import ListItem from "./ListItem";
import NLogo from "./NLogo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex alignItems="center" pos="fixed" w="100vw" top={4} left={0}>
      <Box pos="fixed">
        <Box pos="fixed" left={4}>
          {<NLogo width="100" />}
        </Box>

        {/* Normal screen */}
        <List
          display={{ base: "none", md: "flex" }}
          pos="fixed"
          left={44}
          alignItems="center"
        >
          <ListItem title="Home" />
          <ListItem title="Tv shows" />
          <ListItem title="Movies" />
          <ListItem title="New & Popular" />
        </List>

        {/* Base Screen */}
        <Box
          display={{ base: "block", md: "none" }}
          pos="fixed"
          left={44}
          top={2}
          alignItems="center"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <Menu isOpen={isOpen}>
            <MenuButton
              as={Button}
              rightIcon={<IoMdArrowDropdown />}
              bg="none"
              _hover={{ bg: "none" }}
              _expanded={{ bg: "none" }}
              _focus={{ outline: 0, boxShadow: "none", bg: "none" }}
            >
              Browse
            </MenuButton>
            <MenuList
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              bg="bgColor"
              borderTop=".3rem solid white"
              w="300px"
            >
              <MenuItem w="100%" textAlign="center">
                Home
              </MenuItem>
              <MenuItem>Tv shows</MenuItem>
              <MenuItem>Movies</MenuItem>
              <MenuItem>New & Popular</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>

      <Box pos="fixed">
        <List
          display={{ base: "flex", md: "flex" }}
          alignItems="center"
          justifyContent="space-between"
          pos="fixed"
          right={{ base: 4, md: 12 }}
        >
          <ListItem isIcon>
            <ImSearch size="100%" />
          </ListItem>
          <ListItem isIcon>
            <GiPresent size="100%" />
          </ListItem>
          <ListItem isIcon>
            <BsFillBellFill size="100%" />
          </ListItem>
          <ListItem isIcon>
            <Avatar bg="teal.500" size="100%" />
          </ListItem>
        </List>
      </Box>
    </Flex>
  );
};

export default Navbar;
