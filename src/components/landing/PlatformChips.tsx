import { SiSteam, SiPlaystation, SiXbox, SiNintendoswitch } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { IoGameController } from "react-icons/io5";
import { PLATFORM_CHIPS } from "../../Data/landingData";
import useGameQueryStore from "../../store";

interface PlatformChipsProps {
  selectedPlatformId: number;
  onSelectPlatform: (platformId: number, readoutText: string) => void;
}

const PlatformChips = ({ selectedPlatformId, onSelectPlatform }: PlatformChipsProps) => {
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);

  const getIcon = (key: string) => {
    switch (key) {
      case "steam":
        return <SiSteam className="text-sm" />;
      case "playstation":
        return <SiPlaystation className="text-sm" />;
      case "xbox":
        return <SiXbox className="text-sm" />;
      case "switch":
        return <SiNintendoswitch className="text-sm" />;
      case "mobile":
        return <MdPhoneIphone className="text-sm" />;
      default:
        return <IoGameController className="text-sm" />;
    }
  };

  const handleChipClick = (chip: typeof PLATFORM_CHIPS[0]) => {
    onSelectPlatform(chip.id, `PLATFORM: ${chip.shortName} // ${chip.titlesCount} TITLES`);
    if (chip.id === 0) {
      setPlatformId(undefined as unknown as number);
    } else {
      setPlatformId(chip.id);
    }
  };

  return (
    <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-2.5 max-w-2xl mx-auto mt-4 px-2">
      {PLATFORM_CHIPS.map((chip) => {
        const isSelected = selectedPlatformId === chip.id;
        return (
          <button
            key={chip.id}
            onClick={() => handleChipClick(chip)}
            className={`group relative flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-mono text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer border ${
              isSelected
                ? "bg-cyan-500/15 border-cyan-400 text-white shadow-[0_0_15px_rgba(34,211,238,0.25)] ring-1 ring-cyan-400/50"
                : "bg-[#0B0F1A]/70 hover:bg-[#111726] border-white/10 hover:border-white/20 text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <span
              className={`transition-colors ${
                isSelected ? "text-cyan-400" : "text-zinc-500 group-hover:text-zinc-300"
              }`}
            >
              {getIcon(chip.key)}
            </span>
            <span className="font-semibold">{chip.name}</span>

            {isSelected && (
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse ml-0.5" />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default PlatformChips;
