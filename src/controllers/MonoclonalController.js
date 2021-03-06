const Monoclonal = require('../models/Monoclonal');


module.exports = {
    async index(req, res) {
        const monoclonals = await Monoclonal.find()
        return res.json(monoclonals)
    },

    async create(req, res){
        
        const { monoclonalId, name, target, concentration, dose, cycles, risk, infusionTime, premedication,
        filter, photosensibility, other } = req.body

        let monoclonal = await Monoclonal.findOne({name})
        if(!monoclonal) {
            monoclonal = await Monoclonal.create({monoclonalId, name, target, concentration,
            dose, cycles, risk, infusionTime, premedication,
            filter, photosensibility, other})
        }
        

        return res.json(monoclonal)
        
        },
        
        
    }


    


        

        

    