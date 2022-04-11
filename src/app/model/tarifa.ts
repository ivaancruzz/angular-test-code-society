export interface ModelTarifa{
    tarifa_id: number,
    opciones: Option[],
    condiciones: Condition[],
    tipo_gastos: ExpenseType[],
    post_nombre: string,
    post_provincia: string,
    empresa_direccion_puerto_nombre: string,
    linea_naviera_nombre: string,
    transporte_unidad_negocio_nombre: string,
    monto_total: number
}

type Option = {
    opcion: string,
    seleccion: string,
}

type Condition = {
    condicion: string,
    descripcion: string
}

type ExpenseType = {
    tipo_gasto: string,
    monto: number
}