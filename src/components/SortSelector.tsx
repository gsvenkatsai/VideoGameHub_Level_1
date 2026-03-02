import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        "Order By : Relevance"
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Data added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Relese data</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Avg Rating</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
