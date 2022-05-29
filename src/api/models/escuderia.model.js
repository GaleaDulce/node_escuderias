
const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const escuderiaSchema = new Schema(
  {
    escu: { type: String, trim:true, required: true },
    year: { type: Number, trim: true, required: false },
    pilotName: { type: String, trim:true, required: true },
    image: { type: String, trim:true, required: true },
  },
  { timestamps: true }
);


const Escuderia = mongoose.model('escuderias',escuderiaSchema);


module.exports = Escuderia