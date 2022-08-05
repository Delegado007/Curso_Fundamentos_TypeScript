import { subDays, format } from "date-fns";

const date = new Date(1988, 1, 28); // 0 = enero, 1 = febrero
const rta = subDays(date, 30) // restamos 30 dias a la fecha pasada en date
const str = format(rta, 'yyyy/MM/dd'); // formateamos la fecha
console.log(str)
