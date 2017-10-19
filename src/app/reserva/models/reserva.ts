import { Periodo } from './periodo';
import { Sala } from './sala';

export class Reserva {
    id: number;
    titulo: string;
    sala: Sala;
    periodo: Periodo;
    email: string;
}
