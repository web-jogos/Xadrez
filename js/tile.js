/* Everaldo Gomes - everaldo.gomes@ifpr.edu.br
                    everaldo.gomes@gmail.com
  http://www.github.com/everaldo
  http://www.github.com/web-jogos

  22/09/2016 - Tabuleiro de Xadrez

*/

COR_BRANCA = "rgb(236,236,236)";
COR_PRETA = "rgb(51,51,51)";
COR_MOVIMENTOS_POSSIVEIS = "rgba(64,224,208, 0.5)";
COR_SELECIONADA = "rgba(255,20,147, 0.5)";

function Tile(context, label, tabuleiro, x, y, tamanho, cor){
  this.context = context;
  this.label = label;
  this.tabuleiro = tabuleiro;
  this.x = x;
  this.y = y;
  this.tamanho = tamanho;
  this.cor = cor;
  this.cor_original = cor;
  //this.ocupada = false;
  this.peca = undefined;
}

Tile.prototype.getLabel = function(){
  return this.label;
}

Tile.prototype.getTabuleiro = function(){
  return this.tabuleiro;
}

Tile.prototype.getX = function(){
  return this.x;
}

Tile.prototype.getY = function(){
  return this.y;
}

Tile.prototype.setPeca = function(peca){
  this.peca = peca;
}

Tile.prototype.getPeca = function(){
  return this.peca;
}

Tile.prototype.getCor = function(){
  return this.cor;
}

Tile.prototype.toString = function(){
  return this.label;
}
Tile.prototype.esta_livre = function(){
  return this.peca === undefined;
}
Tile.prototype.esta_ocupada = function(){
  if (this.peca !== undefined)
    return true;
  else return false;
}

Tile.prototype.contains = function(coords){
  var x = this.x;
  var y = this.y;
  var tamanho = this.tamanho;
  if(x <= coords.x && coords.x < x + tamanho &&
      y <= coords.y && coords.y < y + tamanho){
        return true;
  }
  else{
        return false;
  }
}


Tile.prototype.desenhar = function(){
  var ctx = this.context;
  ctx.save();
  ctx.beginPath();
  ctx.rect(this.x,this.y,this.tamanho,this.tamanho);
  ctx.fillStyle = this.cor_original;
  //ctx.fill();
  ctx.rect(this.x,this.y,this.tamanho,this.tamanho);
  ctx.fillStyle = this.cor;
  ctx.fill();
  ctx.restore();
};

function TileBranco(context, label, tabuleiro, x, y, tamanho){
  Tile.call(this, context, label, tabuleiro, x, y, tamanho, COR_BRANCA);
}

TileBranco.prototype = Object.create(Tile.prototype);
TileBranco.prototype.constructor = TileBranco;

function TilePreto(context, label, tabuleiro, x, y, tamanho){
  Tile.call(this, context, label, tabuleiro, x, y, tamanho, COR_PRETA);
}

function TileCor(){
    Tile.call(this, this.context, this.label, this.x, this.y, this.tamanho, this.cor);
}

Tile.prototype.MarcarSelecionada = function(){
  //this.marcada = true;
  this.cor = COR_SELECIONADA;
  this.desenhar();
}
Tile.prototype.MarcarMovimentoPossivel = function(){
  this.cor = COR_MOVIMENTOS_POSSIVEIS;
  this.desenhar();
}
Tile.prototype.Desmarcar = function(){
  this.cor = this.cor_original;
  this.desenhar();
}


TilePreto.prototype = Object.create(Tile.prototype);
//TileBranco.prototype.constructor = TilePreto;
TilePreto.prototype.constructor = TilePreto;
