// Se debe crear una clase Celular que represente un teléfono móvil.
//
// Requisitos:
// Encapsulamiento: Los atributos deben ser privados y accesibles solo mediante getters y setters.
// Constructor con parámetros opcionales y obligatorios:
// Obligatorios: Marca, modelo y sistema operativo.
//     Opcionales: Memoria RAM(por defecto 4GB), almacenamiento interno(por defecto 64GB) y 
// //estado de encendido(por defecto apagado).
// Métodos adicionales:
// encenderApagar(): Cambia el estado de encendido / apagado del celular.
//     mostrarInfo(): Retorna una cadena con los datos del celular.

// GRUPO DE TRABAJO

// GARCIA MARCELO , ARENZANA BRUNO , MANUEL IRYGOYEN
import { Celular } from "./Celular";

// caso 1 completo a mano los valores
const cel1 = new Celular("Samsumg", "A 22", "Android 12.8", 8, 256, true);
//caso 2 dejo el constructor sin los opcionales y carga por defecto 4 gb ram, 64 almacenamiento y False en prendido/ apagado.
const cel2 = new Celular("Iphone", "14 Pro", "Ios 16.8");
//caso 3 completo los opcionales con "undefined"
const cel3 = new Celular("Xiaomi ReadMi", "Pro 13", "Android 14.4", undefined, undefined, undefined);


console.log("-------Celular numero 1--------------------------------")
cel1.mostrarInfo();
console.log("-------Celular numero 2--------------------------------")
cel2.mostrarInfo();
console.log("-------Celular numero 3--------------------------------")
cel3.mostrarInfo();
console.log("-----------Prender Apagar- celular 1 , 2 y 3 ----------")
console.log("celular 1 "); cel1.prenderApagar();
console.log("celular 2 "); cel2.prenderApagar();
console.log("celular 2 "); cel3.prenderApagar();

cel1.setpMarca("Motorola");
cel1.setpModelo(" - ")
cel1.mostrarInfo();