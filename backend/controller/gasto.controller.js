const model = require("../model/gastos.model");

class GastosController {
  static async ConsultarGastos(request, response) {
    const movimientos = await model.ConsultarGastos();
    response.status(200).json({
      data: movimientos,
    });
  }
}
module.exports = GastosController;
