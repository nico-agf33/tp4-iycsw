import { describe, expect, it } from "vitest";
import { DiaDisponibilidad } from "../../domain/disponibilidad/DiaDisponibilidad";

describe("US06 - Rechazar intervalo inválido", () => {
  it("lanza error cuando inicio es mayor que fin", () => {

    /// -arrange
    const disponibilidad = new DiaDisponibilidad();

    /// -act+assert
    expect(() =>
      disponibilidad.crearIntervaloLaboral(
        "1",
        "10:00",
        "09:00"
      )
    ).toThrow();
  });
});