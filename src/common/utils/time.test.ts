import { tempoParaSegundos } from "./time";

describe("tempoParaSegundos", () => {
  it("deve converter minutos e segundos corretamente", () => {
    expect(tempoParaSegundos("01:30")).toBe(90);
    expect(tempoParaSegundos("00:45")).toBe(45);
  });

  it("deve converter horas, minutos e segundos quando informados", () => {
    expect(tempoParaSegundos("01:05:20")).toBe(3920);
    expect(tempoParaSegundos("02:00:00")).toBe(7200);
  });

  it("deve retornar 0 para tempo zerado", () => {
    expect(tempoParaSegundos("00:00")).toBe(0);
    expect(tempoParaSegundos("00:00:00")).toBe(0);
  });
});
