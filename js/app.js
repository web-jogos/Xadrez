/* Everaldo Gomes - everaldo.gomes@ifpr.edu.br
                    everaldo.gomes@gmail.com

  22/09/2016 - Tabuleiro de Xadrez

  Baseado na versão escrita por Raphael (RpxZero)
  https://github.com/RpxZero/Tabuleiro-Xadrez



*/

var NUM_COLUNAS = 8;
var LARGURA_CANVAS = 512;
var ALTURA_CANVAS = 512;
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
disporPecas = new DisporPecas(this.context, tabuleiro);
disporPecas.desenhaPecas();
//tabuleiro.setDisporPecas(disporPecas);
//this.disporPecas = new DisporPecas(this.context, this.tabuleiro);
//tabuleiro.setDisporPecas(this.disporPecas);

var tileAntigo;
var tileAtual;
var mov_possiveis = [];
var houve_movimento = false;
var vez_branco = true;
$(tabuleiro).on('tabuleiro:click', function(event){
  tile = event.clickData.tile;
  tileAtual = null;
  if(tile.getPeca() !== undefined && vez_branco == true && tile.getPeca().branca() == true)
    tileAtual = tile;
  if(tile.getPeca() !== undefined && vez_branco == false && tile.getPeca().branca() == false)
    tileAtual = tile;
  if(tile.getCor() == COR_MOVIMENTOS_POSSIVEIS)
    tileAtual = tile;

  if(tileAtual != null && tileAtual.getCor() == COR_MOVIMENTOS_POSSIVEIS){
    tileAtual.setPeca(tileAntigo.getPeca());
    label = tileAtual.getLabel();
    tileAtual.getPeca().setTile(tileAtual);
    tileAtual.getPeca().setX(label[0]);
    tileAtual.getPeca().setY(label[1]);
    tileAntigo.setPeca(undefined);

    if(vez_branco == true){
      vez_branco = false;
    }
    else {
      vez_branco = true;
    }
    houve_movimento = true;
    //tile.Atual.Desmarcar();
  }

  if (tileAntigo != null){
    tileAntigo.Desmarcar();
  //  if (tileAntigo.esta_ocupada() == true)
  //  mov_possiveis = tileAntigo.getPeca().movimentosPossiveis();
    for(i = 0; i < mov_possiveis.length; i++){
      tabuleiro.getTileLabel(mov_possiveis[i]).Desmarcar();
    }
  }

  if(tileAtual != null){

  tileAtual.MarcarSelecionada();
  console.log(tileAtual);

  if(tileAtual.esta_ocupada() == true && houve_movimento == false){
    mov_possiveis = tileAtual.getPeca().movimentosPossiveis();
    for(i = 0; i < mov_possiveis.length; i++){
      if(tabuleiro.getTileLabel(mov_possiveis[i]).esta_ocupada() == false){
        tabuleiro.getTileLabel(mov_possiveis[i]).MarcarMovimentoPossivel();
      }
    }
  }

  houve_movimento = false;
  tileAntigo = tileAtual;
}
  disporPecas.desenhaPecas();
});

var bispoB = new Image();
var bispoP = new Image();
var cavaloB = new Image();
var cavaloP = new Image();
var peaoB = new Image();
var peaoP = new Image();
var rainhaB = new Image();
var rainhaP = new Image();
var reiB = new Image();
var reiP = new Image();
var torreB = new Image();
var torreP = new Image();

bispoB.src = "images/Pecas Xadrez/BispoB.png";
bispoP.src = "images/Pecas Xadrez/BispoP.png";
cavaloB.src = "images/Pecas Xadrez/CavaloDB.png";
cavaloP.src = "images/Pecas Xadrez/CavaloDP.png";
peaoB.src = "images/Pecas Xadrez/PeaoB.png";
peaoP.src = "images/Pecas Xadrez/PeaoP.png";
rainhaB.src = "images/Pecas Xadrez/RainhaB.png";
rainhaP.src = "images/Pecas Xadrez/RainhaP.png";
reiB.src = "images/Pecas Xadrez/ReiB.png";
reiP.src = "images/Pecas Xadrez/ReiP.png";
torreB.src = "images/Pecas Xadrez/TorreB.png";
torreP.src = "images/Pecas Xadrez/TorreP.png";


  //http://publicdomainvectors.org/photos/Chess-Pieces.png
