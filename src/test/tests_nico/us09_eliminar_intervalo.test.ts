import { describe, expect, it } from "vitest";
import { DiaDisponibilidad } from "../../domain/disponibilidad/DiaDisponibilidad";

describe("US09 - Eliminar intervalo existente", () => {
  it("elimina un intervalo previamente agregado", () => {

    /// -arrange
    const disponibilidad = new DiaDisponibilidad();

    disponibilidad.crearIntervaloLaboral(
      "1",
      "09:00",
      "12:00"
    );

    /// -act
    disponibilidad.eliminarIntervalo("1");

    /// -assert
    expect(disponibilidad.obtenerIntervalos()).toHaveLength(0);
  });
});