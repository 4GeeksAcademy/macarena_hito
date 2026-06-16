import type { Cliente, Local, Pedido, Producto, Proveedor } from "../types/models";

export function isValidLocal(local: Local): boolean {
  return (
    local.id > 0 &&
    local.nombre.trim() !== "" &&
    local.ciudad.trim() !== "" &&
    local.ventasDiarias >= 0
  );
}

export function isValidProducto(producto: Producto): boolean {
  return (
    producto.id > 0 &&
    producto.nombre.trim() !== "" &&
    producto.categoria.trim() !== "" &&
    producto.precio > 0
  );
}

export function isValidCliente(cliente: Cliente): boolean {
  return (
    cliente.id > 0 &&
    cliente.nombre.trim() !== "" &&
    cliente.email.includes("@") &&
    cliente.brasaPoints >= 0
  );
}

export function isValidPedido(pedido: Pedido): boolean {
  return (
    pedido.id > 0 &&
    pedido.clienteId > 0 &&
    pedido.localId > 0 &&
    pedido.productosIds.length > 0 &&
    pedido.total > 0 &&
    pedido.fecha.trim() !== ""
  );
}

export function isValidProveedor(proveedor: Proveedor): boolean {
  return (
    proveedor.id > 0 &&
    proveedor.nombre.trim() !== "" &&
    proveedor.categoria.trim() !== ""
  );
}