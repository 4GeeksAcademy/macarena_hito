export type Pais = "Colombia" | "Estados Unidos";
export type Moneda = "COP" | "USD";
export type EstadoPedido = "pendiente" | "completado" | "cancelado";

export interface Local {
  id: number;
  nombre: string;
  ciudad: string;
  pais: Pais;
  ventasDiarias: number;
  moneda: Moneda;
  activo: boolean;
}

export interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  moneda: Moneda;
  disponible: boolean;
}

export interface Cliente {
  id: number;
  nombre: string;
  email: string;
  brasaPoints: number;
  pais: Pais;
}

export interface Pedido {
  id: number;
  clienteId: number;
  localId: number;
  productosIds: number[];
  total: number;
  moneda: Moneda;
  estado: EstadoPedido;
  fecha: string;
}

export interface Proveedor {
  id: number;
  nombre: string;
  categoria: string;
  pais: Pais;
  activo: boolean;
}

export interface Compra {
  id: number;
  proveedorId: number;
  localId: number;
  producto: string;
  cantidad: number;
  total: number;
  moneda: Moneda;
  fecha: string;
}

export interface Venta {
  id: number;
  localId: number;
  total: number;
  moneda: Moneda;
  fecha: string;
}

export interface Empleado {
  id: number;
  nombre: string;
  cargo: string;
  localId: number;
  pais: Pais;
  activo: boolean;
}