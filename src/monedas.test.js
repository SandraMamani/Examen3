import fraccion from "./monedas.js";

describe("---Monedas fraccion---" , () => {
  const Fraccion = new fraccion();

  it("Mostrar el mensaje de perdiste el juego", () => {
    expect(Fraccion("2")).toEqual("1","1");
  });


});