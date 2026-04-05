//import icon2 from "./icon-2.svg";
//import icon3 from "./icon-3.svg";
//import icon4 from "./icon-4.svg";
//import icon5 from "./icon-5.svg";
//import icon14 from "./icon-14.svg";
//import icon15 from "./icon-15.svg";
import icon from "./icon.svg";
import image from "./image.svg";

const statsCards = [
  {
    id: "revenue",
    colSpan: "col-[1_/_5]",
    bgClass: "bg-white",
    shadowClass: "",
    content: "revenue",
  },
  {
    id: "tickets",
    colSpan: "col-[5_/_10]",
    bgClass: "bg-white",
    shadowClass: "shadow-[0px_12px_40px_-10px_#6b38d414]",
    content: "tickets",
  },
  {
    id: "conversion",
    colSpan: "col-[10_/_13]",
    bgClass:
      "bg-[linear-gradient(141deg,rgba(107,56,212,1)_0%,rgba(132,85,239,1)_100%)]",
    shadowClass: "",
    content: "conversion",
  },
];

const tableRows = [
  {
    id: 1,
    avatarType: "initials",
    initials: "SV",
    avatarBg:
      "bg-[linear-gradient(145deg,rgba(107,56,212,1)_0%,rgba(132,85,239,1)_100%)]",
    initialsColor: "text-white",
    name: "Sophia Valerius",
    email: "sv@renaissance.co",
    tier: "Diamond VIP Lounge",
    price: "$1,450.00",
    statusLabel: "ĐÃ XÁC NHẬN",
    statusBg: "bg-[#e9ddff]",
    statusTextColor: "text-[#23005c]",
    statusWidth: "w-[76.7px]",
    iconSrc: icon2,
    borderTop: false,
    paddingY: "pt-[33.5px] pb-[35px]",
    actionPaddingY: "py-6",
  },
  {
    id: 2,
    avatarType: "image",
    avatarImg: "/user.png",
    name: "Julian Thorne",
    email: "thorne.j@obsidian.io",
    tier: "Standard Access",
    price: "$299.00",
    statusLabel: "ĐANG CHỜ",
    statusBg: "bg-[#eddcff]",
    statusTextColor: "text-[#221534]",
    statusWidth: "w-[58.95px]",
    iconSrc: icon3,
    borderTop: true,
    paddingY: "pt-[34px] pb-[35px]",
    actionPaddingY: "py-[24.5px]",
  },
  {
    id: 3,
    avatarType: "initials",
    initials: "EL",
    avatarBg: "bg-[#e7deff]",
    initialsColor: "text-[#1e0e4e]",
    name: "Elena Laurent",
    email: "elena.l@vogue.fr",
    tier: "Press Pass (Verified)",
    price: "$0.00",
    statusLabel: "ĐÃ XÁC NHẬN",
    statusBg: "bg-[#e9ddff]",
    statusTextColor: "text-[#23005c]",
    statusWidth: "w-[76.7px]",
    iconSrc: icon4,
    borderTop: true,
    paddingY: "pt-[34px] pb-[35px]",
    actionPaddingY: "py-[24.5px]",
  },
  {
    id: 4,
    avatarType: "initials",
    initials: "MC",
    avatarBg: "bg-[#ffdad666]",
    initialsColor: "text-[#93000a]",
    name: "Marcus Chen",
    email: "m.chen@techhub.com",
    tier: "Early Bird GA",
    price: "$149.00",
    statusLabel: "ĐÃ HỦY",
    statusBg: "bg-[#ffdad6]",
    statusTextColor: "text-[#93000a]",
    statusWidth: "w-[42.27px]",
    iconSrc: icon5,
    borderTop: true,
    paddingY: "pt-[34px] pb-[34.5px]",
    actionPaddingY: "py-6",
  },
];

export const DashboardOverviewSection = () => {
  return (
    <div className="flex flex-col items-start gap-12 pt-28 pb-12 px-12 relative self-stretch w-full flex-[0_0_auto]">
      {/* Header Section */}
      <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
            <p className="relative flex items-center w-[243.31px] h-4 mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#6b38d4] text-xs tracking-[2.40px] leading-4 whitespace-nowrap">
              TỔNG QUAN BẢNG ĐIỀU KHIỂN
            </p>
          </div>
          <div className="relative w-12 h-px bg-[#6b38d433]" />
        </div>

        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          <p className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Manrope-ExtraBold',Helvetica] font-extrabold text-transparent text-[56px] leading-[56px]">
            <span className="text-[#1d1a23] tracking-[-1.57px] leading-[70px]">
              Bảng điều khiển{" "}
            </span>
            <span className="text-[#6b38d4] tracking-[0]">Quản lý</span>
          </p>
        </div>

        <div className="flex flex-col max-w-lg w-[512px] items-start pt-2 pb-0 px-0 relative flex-[0_0_auto]">
          <p className="relative w-[481.77px] h-[52px] mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#494454] text-base tracking-[0] leading-[26px]">
            Chào mừng trở lại, Alexander. Các sự kiện gala cao cấp của bạn
            <br />
            đang đạt hiệu suất cao hơn 24% so với dự kiến trong quý này.
          </p>
        </div>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-12 grid-rows-[284px] h-fit gap-8 w-full">
        {/* Revenue Card */}
        <div className="relative row-[1_/_2] col-[1_/_5] w-full h-fit flex flex-col items-start justify-between p-8 bg-white rounded-3xl overflow-hidden">
          <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center justify-between pr-[2.84e-14px] pl-0 py-0 relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start p-3 relative flex-[0_0_auto] bg-[#e9ddff] rounded-3xl">
                <img className="relative w-5 h-3" alt="Icon" src="" />
              </div>
              <div className="inline-flex flex-col items-start px-3 py-1 relative flex-[0_0_auto] bg-[#6b38d40d] rounded-full">
                <div className="relative flex items-center w-[69.41px] h-[15px] mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#6b38d4] text-[10px] tracking-[0] leading-[15px] whitespace-nowrap">
                  DOANH SỐ VÉ
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start pt-7 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#494454] text-sm tracking-[0] leading-5">
                Tổng Doanh thu
              </div>
            </div>

            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Manrope-Bold',Helvetica] font-bold text-[#1d1a23] text-[40px] tracking-[-1.00px] leading-[60px]">
                $842.5k
              </div>
            </div>
          </div>

          <div className="pt-6 pb-0 px-0 self-stretch w-full flex-[0_0_auto] flex flex-col items-start relative">
            <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <div className="relative flex items-center w-[44.5px] h-4 mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-emerald-500 text-xs tracking-[0] leading-4 whitespace-nowrap">
                  +12.4%
                </div>
              </div>
              <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <div className="relative flex items-center w-[102.58px] h-4 mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#7b7486] text-xs tracking-[0] leading-4 whitespace-nowrap">
                  so với tháng trước
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#6b38d40d] rounded-full" />
        </div>

        {/* Active Tickets Card */}
        <div className="relative row-[1_/_2] col-[5_/_10] w-full h-fit flex flex-col items-start justify-between p-8 bg-white rounded-3xl overflow-hidden shadow-[0px_12px_40px_-10px_#6b38d414]">
          <div className="pt-0 pb-8 px-0 self-stretch w-full flex-[0_0_auto] flex flex-col items-start relative">
            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start p-3 relative flex-[0_0_auto] bg-[#eddcff] rounded-3xl">
                <img className="relative w-5 h-4" alt="Icon" src="" />
              </div>

              <div className="inline-flex items-start relative flex-[0_0_auto]">
                <div className="bg-[url(/user-1.png)] relative w-8 h-8 rounded-full border-2 border-solid border-[#fef7ff] bg-cover bg-[50%_50%]" />
                <div className="flex flex-col w-8 h-8 items-start relative -ml-2">
                  <div className="bg-[url(/user-2.png)] relative w-8 h-8 rounded-full border-2 border-solid border-[#fef7ff] bg-cover bg-[50%_50%]" />
                </div>
                <div className="flex flex-col w-8 h-8 items-start relative -ml-2">
                  <div className="flex w-8 h-8 items-center justify-center pt-1.5 pb-[7px] px-0 relative bg-[#e9ddff] rounded-full border-2 border-solid border-[#fef7ff]">
                    <div className="relative flex items-center justify-center w-[17.19px] h-[15px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#6b38d4] text-[10px] text-center tracking-[0] leading-[15px] whitespace-nowrap">
                      +12
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#494454] text-sm tracking-[0] leading-5">
                Vé đang hoạt động
              </div>
            </div>

            <div className="relative self-stretch w-full h-[84px]">
              <div className="absolute top-0 left-0 w-[127px] h-[84px] flex items-center [font-family:'Manrope-Bold',Helvetica] font-bold text-[#1d1a23] text-[56px] tracking-[-2.80px] leading-[84px] whitespace-nowrap">
                1,284
              </div>

              <div className="inline-flex flex-col items-start absolute top-[51px] left-[143px]">
                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative flex items-center w-[93.38px] h-4 mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#6b38d4] text-xs tracking-[0] leading-4 whitespace-nowrap">
                    Đã bán hôm nay
                  </div>
                </div>
                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative flex items-center w-[84.3px] h-[15px] mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#7b7486] text-[10px] tracking-[0] leading-[15px] whitespace-nowrap">
                    Trung bình 42/giờ
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[30px] pt-6 pb-0 px-0 self-stretch w-full flex flex-col items-start relative">
            <div className="relative self-stretch w-full h-1.5 bg-[#f8f1fe] rounded-full overflow-hidden">
              <div className="w-[78.00%] h-full bg-[#6b38d4] rounded-full" />
            </div>
          </div>
        </div>

        {/* Conversion Rate Card */}
        <div className="relative row-[1_/_2] col-[10_/_13] w-full h-fit flex flex-col items-start justify-between p-8 rounded-3xl bg-[linear-gradient(141deg,rgba(107,56,212,1)_0%,rgba(132,85,239,1)_100%)]">
          <div className="absolute w-full h-full top-0 left-0 bg-[#ffffff01] rounded-3xl shadow-[0px_20px_50px_-15px_#6b38d44c]" />

          <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto] mt-[-250px]">
            <div className="inline-flex flex-col items-start p-3 relative flex-[0_0_auto] bg-[#ffffff33] rounded-3xl backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)]">
              <img
                className="relative w-[22px] h-[22px]"
                alt="Icon"
                src=""
              />
            </div>

            <div className="flex flex-col items-start pt-7 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#ffffffcc] text-sm tracking-[0] leading-5">
                Tỷ lệ chuyển đổi
              </div>
            </div>

            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Manrope-Bold',Helvetica] font-bold text-white text-[40px] tracking-[-1.00px] leading-[60px]">
                4.8%
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start pt-4 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto] mt-[-250px]">
            <button className="all-[unset] box-border flex flex-col justify-center px-0 py-3 self-stretch w-full bg-white rounded-3xl items-center relative flex-[0_0_auto]">
              <div className="relative flex items-center justify-center w-[87.77px] h-4 mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#6b38d4] text-xs text-center tracking-[0.60px] leading-4 whitespace-nowrap">
                XEM CHI TIẾT
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Featured Event Section */}
      <div className="flex flex-col items-start gap-8 pt-4 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          <p className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#1d1a23] text-2xl tracking-[0] leading-8">
            Quản lý Sự kiện Nổi bật
          </p>
        </div>

        <div className="relative self-stretch w-full h-[400px] rounded-3xl overflow-hidden bg-[url(/event-hero.png)] bg-cover bg-[50%_50%]">
          <div className="absolute w-full h-full top-0 left-0 bg-[linear-gradient(90deg,rgba(29,26,35,0.9)_0%,rgba(29,26,35,0)_100%)]" />

          <div className="flex flex-col max-w-md w-[calc(100%_-_480px)] h-[69.38%] items-start gap-[6.9px] pt-[37px] pb-10 px-10 absolute top-[15.31%] left-12 bg-[#ffffff66] rounded-3xl border border-solid border-[#fffbff1a] backdrop-blur-lg backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(16px)_brightness(100%)]">
            <div className="inline-flex items-start px-3 py-[2.5px] relative flex-[0_0_auto] bg-[#6b38d4] rounded-full">
              <div className="relative flex items-center w-[109.92px] h-[15px] mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[10px] tracking-[1.00px] leading-[15px] whitespace-nowrap">
                RA MẮT TOÀN CẦU
              </div>
            </div>

            <div className="flex flex-col items-start pt-[7.1px] pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Manrope-Bold',Helvetica] font-bold text-white text-3xl tracking-[0] leading-9">
                Nebula Arts Festival
              </div>
            </div>

            <div className="flex flex-col items-start pt-0 pb-[0.62px] px-0 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#ffffffcc] text-sm tracking-[0] leading-[22.8px]">
                Quản lý việc phát hành vé VIP và hậu trường độc
                <br />
                quyền cho buổi khai mạc chuyến lưu diễn quốc tế.
              </p>
            </div>

            <div className="grid grid-cols-2 grid-rows-[43px] h-fit gap-6 pt-[25.1px] pb-0 px-0">
              <div className="relative row-[1_/_2] col-[1_/_2] w-full h-fit flex flex-col items-start">
                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#ffffff99] text-[10px] tracking-[1.00px] leading-[15px]">
                    SỨC CHỨA
                  </div>
                </div>
                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Manrope-Bold',Helvetica] font-bold text-white text-xl tracking-[0] leading-7">
                    15,000
                  </div>
                </div>
              </div>

              <div className="relative row-[1_/_2] col-[2_/_3] w-full h-fit flex flex-col items-start">
                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#ffffff99] text-[10px] tracking-[1.00px] leading-[15px]">
                    HẠNG GIÁ
                  </div>
                </div>
                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Manrope-Bold',Helvetica] font-bold text-white text-xl tracking-[0] leading-7">
                    $299 - $1.2k
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Bookings Section */}
      <div className="flex flex-col items-start gap-8 pt-4 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-center justify-between pr-[1.14e-13px] pl-0 py-0 relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
            <div className="relative flex items-center w-[168.48px] h-8 mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#1d1a23] text-2xl tracking-[0] leading-8 whitespace-nowrap">
              Đặt vé Gần đây
            </div>
          </div>

          <div className="inline-flex gap-1 items-center relative flex-[0_0_auto]">
            <p className="relative flex items-center justify-center w-[136.91px] h-5 mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#6b38d4] text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
              Xem tất cả giao dịch
            </p>
            <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
              <img className="relative w-[4.93px] h-2" alt="Icon" src="" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] bg-[#f8f1fe] rounded-3xl overflow-hidden">
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            {/* Table Header */}
            <div className="flex items-start justify-center relative self-stretch w-full flex-[0_0_auto] bg-[#ede5f380]">
              <div className="flex flex-col w-[245.55px] items-start px-8 py-6 relative">
                <div className="relative flex items-center w-[78.53px] h-3 mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#7b7486] text-[10px] tracking-[1.00px] leading-[normal] whitespace-nowrap">
                  KHÁCH HÀNG
                </div>
              </div>
              <div className="w-[219.66px] items-start flex flex-col px-8 py-6 relative">
                <div className="relative flex items-center w-[84.16px] h-3 mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#7b7486] text-[10px] tracking-[1.00px] leading-[normal] whitespace-nowrap">
                  HẠNG SỰ KIỆN
                </div>
              </div>
              <div className="w-[142.2px] items-start flex flex-col px-8 py-6 relative">
                <div className="relative flex items-center w-[20.55px] h-3 mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#7b7486] text-[10px] tracking-[1.00px] leading-[normal] whitespace-nowrap">
                  GIÁ
                </div>
              </div>
              <div className="w-[187.14px] items-start flex flex-col px-8 py-6 relative">
                <div className="relative flex items-center w-[72.11px] h-3 mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#7b7486] text-[10px] tracking-[1.00px] leading-[normal] whitespace-nowrap">
                  TRẠNG THÁI
                </div>
              </div>
              <div className="w-[133.45px] items-end flex flex-col px-8 py-6 relative">
                <div className="relative flex items-center justify-end w-[59.13px] h-3 mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#7b7486] text-[10px] text-right tracking-[1.00px] leading-[normal] whitespace-nowrap">
                  THAO TÁC
                </div>
              </div>
            </div>

            {/* Table Rows */}
            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              {tableRows.map((row) => (
                <div
                  key={row.id}
                  className={`flex items-center justify-center pl-8 pr-0 py-0 relative self-stretch w-full flex-[0_0_auto] ${
                    row.borderTop
                      ? "-mt-px border-t [border-top-style:solid] border-[#ede5f333]"
                      : ""
                  }`}
                >
                  {/* Customer Column */}
                  <div className="flex w-[181.55px] items-center gap-4 relative">
                    {row.avatarType === "image" ? (
                      <div
                        className="relative max-w-[181.55px] w-10 h-10 rounded-3xl bg-cover bg-[50%_50%]"
                        style={{ backgroundImage: `url(${row.avatarImg})` }}
                      />
                    ) : (
                      <div
                        className={`flex w-10 h-10 items-center justify-center pt-[11.5px] pb-[12.5px] px-0 relative ${row.avatarBg} rounded-3xl`}
                      >
                        <div
                          className={`relative flex items-center justify-center h-4 mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold ${row.initialsColor} text-xs text-center tracking-[0] leading-4 whitespace-nowrap`}
                        >
                          {row.initials}
                        </div>
                      </div>
                    )}

                    <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                        <div className="relative flex items-center h-5 mt-[-1.00px] [font-family:'Manrope-Bold',Helvetica] font-bold text-[#1d1a23] text-sm tracking-[0] leading-5 whitespace-nowrap">
                          {row.name}
                        </div>
                      </div>
                      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                        <div className="relative flex items-center h-3 mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#7b7486] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
                          {row.email}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tier Column */}
                  <div
                    className={`w-[251.66px] items-start pl-16 pr-8 ${row.paddingY} flex flex-col relative`}
                  >
                    <div className="relative flex items-center h-5 mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#494454] text-sm tracking-[0] leading-5 whitespace-nowrap">
                      {row.tier}
                    </div>
                  </div>

                  {/* Price Column */}
                  <div
                    className={`w-[142.2px] items-start ${row.paddingY} px-8 flex flex-col relative`}
                  >
                    <div className="relative flex items-center h-5 mt-[-1.00px] [font-family:'Manrope-Bold',Helvetica] font-bold text-[#1d1a23] text-sm tracking-[0] leading-5 whitespace-nowrap">
                      {row.price}
                    </div>
                  </div>

                  {/* Status Column */}
                  <div
                    className={`w-[187.14px] items-start px-8 ${row.id === 1 ? "pt-[34px] pb-[34.5px]" : row.id === 4 ? "pt-[34.5px] pb-[34px]" : "py-[34.5px]"} flex flex-col relative`}
                  >
                    <div
                      className={`inline-flex items-start px-4 py-1 relative flex-[0_0_auto] ${row.statusBg} rounded-full`}
                    >
                      <div
                        className={`relative flex items-center ${row.statusWidth} h-3 mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold ${row.statusTextColor} text-[10px] tracking-[0.50px] leading-[normal] whitespace-nowrap`}
                      >
                        {row.statusLabel}
                      </div>
                    </div>
                  </div>

                  {/* Action Column */}
                  <div
                    className={`w-[133.45px] items-end px-8 ${row.actionPaddingY} flex flex-col relative`}
                  >
                    <div className="inline-flex items-center justify-center p-2 relative flex-[0_0_auto]">
                      <div className="inline-flex items-start justify-center relative flex-[0_0_auto]">
                        <img
                          className="relative w-4 h-1"
                          alt="Icon"
                          src=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
