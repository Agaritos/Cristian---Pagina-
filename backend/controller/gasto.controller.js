const model = require("../model/gastos.model");

class GastosController {
  static async ConsultarGastos(request, response) {
    const movimientos = await model.ConsultarGastos();
    response.status(200).json({
      data: movimientos,
    });
  }

 static async ConsultarCategorias(request, response) {
    const categorias = await model.ConsultarCategorias();
    response.status(200).json({
      data: categorias,
    });
  }
}


module.exports = GastosController;
