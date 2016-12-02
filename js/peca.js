PECA_BRANCA = "branca";
PECA_PRETA = "preta";

function Peca(nome, coords_inicial, cor ){

}

function PecaBranca(nome, coords_inicial){
  Peca.call(this, nome, coords_inicial, PECA_BRANCA);
}

PecaBranca.prototype = Object.create(Peca.prototype);
PecaBranca.prototype.constructor = PecaBranca;

function PecaPreta(nome, coords_inicial){
  Peca.call(this, nome, coords_inicial, PECA_PRETA);
}

PecaPreta.prototype = Object.create(Peca.prototype);
PecaPreta.prototype.constructor = PecaBranca;
