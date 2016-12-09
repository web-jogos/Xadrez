/* Everaldo Gomes - everaldo.gomes@ifpr.edu.br
                    everaldo.gomes@gmail.com
  http://www.github.com/everaldo
  http://www.github.com/web-jogos

  22/09/2016 - Tabuleiro de Xadrez

*/

var COR_BORDA = "rgb(139,69,19)";

function Tabuleiro(context, x, y, largura, altura, num_colunas,
                  borda){
  this.context = context;
  this.x = x + borda;
  this.y = y + borda;
  this.largura = largura;
  this.altura = altura;
  this.num_colunas = num_colunas;
  this.borda = borda;
  this.tamanho_coluna = (largura - x)  / 8;
  this.col_labels = "ABCDEFGH";
  this.lin_labels = "87654321";
  this.criarTiles();
  this.clickNoTabuleiro();
}

Tabuleiro.prototype.setDisporPecas = function(dp){
  //this.disporPecas = dp;
  //this.disporPecas.desenhaPecas();
}

Tabuleiro.prototype.criarTiles = function(){
  this.tiles = [];
  for(var i = 0; i < this.num_colunas; i++){
    for(var j = 0; j < this.num_colunas; j++){
      var tipo_tile = this._get_tipo_tile(i, j);
      var label = this._get_label(i, j);
      this.tiles.push(new tipo_tile(this.context,
        label, this,
        this.x + (i * this.tamanho_coluna),
        this.y + (j * this.tamanho_coluna),
        this.tamanho_coluna));
    }
  }
}

Tabuleiro.prototype._get_label = function(i, j){
  return this.col_labels[i] + this.lin_labels[j];
}

Tabuleiro.prototype.clickNoTabuleiro = function(){
  var canvas = this.context.canvas;
  var that = this;
  $(canvas).click(function(event){
    var x = event.pageX - this.offsetLeft;
    var y = event.pageY - this.offsetTop;
    var tile = that.getTile(x, y);
    if(tile !== undefined){
      var clickData = {tile: tile, x: x, y: y};
      $(that).trigger({type: 'tabuleiro:click',
       clickData: clickData});
     }
  });
}

Tabuleiro.prototype.getTile = function(x, y){
  var coords = {x: x, y: y};
  for(var i in this.tiles){
    if(this.tiles[i].contains(coords)){
      return this.tiles[i];
    }
  }
}

Tabuleiro.prototype.getTileLabel = function(l){
  for(var i in this.tiles){
    if(this.tiles[i].label == l){
      //console.log("oi");
      return this.tiles[i];
    }
  }
}

Tabuleiro.prototype._get_tipo_tile = function(i, j){
  if((i + j) % 2 == 0){
    return TileBranco;
  }
  else {
    return TilePreto;
  }
}


Tabuleiro.prototype.desenhar = function(){
  for(var i in this.tiles){
    this.tiles[i].desenhar();
  }
  this._desenha_borda();
}

Tabuleiro.prototype._desenha_borda = function(){
  var ctx = this.context;
  ctx.save();
  ctx.beginPath();
	ctx.strokeStyle= COR_BORDA;
  ctx.lineWidth = this.borda;
	ctx.strokeRect(this.x - this.borda/2, this.y - this.borda/2,
    this.largura+ (this.borda), this.altura + (this.borda));
  ctx.restore();
}
