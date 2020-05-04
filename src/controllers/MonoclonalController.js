const Monoclonal = require('../models/Monoclonal');





module.exports = {
    async create(req, res) {
        const { monoclonalId, name, target, concentration, dose, cycles,
            risk,
            infusionTime,
            preMedication,
            filter,
            photosensibility,
            other,



        } = req.body

        const monoclonalMed = await Monoclonal.create({
            id: monoclonalId,
            name: name,
            target: target,
            concentration: concentration,
            dose: dose,
            cycles: cycles,
            risk: risk,
            infusionTime: infusionTime,
            preMedication: preMedication,
            filter: filter,
            photosensibility: photosensibility,
            other: other
        })

        return res.json(monoclonalMed)

    }
}
        
        
          
            




        

        

    