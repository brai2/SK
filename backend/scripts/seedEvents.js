/**
 * Chạy: node scripts/seedEvents.js (từ thư mục backend, đã cấu hình MONGO_URI trong .env)
 */
require("dotenv").config();
const mongoose = require("mongoose");
const Event = require("../models/Event");

const samples = [
  {
    title: "Tech Future Summit 2024",
    description:
      "The annual convergence of design and technology leaders. Exploring AI-driven creative workflows and sustainable architectural tech.",
    startsAt: new Date("2026-03-24T09:00:00"),
    venue: "Convention Center, Singapore",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXGWp3QldURMSrAXNFD0oLfwUqZFOEf-aQEbCZKzjJv1RIZgQAqglkeLssjrvCrAfN3WGTYVfWqdHfaVBiHWmW8Uv05WpBbK1kRlPCKefQWJaXBZlkI6H9l0jRBPmsd-DoOFjkYkxl3s19r8pKMfR_D31a5SIIFZ-OccAvakW7Hw7xAkD7BriseOW96aq7W2LfVRQU_X_7HP6vjlkgBRMIUDA5QLlyWqjVCKADypcC42zvvH74n_pXcC4UudDlQsH_KQHG3zVdv9gW",
    status: "ongoing",
    isFeatured: true,
    iconKey: "campaign",
    metrics: { totalAttendees: 4200, ticketsSoldPercent: 88, revenue: 180000 },
    lastAdminAction: "Cập nhật giá vé",
  },
  {
    title: "Modernism in UX Workshop",
    description: "Workshop thiết kế UX theo tinh thần modernism.",
    startsAt: new Date("2026-04-12T14:00:00"),
    venue: "Virtual Event",
    status: "draft",
    isFeatured: false,
    iconKey: "palette",
    metrics: { totalAttendees: 0, ticketsSoldPercent: 0, revenue: 0 },
    lastAdminAction: "Lưu bản nháp",
  },
  {
    title: "Architectural Gala Dinner",
    description: "Tiệc tối kiến trúc thường niên.",
    startsAt: new Date("2026-02-28T19:00:00"),
    venue: "Ritz-Carlton",
    status: "completed",
    isFeatured: false,
    iconKey: "restaurant",
    metrics: { totalAttendees: 320, ticketsSoldPercent: 100, revenue: 45000 },
    lastAdminAction: "Đã lưu trữ",
  },
  {
    title: "Sustainable City Keynote",
    description: "Keynote về đô thị bền vững.",
    startsAt: new Date("2026-03-15T10:00:00"),
    venue: "City Hall Arena",
    status: "ongoing",
    isFeatured: false,
    iconKey: "campaign",
    metrics: { totalAttendees: 1200, ticketsSoldPercent: 72, revenue: 19500 },
    lastAdminAction: "Cập nhật địa điểm",
  },
];

async function run() {
  await mongoose.connect(process.env.MONGO_URI);
  await Event.deleteMany({ title: { $in: samples.map((s) => s.title) } });
  await Event.insertMany(samples);
  console.log("Đã seed", samples.length, "sự kiện mẫu.");
  await mongoose.disconnect();
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
