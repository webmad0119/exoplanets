const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const exoplanet = new Schema({
  pl_name : String,
  pl_radj: Number
});

const Exoplanet = mongoose.model('Exoplanet', exoplanet);
module.exports = Exoplanet;