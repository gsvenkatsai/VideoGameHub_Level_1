import { FiActivity, FiGithub, FiExternalLink } from "react-icons/fi";
import { SiDiscord, SiX } from "react-icons/si";

const LandingFooter = () => {
  return (
    <footer className="relative z-30 w-full bg-[#030509] border-t border-white/[0.06] py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-[#A1A8B8]">
        
        {/* Real Status Telemetry */}
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-semibold text-zinc-300">CORE SYSTEM 200_OK</span>
          <span className="text-zinc-600">//</span>
          <span className="text-zinc-500 flex items-center gap-1.5">
            <FiActivity className="text-cyan-400" /> RAWG DISCOVERY ENGINE
          </span>
        </div>

        {/* Required Attribution */}
        <div className="text-center md:text-left">
          <span>POWERED BY </span>
          <a
            href="https://rawg.io/apidocs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-400 transition-colors font-bold underline inline-flex items-center gap-1"
          >
            RAWG VIDEO GAMES DATABASE API
            <FiExternalLink className="text-[10px]" />
          </a>
        </div>

        {/* Social / GitHub Links */}
        <div className="flex items-center gap-5 text-base text-zinc-400">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
            title="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
            title="X / Twitter"
          >
            <SiX className="text-sm" />
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
            title="Discord"
          >
            <SiDiscord />
          </a>
        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-6 pt-6 border-t border-white/[0.04] text-center text-[11px] text-zinc-600 font-mono">
        CLUTCH IT // ARCHIVE &copy; {new Date().getFullYear()}. ALL GAME ART AND METACRITIC DATA ARE COPYRIGHT OF THEIR RESPECTIVE OWNERS.
      </div>
    </footer>
  );
};

export default LandingFooter;
