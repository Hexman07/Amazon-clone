const asyncHandler = require("express-async-handler");
const Order = require("../models/OrderModel");

module.exports = { createOrder, getOrders };
