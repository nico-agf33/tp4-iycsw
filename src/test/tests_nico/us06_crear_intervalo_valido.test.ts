import { describe, expect, it } from "vitest";
import { DiaDisponibilidad } from "../../domain/disponibilidad/DiaDisponibilidad";

describe("US06 - Crear intervalo laboral válido", () => {
  it("crea un intervalo cuando inicio < fin", () => {

    /// -arrange
    const disponibilidad = new DiaDisponibilidad();

    /// -act
    const intervalo =
      disponibilidad.crearIntervaloLaboral(
        "1",
        "09:00",
        "12:00"
      );

    /// -assert
    expect(intervalo.horaInicio).toBe("09:00");
    expect(intervalo.horaFin).toBe("12:00");
    expect(disponibilidad.obtenerIntervalos()).toHaveLength(1);
  });
});