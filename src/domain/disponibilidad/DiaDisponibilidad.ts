import { Intervalo } from "../intervalo/Intervalo";

export class DiaDisponibilidad {
  private intervalos: Intervalo[] = [];

  crearIntervaloVacio(intervalo: Intervalo): void {
    this.intervalos.push(intervalo);
  }

  crearIntervaloLaboral(
    id: string,
    horaInicio: string,
    horaFin: string
  ): Intervalo {

    if (horaInicio >= horaFin) {
      throw new Error(
        "La hora de inicio debe ser menor que la hora de fin"
      );
    }

    const intervalo = new Intervalo(
      id,
      horaInicio,
      horaFin,
      "LABORAL"
    );

    this.intervalos.push(intervalo);

    return intervalo;
  }

  eliminarIntervalo(id: string): void {

    const intervalo = this.intervalos.find(
      (i) => i.id === id
    );

    if (!intervalo) {
      throw new Error("Intervalo inexistente");
    }

    intervalo.eliminarIntervalo();
  }

  obtenerIntervalos(): Intervalo[] {

    return this.intervalos.filter(
      (i) => i.intervaloActivo()
    );
  }
}