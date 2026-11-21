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
        bg={isDark ? "#121316" : "white"}
        color={isDark ? "#e8eaed" : "black"}
        fontSize="xs"
        fontWeight="500"
        border="1px solid"
        borderColor={isDark ? "rgba(255,255,255,0.12)" : "gray.200"}
        _hover={{
          bg: isDark ? "#18191e" : "gray.100",
          borderColor: isDark ? "rgba(255,255,255,0.25)" : "gray.300",
        }}
        _active={{ bg: isDark ? "#18191e" : "gray.100" }}
        borderRadius="lg"
        height="8"
        px="3"
        transition="all 0.15s ease"
      >
        Order By: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList
        bg={isDark ? "#121316" : "white"}
        borderColor={isDark ? "rgba(255,255,255,0.12)" : "gray.200"}
        borderRadius="lg"
        boxShadow="xl"
        p="1"
      >
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => setSortOrder(order.value)}
            key={order.value}
            value={order.value}
            bg={isDark ? "#121316" : "white"}
            color={isDark ? "#e8eaed" : "black"}
            fontSize="xs"
            borderRadius="md"
            _hover={{ bg: isDark ? "rgba(255,255,255,0.06)" : "gray.100" }}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
