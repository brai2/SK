const router = require("express").Router();
const customerController = require("../controllers/customerController");

// Lấy toàn bộ khách hàng
router.get("/", customerController.getCustomers);

// Lấy khách hàng theo ID
router.get("/:id", customerController.getCustomerById);

module.exports = router;
