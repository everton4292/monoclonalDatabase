const mongoose = require('mongoose');

const MonoclonalSchema = new mongoose.Schema({
    monoclonalId: Number,
    name: String,
    target: String,
    concentration: String,
    dose: String,
    cycles: String,
    risk: String,
    infusionTime: String,
    premedication: String,
    filter: String,
    photosensibility: String,
    other: String,
    
    })
 

module.exports = mongoose.model('Monoclonal', MonoclonalSchema);