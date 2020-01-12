
const Atividade = require('../models/atividades');

module.exports ={

    async index(req,res){
        
        const services = await Atividade.find();

        return res.json(services);
    },
    async store(req,res){
        
        const {school_user_id,classroom_id,title,description,taskhome,page_book} = req.body; 

        //let atividade = await Atividade.find({school_user_id:school_user_id});

        atividade = await Atividade.create({
                school_user_id,
                classroom_id,
                title,
                description,
                taskhome,
                page_book
        });
        
        return res.json(atividade);
    }
}