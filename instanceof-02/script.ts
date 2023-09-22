class Veiculo {
  rodas: number;
  combustivel: string;
  constructor(rodas: number, combustivel: string) {
    this.rodas = rodas;
    this.combustivel = combustivel;
  }

  acelerar() {
    console.log("acelerou");
  }
}

class Moto extends Veiculo {
  capacete: boolean;
  constructor(rodas: number, capacete: boolean, combustivel: string) {
    super(rodas, combustivel);
    this.capacete = capacete;
  }
  empinar() {
    super.acelerar();
    console.log("empinou com " + this.rodas + " rodas");
  }
}

const honda = new Moto(2, true, "gasolina");
const hondaCivic = new Veiculo(4, "álcool");


if (hondaCivic instanceof Veiculo) {
  console.log(hondaCivic.rodas)
}