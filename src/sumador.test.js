import venta from "./sumador.js";

/*describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });
});*/


describe("monto venta" , () => {
  const Venta = new venta();

  it("deberia leer monto total", () => {
    expect(venta.leerMontoApagar(10)).toEqual(10);
  });

  it("deberia leer monto efectivo", () => {
    expect(venta.leermonto(20)).toEqual(10);
  });
   
  it("deberia restar los dos monto", () => {
    expect(venta.restar(leerMontoApagar(10),leermonto(20))).toEqual(10);
  });

});