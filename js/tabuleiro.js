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
}

Tabuleiro.prototype.criarTiles = function(){
  this.tiles = [];
  for(var i = 0; i < this.num_colunas; i++){
    for(var j = 0; j < this.num_colunas; j++){
      var tipo_tile = this._get_tipo_tile(i, j);
      this.tiles.push(new tipo_tile(this.context,
        this.x + (i * this.tamanho_coluna),
        this.y + (j * this.tamanho_coluna),
        this.tamanho_coluna));
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
