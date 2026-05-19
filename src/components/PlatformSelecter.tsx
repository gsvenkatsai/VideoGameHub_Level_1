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
        bg={isDark ? "#1a1a2e" : "white"}
        color={isDark ? "white" : "black"}
        _hover={{ bg: isDark ? "#2a2a4e" : "gray.100" }}
        _active={{ bg: isDark ? "#2a2a4e" : "gray.100" }}
      >
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList bg={isDark ? "#1a1a2e" : "white"} borderColor={isDark ? "#2a2a4e" : "gray.200"}>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setSelectedPlatformId(platform.id)}
            key={platform.id}
            bg={isDark ? "#1a1a2e" : "white"}
            color={isDark ? "white" : "black"}
            _hover={{ bg: isDark ? "#2a2a4e" : "gray.100" }}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelecter;
