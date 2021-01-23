import { ListItem } from "@chakra-ui/react";
import React, { FC } from "react";
interface MenuItemProps {
  title?: string;
}
const MenuItem: FC<MenuItemProps> = ({ children, title }) => {
  return (
    <ListItem
      mr={4}
      cursor="pointer"
      transition="all .3s"
      _hover={{ color: "#DDD" }}
    >
      {title}
      {children}
    </ListItem>
  );
};

export default MenuItem;
