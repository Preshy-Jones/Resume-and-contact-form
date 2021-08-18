const mongoose = require("mongoose");

const contact = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	subject: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	message: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("Contact", contact);
