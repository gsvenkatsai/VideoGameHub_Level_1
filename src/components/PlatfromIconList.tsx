import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import type { Platform } from "../entities/Platform";
import type { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}
const PlatfromIconList = ({ platforms }: Props) => {
  const IconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };
  return (
    <div className="flex gap-2 items-center py-1">
      {platforms.map((platform) => {
        const IconComp = IconMap[platform.slug];
        return IconComp ? (
          <IconComp key={platform.id} className="text-zinc-400 dark:text-[#8b8b8b] text-sm" />
        ) : null;
      })}
    </div>
  );
};

export default PlatfromIconList;
