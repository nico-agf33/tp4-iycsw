import { Intervalo } from "../intervalo/Intervalo";

export class DiaDisponibilidad {
  constructor(
    public fecha: string,
    public intervalos: Intervalo[] = []
  ) {}
}