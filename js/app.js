/* Everaldo Gomes - everaldo.gomes@ifpr.edu.br
                    everaldo.gomes@gmail.com

  22/09/2016 - Tabuleiro de Xadrez

  Baseado na versão escrita por Raphael (RpxZero)
  https://github.com/RpxZero/Tabuleiro-Xadrez



*/



var NUM_COLUNAS = 8;
var LARGURA_CANVAS = 400;
var ALTURA_CANVAS = 400;
var LARGURA_BORDA = 5;

var canvas = document.createElement("canvas");
canvas.width = LARGURA_CANVAS + 2 * LARGURA_BORDA;
canvas.height = ALTURA_CANVAS + 2 * LARGURA_BORDA;
var context = this.canvas.getContext("2d");
document.body.appendChild(canvas);

var tabuleiro = new Tabuleiro(context, 0, 0,
  LARGURA_CANVAS, ALTURA_CANVAS, NUM_COLUNAS,
  LARGURA_BORDA);

tabuleiro.desenhar();

$(tabuleiro).on('tabuleiro:click', function(event){
  console.log(event.clickData.tile);
});
