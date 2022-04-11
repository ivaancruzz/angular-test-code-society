import { Injectable } from '@angular/core';
import {ModelTarifa} from './model/tarifa'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //data
  private data: ModelTarifa[] = [{
    tarifa_id: 56333,
    opciones: [
      {opcion: "Tipo de numeración", seleccion: "Aleatorio"},
      {opcion: "Lugar de retorno/Retiro", seleccion: "Terminal"},
    ],
    condiciones: [
      {condicion: "Dias de energía", descripcion: "5"},
      {condicion: "Dias de energía", descripcion: "5"},
      {condicion: "Observación", descripcion: ""},
      {condicion: "Url", descripcion: ""}
    ],
    tipo_gastos: [
      {tipo_gasto: "Agenciamiento maritimo", monto: 196.29},
      {tipo_gasto: "Comición de agenciamiento", monto: 55},
      {tipo_gasto: "Gate Out", monto: 363.5},
      {tipo_gasto: "Servicio de Puerto", monto: 182.01},
      {tipo_gasto: "Transporte", monto: 1213.18},
      {tipo_gasto: "Termoregistro", monto: 17},
      {tipo_gasto: "Certificado de Origen", monto: 15},
      {tipo_gasto: "Courriere", monto: 30},
      {tipo_gasto: "Ingreso al Terminal", monto: 90.79},
    ],
    post_nombre: "APMT IS Paita",
    post_provincia: "PAITA",
    empresa_direccion_puerto_nombre: "TPE Paita",
    linea_naviera_nombre: "CGM - COMPAGINE GENERALI MARITIME",
    transporte_unidad_negocio_nombre: "TRUCKING REEFER",
    monto_total: 2292.77
  },
  {
    tarifa_id: 56334,
    opciones: [
      {opcion: "Tipo de numeración", seleccion: "Aleatorio"},
      {opcion: "Lugar de retorno/Retiro", seleccion: "Terminal"},
    ],
    condiciones: [
      {condicion: "Dias de energía", descripcion: "5"},
      {condicion: "Dias de energía", descripcion: "5"},
      {condicion: "Observación", descripcion: ""},
      {condicion: "Url", descripcion: ""}
    ],
    tipo_gastos: [
      {tipo_gasto: "Agenciamiento maritimo", monto: 196.29},
      {tipo_gasto: "Comición de agenciamiento", monto: 55},
      {tipo_gasto: "Gate Out", monto: 363.5},
      {tipo_gasto: "Servicio de Puerto", monto: 182.01},
      {tipo_gasto: "Transporte", monto: 1213.18},
      {tipo_gasto: "Termoregistro", monto: 17},
      {tipo_gasto: "Certificado de Origen", monto: 15},
      {tipo_gasto: "Courriere", monto: 30},
      {tipo_gasto: "Ingreso al Terminal", monto: 90.79},
    ],
    post_nombre: "APMT IS Paita",
    post_provincia: "PAITA",
    empresa_direccion_puerto_nombre: "TPE Paita",
    linea_naviera_nombre: "CGM - COMPAGINE GENERALI MARITIME",
    transporte_unidad_negocio_nombre: "TRUCKING REEFER",
    monto_total: 2292.77
  },
  {
    tarifa_id: 56335,
    opciones: [
      {opcion: "Tipo de numeración", seleccion: "Aleatorio"},
      {opcion: "Lugar de retorno/Retiro", seleccion: "Terminal"},
    ],
    condiciones: [
      {condicion: "Dias de energía", descripcion: "5"},
      {condicion: "Dias de energía", descripcion: "5"},
      {condicion: "Observación", descripcion: ""},
      {condicion: "Url", descripcion: ""}
    ],
    tipo_gastos: [
      {tipo_gasto: "Agenciamiento maritimo", monto: 196.29},
      {tipo_gasto: "Comición de agenciamiento", monto: 55},
      {tipo_gasto: "Gate Out", monto: 363.5},
      {tipo_gasto: "Servicio de Puerto", monto: 182.01},
      {tipo_gasto: "Transporte", monto: 1213.18},
      {tipo_gasto: "Termoregistro", monto: 17},
      {tipo_gasto: "Certificado de Origen", monto: 15},
      {tipo_gasto: "Courriere", monto: 30},
      {tipo_gasto: "Ingreso al Terminal", monto: 90.79},
    ],
    post_nombre: "APMT IS Paita",
    post_provincia: "PAITA",
    empresa_direccion_puerto_nombre: "TPE Paita",
    linea_naviera_nombre: "CGM - COMPAGINE GENERALI MARITIME",
    transporte_unidad_negocio_nombre: "TRUCKING REEFER",
    monto_total: 2292.77
  }
]

  getData(){
    return this.data
  }
}
