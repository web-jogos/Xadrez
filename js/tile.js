/* Everaldo Gomes - everaldo.gomes@ifpr.edu.br
                    everaldo.gomes@gmail.com
  http://www.github.com/everaldo
  http://www.github.com/web-jogos

  22/09/2016 - Tabuleiro de Xadrez

*/

var COR_BRANCA = "rgb(255,255,255)";
var COR_PRETA = "rgb(0,0,0)";

function Tile(context, label, x, y, tamanho, cor){
  this.context = context;
  this.label = label;
  this.x = x;
  this.y = y;
  this.tamanho = tamanho;
  this.cor = cor;
}

Tile.prototype.toString = function(){
  return this.label;
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
  var grd = ctx.createLinearGradient(this.x, this.y,
     this.x + this.tamanho, this.y + this.tamanho);
  grd.addColorStop(0,this.cor);
  grd.addColorStop(0.85,this.cor);
  grd.addColorStop(1, COR_BRANCA);
  ctx.beginPath();
  ctx.fillStyle = grd;
  ctx.fillRect(this.x,this.y,this.tamanho,this.tamanho);

  var sprite = this.sprite;
  ctx.drawImage(sprite.imagem,
  sprite.x, sprite.y,sprite.largura, sprite.altura,
    this.x, this.y, this.tamanho, this.tamanho);
  ctx.restore();
};

function TileBranco(context, label, x, y, tamanho){
  Tile.call(this, context, label, x, y, tamanho, COR_BRANCA);
}

TileBranco.prototype = Object.create(Tile.prototype);
TileBranco.prototype.constructor = TileBranco;

function TilePreto(context, label, x, y, tamanho){
  Tile.call(this, context, label, x, y, tamanho, COR_PRETA);
}

TilePreto.prototype = Object.create(Tile.prototype);
TilePreto.prototype.constructor = TilePreto;
