function Cavalo(context, brancas_baixo, posicao_inicial, cor_branca, tile, sprite){
  this.sprite = sprite;
  this.context = context;
  this.cor_branca = cor_branca;
  this.posicao_inicial = posicao_inicial;
  this.tile = tile;
  this.x = COLUNAS_LABELS.indexOf(this.posicao_inicial[0]);
  this.y = LINHAS_LABELS.indexOf(this.posicao_inicial[1]);
  this.nome = "cavalo";
}

Cavalo.prototype.getNome = function(){
  return this.nome;
}

Cavalo.prototype.branca = function(){
  return this.cor_branca;
}

Cavalo.prototype.setX = function(x){
  this.x = COLUNAS_LABELS.indexOf(x);
}

Cavalo.prototype.setY = function(y){
  this.y = LINHAS_LABELS.indexOf(y);
}

Cavalo.prototype.setTile = function(tile){
  this.tile = tile;
}

Cavalo.prototype.desenhaPeca = function(){
  if(this.tile.getLabel() != "00")
    this.context.drawImage(this.sprite, this.tile.getX(), this.tile.getY());
    this.context.closePath();
}

Cavalo.prototype.calculaMovimentosPossiveis = function(){
  var mov_possiveis = []

  x = this.x;
  y = this.y;

  if (x+1 < 8 && y+2 < 8){
    mov_possiveis.push([y+2, x+1]);
  }
  if (x+2 < 8 && y+1 < 8){
    mov_possiveis.push([y+1, x+2]);
  }
  if (x-2 >= 0 && y+1 < 8){
    mov_possiveis.push([y+1, x-2]);
  }
  if (x-1 >= 0 && y+2 < 8){
    mov_possiveis.push([y+2, x-1]);
  }
  if (x-1 >= 0 && y-2 >= 0){
    mov_possiveis.push([y-2, x-1]);
  }
  if (x-2 >= 0 && y-1 >= 0){
    mov_possiveis.push([y-1, x-2]);
  }
  if (x+2 < 8 && y-1 >= 0){
    mov_possiveis.push([y-1, x+2]);
  }
  if (x+1 < 8 && y-2 >= 0){
    mov_possiveis.push([y-2, x+1]);
  }

  return mov_possiveis;
}

Cavalo.prototype.movimentosPossiveis = function(){
  var mov_possiveis = this.calculaMovimentosPossiveis();
  var mov_possiveis_L = [];

  for(i = 0; i < mov_possiveis.length; i++){
    if(this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[mov_possiveis[i][1]]+ LINHAS_LABELS[mov_possiveis[i][0]]]).esta_ocupada() == false)
  //  || this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[mov_possiveis[i][1]]+ LINHAS_LABELS[mov_possiveis[i][0]]]).getPeca().branca() != this.branca())
    mov_possiveis_L.push([COLUNAS_LABELS[mov_possiveis[i][1]]+ LINHAS_LABELS[mov_possiveis[i][0]]]);
  }

  for(i = 0; i < mov_possiveis_L.length; i++){
    console.log(mov_possiveis_L[i]);
  }
  return mov_possiveis_L;
}
