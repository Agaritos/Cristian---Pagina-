const db = require("../config/db");

class GastosModel {
  static async ConsultarGastos() {
    const [resultados] = await db.query("SELECT * FROM movimientos");
//[datos][metadatos]
    return resultados; //estamos retornando los datos de la db
  }
}
module.exports = GastosModel;
