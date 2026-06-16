import type { Local, Producto } from "./types/models";
import { filterItems, sortDescending, groupBy } from "./utils/collections";
import { linearSearch, binarySearchById } from "./utils/search";
import {
  countByCategory,
  sumValues,
  averageValues,
  findMaxValue,
  findMinValue,
} from "./utils/transformations";
import { isValidLocal, isValidProducto } from "./utils/validations";

const locales: Local[] = [
  {
    id: 1,
    nombre: "Brasaland Medellín Centro",
    ciudad: "Medellín",
    pais: "Colombia",
    ventasDiarias: 3200000,
    moneda: "COP",
    activo: true,
  },
  {
    id: 2,
    nombre: "Brasaland Miami",
    ciudad: "Miami",
    pais: "Estados Unidos",
    ventasDiarias: 2400,
    moneda: "USD",
    activo: true,
  },
];

const productos: Producto[] = [
  {
    id: 1,
    nombre: "Hamburguesa clásica",
    categoria: "Hamburguesas",
    precio: 12,
    moneda: "USD",
    disponible: true,
  },
  {
    id: 2,
    nombre: "Papas rústicas",
    categoria: "Acompañamientos",
    precio: 5,
    moneda: "USD",
    disponible: true,
  },
];

console.log("Locales activos:", filterItems(locales, (local) => local.activo));
console.log("Ventas ordenadas:", sortDescending(locales.map((local) => local.ventasDiarias)));
console.log("Locales por país:", groupBy(locales, (local) => local.pais));

console.log("Búsqueda lineal:", linearSearch(productos, (producto) => producto.nombre === "Papas rústicas"));
console.log("Búsqueda binaria por id:", binarySearchById(productos, 2));

console.log("Productos por categoría:", countByCategory(productos, (producto) => producto.categoria));
console.log("Total de ventas:", sumValues(locales, (local) => local.ventasDiarias));
console.log("Promedio de ventas:", averageValues(locales, (local) => local.ventasDiarias));
console.log("Local con más ventas:", findMaxValue(locales, (local) => local.ventasDiarias));
console.log("Local con menos ventas:", findMinValue(locales, (local) => local.ventasDiarias));

console.log("Local válido:", isValidLocal(locales[0]!));
console.log("Producto válido:", isValidProducto(productos[0]!));