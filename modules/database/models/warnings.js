const mongoose = require('mongoose');

const warningSchema = mongoose.Schema({
	userID: String,
	guildID: String,
	Warnings: Number,
	Reason: String,
	IssueDate: Number,
});

module.exports = mongoose.model('Warnings', warningSchema);
