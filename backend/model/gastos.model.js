const { response } = require("express");
const db = require("../config/db");

class GastosModel {
  
  static async ConsultarGastos(request, response) {
    const [resultados] = await db.query("SELECT * FROM movimientos");
//[datos][metadatos]
    return resultados; //estamos retornando los datos de la db
  }



static async ConsultarCategorias(request,response) {
    const [resultados] = await db.query("SELECT * FROM categorias");
//[datos][metadatos]
    return resultados; //estamos retornando los datos de la db
  }}
module.exports = GastosModel;
