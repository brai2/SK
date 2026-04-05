import { useState } from "react";
//import icon9 from "./icon-9.svg";
//import icon10 from "./icon-10.svg";
//import icon11 from "./icon-11.svg";
//import icon12 from "./icon-12.svg";
//import icon13 from "./icon-13.svg";

const navItems = [
  {
    id: "home",
    label: "Trang chủ",
    icon: icon9,
    iconClass: "w-4 h-[18px]",
    active: true,
  },
  {
    id: "events",
    label: "Sự kiện",
    icon: icon10,
    iconClass: "w-[18px] h-5",
    active: false,
  },
  {
    id: "tickets",
    label: "Vé",
    icon: icon11,
    iconClass: "w-5 h-4",
    active: false,
  },
  {
    id: "analytics",
    label: "Phân tích",
    icon: icon12,
    iconClass: "w-[22px] h-[17px]",
    active: false,
  },
  {
    id: "settings",
    label: "Cài đặt",
    icon: icon13,
    iconClass: "w-[20.1px] h-5",
    active: false,
  },
];

export const EventDashboardSidebarSection = () => {
  const [activeItem, setActiveItem] = useState("home");

  return (
    <div className="flex flex-col w-64 h-[1758px] items-start justify-between px-4 py-8 absolute top-0 left-0 bg-[#f8f1fe]">
      <div className="pt-0 pb-12 px-0 self-stretch w-full flex-[0_0_auto] flex flex-col items-start relative">
        <div className="flex flex-col items-start gap-1 px-4 py-0 relative self-stretch w-full flex-[0_0_auto]">
          <p className="relative flex items-center w-[187.89px] h-7 mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#6b38d4] text-xl tracking-[0] leading-7 whitespace-nowrap">
            Quản lý Kỹ thuật số
          </p>

          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-slate-400 text-[10px] tracking-[1.00px] leading-[15px]">
              QUẢN LÝ CAO CẤP
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-2 relative flex-1 self-stretch w-full grow">
        {navItems.map((item) => {
          const isActive = activeItem === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`flex items-center gap-3 px-4 py-3 relative self-stretch w-full flex-[0_0_auto] text-left ${
                isActive ? "bg-[#ffffff80] rounded-3xl" : ""
              }`}
            >
              <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <img
                  className={`relative ${item.iconClass}`}
                  alt="Icon"
                  src={item.icon}
                />
              </div>

              <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <div
                  className={`relative flex items-center h-5 mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-sm tracking-[-0.35px] leading-5 whitespace-nowrap ${
                    isActive ? "text-[#6b38d4]" : "text-slate-500"
                  }`}
                >
                  {item.label}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-3 p-4 relative self-stretch w-full flex-[0_0_auto] bg-[#ffffff4c] rounded-2xl">
        <div className="relative max-w-56 w-10 h-10 rounded-full shadow-[0px_0px_0px_2px_#6b38d41a] bg-[url(/concierge-profile.png)] bg-cover bg-[50%_50%]" />

        <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative flex items-center w-[98.52px] h-4 mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#1d1a23] text-xs tracking-[0] leading-4 whitespace-nowrap">
              Alexander Vance
            </div>
          </div>

          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative flex items-center w-[82.8px] h-[15px] mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-slate-500 text-[10px] tracking-[0] leading-[15px] whitespace-nowrap">
              Giám đốc Sự kiện
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
