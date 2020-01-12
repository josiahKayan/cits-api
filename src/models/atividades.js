const mongoose = require('mongoose');

const AtividadeSchema = new mongoose.Schema({
    school_user_id:String,
	classroom_id:String,
	title:String,
	description:String,
	taskhome:String,
	page_book:String
});

module.exports = mongoose.model('Atividade',AtividadeSchema);