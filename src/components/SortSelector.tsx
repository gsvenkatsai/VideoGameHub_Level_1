import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useTheme } from "../context/ThemeContext";

const SortSelector = () => {
  const { isDark } = useTheme();
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Data added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release data" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Avg Rating" },
  ];

  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder,
  );
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
        bg={isDark ? "#1a1a2e" : "white"}
        color={isDark ? "white" : "black"}
        _hover={{ bg: isDark ? "#2a2a4e" : "gray.100" }}
        _active={{ bg: isDark ? "#2a2a4e" : "gray.100" }}
      >
        Order By : {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList bg={isDark ? "#1a1a2e" : "white"} borderColor={isDark ? "#2a2a4e" : "gray.200"}>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => setSortOrder(order.value)}
            key={order.value}
            value={order.value}
            bg={isDark ? "#1a1a2e" : "white"}
            color={isDark ? "white" : "black"}
            _hover={{ bg: isDark ? "#2a2a4e" : "gray.100" }}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
