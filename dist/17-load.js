"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
// como la libreria lodash no tiene soporte de ts no puede ayudar vs con el autocompletado
const data = [
    {
        username: 'Franco',
        role: 'admin'
    },
    {
        username: 'Flor',
        role: 'seller'
    },
    {
        username: 'santiago',
        role: 'customer'
    },
    {
        username: 'micaela',
        role: 'customer'
    }
];
const rta = lodash_1.default.groupBy(data, (item) => item.role);
console.log(rta);
// agrupa el objeto por roles
