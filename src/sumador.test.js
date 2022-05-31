import venta from "./sumador.js";

/*describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });
});*/


describe("monto venta" , () => {
  const Venta = new venta();
  it("deberia leer monto", () => {
    expect(venta.leermonto('10')).toEqual('10');
  });
})