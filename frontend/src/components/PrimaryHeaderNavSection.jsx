import { useState } from "react";


export const PrimaryHeaderNavSection = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="flex w-[calc(100%_-_256px)] items-center justify-between px-12 py-0 left-64 bg-[#fef7ffb2] backdrop-blur-[32px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(32px)_brightness(100%)] h-20 absolute top-0 z-10">
      <div className="w-full left-0 bg-[#ffffff01] shadow-[0px_12px_40px_-10px_#6b38d414] h-20 absolute top-0" />

      <div className="flex w-96 items-center px-4 py-2 relative bg-[#f8f1fe] rounded-3xl">
        <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
          <img className="relative w-[18px] h-[18px]" alt="Icon" src="" />
        </div>

        <div className="flex flex-col items-start pl-2 pr-0 py-0 relative flex-1 grow">
          <div className="flex flex-col items-start pt-[9px] pb-2.5 px-3 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Tìm kiếm sự kiện hoặc vé..."
                className="relative flex items-center self-stretch w-full mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#7b7486] text-sm tracking-[0] leading-[normal] bg-transparent border-none outline-none placeholder-[#7b7486]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
        <div className="inline-flex flex-col justify-center items-center relative flex-[0_0_auto]">
          <div className="inline-flex items-start justify-center relative flex-[0_0_auto]">
            <img className="relative w-4 h-5" alt="Icon" src="" />
          </div>

          <div className="absolute top-0 right-0 w-2 h-2 bg-[#8455ef] rounded-full">
            <div className="absolute top-0 right-0 w-2 h-2 bg-[#ffffff01] rounded-full shadow-[0px_0px_0px_2px_#fef7ff]" />
          </div>
        </div>

        <div className="inline-flex flex-col justify-center items-center relative flex-[0_0_auto]">
          <div className="inline-flex items-start justify-center relative flex-[0_0_auto]">
            <img className="relative w-5 h-5" alt="Icon" src="" />
          </div>
        </div>

        <div className="w-[17px] h-8 px-2 py-0 flex flex-col items-start relative">
          <div className="relative w-px h-8 bg-[#cbc3d74c]" />
        </div>

        <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
          <div className="flex flex-col items-end relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative flex items-center justify-end w-[112.42px] h-3.5 mt-[-1.00px] [font-family:'Manrope-Bold',Helvetica] font-bold text-[#1d1a23] text-sm text-right tracking-[0] leading-[14px] whitespace-nowrap">
              Alexander Vance
            </div>
          </div>

          <div className="flex flex-col items-end relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative flex items-center justify-end w-[83.64px] h-[15px] mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#6b38d4] text-[10px] text-right tracking-[0.50px] leading-[15px] whitespace-nowrap">
              HẠNG CAO CẤP
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
