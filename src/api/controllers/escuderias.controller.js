const Escuderia = require("../models/escuderia.model");

const getEscuderias = async (req, res, next) => {
  try {
    const allEscuderias = await Escuderia.find();

    return res.status(200).json(allEscuderias);
  } catch (error) {
    return next(error);
  }
};

const getEscuderiaById = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const EscuderiaDB = await Escuderia.findById(id);

    return res.status(200).json(EscuderiaDB);
  } catch (error) {
    return next(error);
  }
};

const getEscuderiaByEscu= async (req, res, next) => {
  try {
    const { escu } = req.params;

    const EscuderiaDB = await Escuderia.findOne({ escu: escu });

    return res.status(200).json(EscuderiaDB);
  } catch (error) {
    return next(error);
  }
};

const getEscuderiaByYear = async (req, res, next) => {
  try {
    const { year } = req.params;

    const Escuderias = await Escuderia.find({ year: year });

    return res.status(200).json(Escuderias);
  } catch (error) {
    return next(error);
  }
};

const getEscuderiaByPilotName = async (req, res, next) => {
  try {
    const { pilotName } = req.params;

    const Escuderias = await Escuderia.find({ pilotName: pilotName });

    return res.status(200).json(Escuderias);
  } catch (error) {
    return next(error);
  }
};

const postNewEscuderia = async (req, res, next) => {
  try {
    const newEscuderia = new Escuderia(req.body);

    const escuderiaDB = await newEscuderia.save();

    return res.status(200).json(escuderiaDB);
  } catch (error) {
    return next(error);
  }
};

const deleteEscuderia = async (req, res, next) => {
  try {
    const { id } = req.params;

    const escuderiaEliminada = await Escuderia.findByIdAndDelete(id);

    return res.status(200).json(escuderiaEliminada);
  } catch (error) {
    return next(error);
  }
};

const patchEscuderia = async (req, res, next) => {
  try {
    const { id } = req.params;

    const patchEscuderia = new Escuderia(req.body);

    patchEscuderia._id = id;

    const EscuderiaDB = await Escuderia.findByIdAndUpdate(id, patchEscuderia);

    return res.status(200).json({ nuevo: patchEscuderia, vieja: EscuderiaDB });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getEscuderias,
  getEscuderiaById,
  getEscuderiaByEscu,
  getEscuderiaByPilotName,
  getEscuderiaByYear,
  postNewEscuderia,
  deleteEscuderia,
  patchEscuderia,
};
