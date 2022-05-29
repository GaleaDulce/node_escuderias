const EscuderiasRoutes = require('express').Router();


const { getEscuderias, getEscuderiaById, getEscuderiaByEscu, getEscuderiaByYear, getEscuderiaByPilotName, postNewEscuderia, deleteEscuderia, patchEscuderia } = require('../controllers/escuderias.controller');


EscuderiasRoutes.get('/', getEscuderias);
EscuderiasRoutes.get('/id/:id', getEscuderiaById);
EscuderiasRoutes.get('/escu/:escu', getEscuderiaByEscu);
EscuderiasRoutes.get('/year/:year', getEscuderiaByYear);
EscuderiasRoutes.get('/pilotName/:pilotName', getEscuderiaByPilotName);
EscuderiasRoutes.post('/', postNewEscuderia);
EscuderiasRoutes.delete('/:id', deleteEscuderia);
EscuderiasRoutes.patch('/:id', patchEscuderia)


module.exports = EscuderiasRoutes;