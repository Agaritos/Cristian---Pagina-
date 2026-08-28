const express = require ("express")
const router = express.Router()
const controller = require("../controller/gasto.controller")

router.get("/movimientos",controller.ConsultarGastos)


module.exports = router