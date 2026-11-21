import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";
import { useTheme } from "../context/ThemeContext";

const PlatformSelecter = () => {
  const { data, error } = usePlatforms();
  const { isDark } = useTheme();

  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);

  const selectedPlatform = usePlatform(selectedPlatformId);
  if (error) return null;
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
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList
        bg={isDark ? "#121316" : "white"}
        borderColor={isDark ? "rgba(255,255,255,0.12)" : "gray.200"}
        borderRadius="lg"
        boxShadow="xl"
        p="1"
      >
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setSelectedPlatformId(platform.id)}
            key={platform.id}
            bg={isDark ? "#121316" : "white"}
            color={isDark ? "#e8eaed" : "black"}
            fontSize="xs"
            borderRadius="md"
            _hover={{ bg: isDark ? "rgba(255,255,255,0.06)" : "gray.100" }}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelecter;
