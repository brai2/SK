const Order = require("../models/Order");

// Tạo đơn hàng mới
exports.createOrder = async (req, res) => {
  try {
    const { userId, eventId, ticketQuantity, totalPrice, paymentMethod, status } = req.body;

    // 1. Kiểm tra các trường bắt buộc (Không có cái này là báo lỗi 400 ngay)
    if (!userId || !eventId || !ticketQuantity || !totalPrice) {
      return res.status(400).json({ message: "Vui lòng nhập đầy đủ thông tin đơn hàng!" });
    }

    // 2. Tạo object đơn hàng với các giá trị mặc định (Tùy chọn chuyên nghiệp)
    const newOrder = new Order({
      userId,
      eventId,
      ticketQuantity,
      totalPrice,
      // Nếu Thunder Client không gửi paymentMethod, mặc định là "Chuyển khoản"
      paymentMethod: paymentMethod || "Chuyển khoản",
      // Nếu Thunder Client không gửi status, mặc định là "pending"
      status: status || "pending"
    });

    const savedOrder = await newOrder.save();
    res.status(201).json({
      success: true,
      message: "Đặt vé thành công!",
      data: savedOrder
    });
  } catch (err) {
    res.status(500).json({ message: "Lỗi máy chủ khi tạo đơn hàng", error: err.message });
  }
};

// Lấy danh sách đơn hàng của một người dùng cụ thể
exports.getOrdersByUserId = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId })
      .populate('eventId', 'name date location')
      .sort({ createdAt: -1 });

    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: "Lỗi khi lấy danh sách đơn hàng", error: err.message });
  }
};

// Lấy toàn bộ đơn hàng cho Admin
exports.getAllOrders = async (req, res) => {
  try {
    // Chỉ lấy dữ liệu thô từ bảng Order, không dùng .populate()
    const orders = await Order.find().sort({ createdAt: -1 }); 
    res.status(200).json(orders);
  } catch (err) {
    // Trả về lỗi chi tiết để mình dễ bắt bệnh nếu vẫn hỏng
    res.status(500).json({ message: "Lỗi lấy dữ liệu", error: err.message });
  }
};

// Cập nhật trạng thái
exports.updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json({ message: "Lỗi cập nhật", error: err.message });
  }
};

// Hàm xóa đơn hàng
exports.deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deletedOrder) {
      return res.status(404).json({ message: "Không tìm thấy đơn hàng để xóa" });
    }
    res.status(200).json({ message: "Đã xóa đơn hàng thành công!" });
  } catch (err) {
    res.status(500).json({ message: "Lỗi khi xóa", error: err.message });
  }
};