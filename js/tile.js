/* Everaldo Gomes - everaldo.gomes@ifpr.edu.br
                    everaldo.gomes@gmail.com
  http://www.github.com/everaldo
  http://www.github.com/web-jogos

  22/09/2016 - Tabuleiro de Xadrez

*/

var COR_BRANCA = "rgb(255,255,255)";
var COR_PRETA = "rgb(0,0,0)";

function Tile(context, x, y, tamanho, cor){
  this.context = context;
  this.x = x;
  this.y = y;
  this.tamanho = tamanho;
  this.cor = cor;
}

Tile.prototype.desenhar = function(){
  var ctx = this.context;
  ctx.save();
  ctx.beginPath();
  ctx.rect(this.x,this.y,this.tamanho,this.tamanho);
  ctx.fillStyle = this.cor;
  ctx.fill();
  ctx.restore();
};

function TileBranco(context, x, y, tamanho){
  Tile.call(this, context, x, y, tamanho, COR_BRANCA);
}

TileBranco.prototype = Object.create(Tile.prototype);
TileBranco.prototype.constructor = TileBranco;

function TilePreto(context, x, y, tamanho){
  Tile.call(this, context, x, y, tamanho, COR_PRETA);
}

TilePreto.prototype = Object.create(Tile.prototype);
TileBranco.prototype.constructor = TilePreto;
