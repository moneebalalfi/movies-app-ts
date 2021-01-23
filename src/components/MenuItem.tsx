import { ListItem } from "@chakra-ui/react";
import React, { FC } from "react";
interface MenuItemProps {
  title?: string;
  isIcon?: boolean;
}
const MenuItem: FC<MenuItemProps> = ({ children, title, isIcon }) => {
  return (
    <ListItem
      mr={4}
      w={isIcon ? { base: "23px", md: "30px" } : ""}
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
